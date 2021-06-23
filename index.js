"use strict";

const { graphql, buildSchema } = require("graphql");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { readFileSync } = require("fs");
const { join } = require("path");
const resolvers = require("./graphql/resolvers");

const app = express();
const port = process.env.port || 3000;

// Schema definition
const schema = buildSchema(
  readFileSync(join(__dirname, "graphql", "schema.graphql"), "utf-8")
);

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Server is listening http://localhost:${port}`);
});
