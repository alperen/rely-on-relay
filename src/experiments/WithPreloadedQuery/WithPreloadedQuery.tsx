import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from 'react-relay';
import RepositoryQueryDocument, {
  RepositoryQuery
} from '../../graphql/__generated__/RepositoryQuery.graphql';

interface WithPreloadedQueryProps {
  preloadedQuery: PreloadedQuery<RepositoryQuery>;
}

function WithPreloadedQuery({ preloadedQuery }: WithPreloadedQueryProps) {
  const data = usePreloadedQuery(RepositoryQueryDocument, preloadedQuery);

  if (!data.repository) {
    return <span>The given repository could not found.</span>;
  }

  return <code>{JSON.stringify(data.repository)}</code>;
}

export default function WithPreloadedQueryPresenter() {
  const [queryReference, loadQuery] = useQueryLoader<RepositoryQuery>(RepositoryQueryDocument);

  return (
    <div>
      <button
        onClick={() =>
          loadQuery({
            name: 'relay',
            owner: 'facebook',
          })
        }
      >
        Load the query
      </button>

      <ErrorBoundary fallback={<>Something went wrong</>}>
        <Suspense fallback="Loading">
          {queryReference && <WithPreloadedQuery preloadedQuery={queryReference} />}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
