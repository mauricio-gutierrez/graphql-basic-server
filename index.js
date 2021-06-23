"use strict";

const { graphql, buildSchema } = require("graphql");

// Schema definition
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const resolvers = {
  hello: () => {
    return "World!";
  },
};

// Run hello query
graphql(schema, "{ hello }", resolvers).then((response) => {
  const { data } = response;
  console.log(data);
});
