const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const db = require('../db/dbconn');
const dynamoDb = db.dynamodb();

const params = {
  TableName: process.env.DYNAMODB_TABLE
};

module.exports.list = (event, context, callback) => {
  // fetch all todos from the database
  dynamoDb.scan(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(new Error('Could not fetch the todos.'));
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Items)
    };
    callback(null, response);
  });
};
