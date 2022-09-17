import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { RelayEnvironmentProvider } from 'react-relay';
import { createMockEnvironment } from 'relay-test-utils';
import RepositoryQueryDocument, { RepositoryQuery } from '../graphql/__generated__/RepositoryQuery.graphql';
import WithLazyLoadQuery from '../WithLazyLoadQuery';

describe('WithLazyLoadQuery', () => {
  it('shows loading text', () => {
    const environment = createMockEnvironment();

    render(
      <RelayEnvironmentProvider environment={environment}>
        <WithLazyLoadQuery />
      </RelayEnvironmentProvider>
    );

    expect(screen.getByText('Loading')).toBeInTheDocument();
  });

  it('shows error text', async () => {
    const environment = createMockEnvironment();

    render(
      <RelayEnvironmentProvider environment={environment}>
        <WithLazyLoadQuery />
      </RelayEnvironmentProvider>
    );


    act(() => {
      environment.mock.reject(RepositoryQueryDocument, new Error('Calm down buddy, I made it.'))
    });

    expect(await screen.findByText('Something went wrong')).toBeInTheDocument();
  });

  it('shows not found text', async () => {
    const environment = createMockEnvironment();

    render(
      <RelayEnvironmentProvider environment={environment}>
        <WithLazyLoadQuery />
      </RelayEnvironmentProvider>
    );

    act(() => {
      environment.mock.resolve(RepositoryQueryDocument, {
        data: {
          repository: null
        } as RepositoryQuery['response']
      });
    });

    expect(await screen.findByText('The given repository could not found.')).toBeInTheDocument();
  });

  it('shows repository detail text', async () => {
    const environment = createMockEnvironment();

    render(
      <RelayEnvironmentProvider environment={environment}>
        <WithLazyLoadQuery />
      </RelayEnvironmentProvider>
    );

    act(() => {
      environment.mock.resolve(RepositoryQueryDocument, {
        data: {
          repository: {
            id: "id",
            description: "description",
            name: "name",
          }
        } as RepositoryQuery['response']
      });
    });

    expect(await screen.findByText('{"id":"id","name":"name","description":"description"}')).toBeInTheDocument();
  });
});