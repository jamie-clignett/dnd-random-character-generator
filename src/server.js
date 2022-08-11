const express = require('express');
// const expressGraphQL = require('express-graphql');
// const buildSchema = require('graphql').buildSchema;
const path = require('path');

// const schema = buildSchema(`
//   type AbilityScore {
    
//   }
//   type Race {
//     index: String!
//     name: String!

//   }

// `);

// const resolvers = {};

const app = express();

const apiRouter = require('./routes/api');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/graphql', expressGraphQL({
//   schema: schema,
//   rootValue: resolvers,
//   graphiql: true
// }));

app.use('/api', apiRouter);

app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => {
  console.log('Listening at port: 3000');
});

module.exports = app;