const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config({ path: '../.env' });
const { graphqlHTTP } = require("express-graphql")
const schema = require('./schema/schema');
const connect = require("./db");

const PORT = process.env.PORT || 4000;
connect();


const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, "../client/build")));

// app.use(express.json());

app.use("/graphql", graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(PORT, () => {
  console.log("Server running on port ", PORT);
})