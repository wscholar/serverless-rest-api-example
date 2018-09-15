const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const db = require('../db/dbconn');
const dynamoDb = db.dynamodb();

module.exports.delete = (event, context, callback) => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      id: event.pathParameters.id
    }
  };

  // delete the todo from the database
  dynamoDb.delete(params, error => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(new Error("Couldn't remove the todo item."));

      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify({})
    };
    callback(null, response);
  });
};
