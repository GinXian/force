/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type homeRoutes_HomeQueryVariables = {};
export type homeRoutes_HomeQueryResponse = {
    readonly homePage: {
        readonly " $fragmentRefs": FragmentRefs<"HomeApp_homePage">;
    } | null;
    readonly orderedSet: {
        readonly " $fragmentRefs": FragmentRefs<"HomeApp_orderedSet">;
    } | null;
};
export type homeRoutes_HomeQuery = {
    readonly response: homeRoutes_HomeQueryResponse;
    readonly variables: homeRoutes_HomeQueryVariables;
};



/*
query homeRoutes_HomeQuery {
  homePage {
    ...HomeApp_homePage
  }
  orderedSet(id: "529939e2275b245e290004a0") {
    ...HomeApp_orderedSet
    id
  }
}

fragment HomeApp_homePage on HomePage {
  heroUnits(platform: DESKTOP) {
    internalID
    ...HomeHeroUnit_heroUnit
    id
  }
  ...HomeArtworkModules_homePage
}

fragment HomeApp_orderedSet on OrderedSet {
  ...HomeFeaturedEventsRail_orderedSet
}

fragment HomeArtworkModules_homePage on HomePage {
  artworkModules(maxRails: -1, maxFollowedGeneRails: -1, order: [ACTIVE_BIDS, RECENTLY_VIEWED_WORKS, SIMILAR_TO_RECENTLY_VIEWED, SAVED_WORKS, SIMILAR_TO_SAVED_WORKS, FOLLOWED_ARTISTS, FOLLOWED_GALLERIES, RECOMMENDED_WORKS, RELATED_ARTISTS, LIVE_AUCTIONS, CURRENT_FAIRS, FOLLOWED_GENES, GENERIC_GENES]) {
    title
    key
    params {
      internalID
      relatedArtistID
      followedArtistID
    }
    id
  }
}

fragment HomeFeaturedEventsRail_orderedSet on OrderedSet {
  items {
    __typename
    ... on FeaturedLink {
      internalID
      title
      subtitle
      href
      image {
        cropped(width: 325, height: 244) {
          src
          srcSet
        }
      }
      id
    }
    ... on Node {
      id
    }
  }
}

fragment HomeHeroUnit_heroUnit on HomePageHeroUnit {
  backgroundImageURL
  heading
  title
  subtitle
  linkText
  href
  creditLine
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "529939e2275b245e290004a0"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "subtitle",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "homeRoutes_HomeQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "HomePage",
        "kind": "LinkedField",
        "name": "homePage",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "HomeApp_homePage"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "OrderedSet",
        "kind": "LinkedField",
        "name": "orderedSet",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "HomeApp_orderedSet"
          }
        ],
        "storageKey": "orderedSet(id:\"529939e2275b245e290004a0\")"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "homeRoutes_HomeQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "HomePage",
        "kind": "LinkedField",
        "name": "homePage",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "platform",
                "value": "DESKTOP"
              }
            ],
            "concreteType": "HomePageHeroUnit",
            "kind": "LinkedField",
            "name": "heroUnits",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "backgroundImageURL",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "heading",
                "storageKey": null
              },
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "linkText",
                "storageKey": null
              },
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "creditLine",
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": "heroUnits(platform:\"DESKTOP\")"
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "maxFollowedGeneRails",
                "value": -1
              },
              {
                "kind": "Literal",
                "name": "maxRails",
                "value": -1
              },
              {
                "kind": "Literal",
                "name": "order",
                "value": [
                  "ACTIVE_BIDS",
                  "RECENTLY_VIEWED_WORKS",
                  "SIMILAR_TO_RECENTLY_VIEWED",
                  "SAVED_WORKS",
                  "SIMILAR_TO_SAVED_WORKS",
                  "FOLLOWED_ARTISTS",
                  "FOLLOWED_GALLERIES",
                  "RECOMMENDED_WORKS",
                  "RELATED_ARTISTS",
                  "LIVE_AUCTIONS",
                  "CURRENT_FAIRS",
                  "FOLLOWED_GENES",
                  "GENERIC_GENES"
                ]
              }
            ],
            "concreteType": "HomePageArtworkModule",
            "kind": "LinkedField",
            "name": "artworkModules",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "key",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "HomePageModulesParams",
                "kind": "LinkedField",
                "name": "params",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "relatedArtistID",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "followedArtistID",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": "artworkModules(maxFollowedGeneRails:-1,maxRails:-1,order:[\"ACTIVE_BIDS\",\"RECENTLY_VIEWED_WORKS\",\"SIMILAR_TO_RECENTLY_VIEWED\",\"SAVED_WORKS\",\"SIMILAR_TO_SAVED_WORKS\",\"FOLLOWED_ARTISTS\",\"FOLLOWED_GALLERIES\",\"RECOMMENDED_WORKS\",\"RELATED_ARTISTS\",\"LIVE_AUCTIONS\",\"CURRENT_FAIRS\",\"FOLLOWED_GENES\",\"GENERIC_GENES\"])"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "OrderedSet",
        "kind": "LinkedField",
        "name": "orderedSet",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "items",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v5/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Image",
                    "kind": "LinkedField",
                    "name": "image",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "height",
                            "value": 244
                          },
                          {
                            "kind": "Literal",
                            "name": "width",
                            "value": 325
                          }
                        ],
                        "concreteType": "CroppedImageUrl",
                        "kind": "LinkedField",
                        "name": "cropped",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "src",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "srcSet",
                            "storageKey": null
                          }
                        ],
                        "storageKey": "cropped(height:244,width:325)"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "type": "FeaturedLink"
              }
            ],
            "storageKey": null
          },
          (v5/*: any*/)
        ],
        "storageKey": "orderedSet(id:\"529939e2275b245e290004a0\")"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "homeRoutes_HomeQuery",
    "operationKind": "query",
    "text": "query homeRoutes_HomeQuery {\n  homePage {\n    ...HomeApp_homePage\n  }\n  orderedSet(id: \"529939e2275b245e290004a0\") {\n    ...HomeApp_orderedSet\n    id\n  }\n}\n\nfragment HomeApp_homePage on HomePage {\n  heroUnits(platform: DESKTOP) {\n    internalID\n    ...HomeHeroUnit_heroUnit\n    id\n  }\n  ...HomeArtworkModules_homePage\n}\n\nfragment HomeApp_orderedSet on OrderedSet {\n  ...HomeFeaturedEventsRail_orderedSet\n}\n\nfragment HomeArtworkModules_homePage on HomePage {\n  artworkModules(maxRails: -1, maxFollowedGeneRails: -1, order: [ACTIVE_BIDS, RECENTLY_VIEWED_WORKS, SIMILAR_TO_RECENTLY_VIEWED, SAVED_WORKS, SIMILAR_TO_SAVED_WORKS, FOLLOWED_ARTISTS, FOLLOWED_GALLERIES, RECOMMENDED_WORKS, RELATED_ARTISTS, LIVE_AUCTIONS, CURRENT_FAIRS, FOLLOWED_GENES, GENERIC_GENES]) {\n    title\n    key\n    params {\n      internalID\n      relatedArtistID\n      followedArtistID\n    }\n    id\n  }\n}\n\nfragment HomeFeaturedEventsRail_orderedSet on OrderedSet {\n  items {\n    __typename\n    ... on FeaturedLink {\n      internalID\n      title\n      subtitle\n      href\n      image {\n        cropped(width: 325, height: 244) {\n          src\n          srcSet\n        }\n      }\n      id\n    }\n    ... on Node {\n      id\n    }\n  }\n}\n\nfragment HomeHeroUnit_heroUnit on HomePageHeroUnit {\n  backgroundImageURL\n  heading\n  title\n  subtitle\n  linkText\n  href\n  creditLine\n}\n"
  }
};
})();
(node as any).hash = '0d22f918f8f73556e256708e40ef93a2';
export default node;
