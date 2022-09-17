import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useLazyLoadQuery } from 'react-relay';
import RepositoryQueryDocument from './graphql/RepositoryQuery';
import { RepositoryQuery } from './graphql/__generated__/RepositoryQuery.graphql';


function WithLazyLoadQuery() {
  const data = useLazyLoadQuery<RepositoryQuery>(RepositoryQueryDocument, {
    owner: 'facebook',
    name: 'relay',
  });

  if (!data.repository) {
    return <span>The given repository could not found.</span>;
  }

  return <code>{JSON.stringify(data.repository)}</code>;
}

export default function SafeWithLazyLoadQuery() {
  return (
    <ErrorBoundary fallback={<>Something went wrong</>}>
      <Suspense fallback="Loading">
        <WithLazyLoadQuery />
      </Suspense>
    </ErrorBoundary>
  );
}
