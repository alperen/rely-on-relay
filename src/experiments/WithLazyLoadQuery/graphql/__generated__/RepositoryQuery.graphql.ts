/**
 * @generated SignedSource<<0bd548bf9d36806edb8409556249495e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type RepositoryQuery$variables = {
  name: string;
  owner: string;
};
export type RepositoryQuery$data = {
  readonly repository: {
    readonly description: string | null;
    readonly id: string;
    readonly name: string;
  } | null;
};
export type RepositoryQuery = {
  response: RepositoryQuery$data;
  variables: RepositoryQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "owner"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      },
      {
        "kind": "Variable",
        "name": "owner",
        "variableName": "owner"
      }
    ],
    "concreteType": "Repository",
    "kind": "LinkedField",
    "name": "repository",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RepositoryQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "RepositoryQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "0d5cdabd49e46481ef302594f9594b22",
    "id": null,
    "metadata": {},
    "name": "RepositoryQuery",
    "operationKind": "query",
    "text": "query RepositoryQuery(\n  $owner: String!\n  $name: String!\n) {\n  repository(owner: $owner, name: $name) {\n    id\n    name\n    description\n  }\n}\n"
  }
};
})();

(node as any).hash = "652d5af87a83d5ed8e3a57587052a69b";

export default node;
