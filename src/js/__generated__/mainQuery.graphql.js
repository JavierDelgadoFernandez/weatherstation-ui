/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule mainQuery.graphql
 * @generated SignedSource<<b9ebc9174ba2158e020892f5fb991870>>
 * @relayHash 687c41fe2b699883d5c831b3ed96a27d
 * @flow
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';

*/


/*
query mainQuery {
  ...HomeHome
}

fragment HomeHome on Query {
  measures {
    ...ControlMeasure
  }
}

fragment ControlMeasure on Measure {
  temperature
  humidity
  pressure
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "mainQuery",
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "HomeHome",
        "args": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "mainQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "mainQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Measure",
        "name": "measures",
        "plural": true,
        "selections": [
          {
            "kind": "InlineFragment",
            "type": "Measure",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "temperature",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "humidity",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "pressure",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query mainQuery {\n  ...HomeHome\n}\n\nfragment HomeHome on Query {\n  measures {\n    ...ControlMeasure\n  }\n}\n\nfragment ControlMeasure on Measure {\n  temperature\n  humidity\n  pressure\n}\n"
};

module.exports = batch;