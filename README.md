# pokedex

Build beautiful Pokedex app using Relay Modern, React, Webpack and GraphQL (forked from learnrelay due to their demo not deleting or adding and other issues).

# Usage

1. Create GraphQL back end or Graph.cool project with Pokemon schema
1. Obtain GraphQL API key (Relay)
1. Add to `package.json`

```
npm i
npm start
```

Open <http://localhost:3000>


Pokemon schema:

```
type Pokemon {
  id: ID!
  name: String!
  url: String!
}
```

Pokemon schema for Graph.cool:

```
type Pokemon @model {
  id: ID! @isUnique
  name: String!
  url: String!
}
```