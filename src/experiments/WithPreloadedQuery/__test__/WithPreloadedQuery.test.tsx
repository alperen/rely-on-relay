import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { RelayEnvironmentProvider } from "react-relay";
import { createMockEnvironment } from "relay-test-utils";
import RepositoryQueryDocument, {
  RepositoryQuery
} from '../../../graphql/__generated__/RepositoryQuery.graphql';
import WithPreloadedQuery from "../WithPreloadedQuery";

describe('WithPreloadedQuery', () => {
  it('shows repository details text', async () => {
    const environment = createMockEnvironment();

    render(
      <RelayEnvironmentProvider environment={environment}>
        <WithPreloadedQuery />
      </RelayEnvironmentProvider>
    );

    await userEvent.click(screen.getByText('Load the query'));

    act(() => {
      environment.mock.resolve(RepositoryQueryDocument, {
        data: {
          repository: {
            id: 'id',
            description: 'description',
            name: 'name',
          },
        } as RepositoryQuery['response'],
      });
    });

    expect(
      await screen.findByText('{"id":"id","name":"name","description":"description"}'),
    ).toBeInTheDocument();
  });
});