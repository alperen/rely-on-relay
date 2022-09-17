import graphql from 'babel-plugin-relay/macro';

const RepositoryQuery = graphql`
  query RepositoryQuery($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      id

      name
      description
    }
  }
`;

export default RepositoryQuery;
