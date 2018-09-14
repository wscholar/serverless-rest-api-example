'use strict';

module.exports.hello = (event, context, callback) => {
  console.log('In hello method');

  const response = {
    statusCode: 200,
    body: JSON.stringify('hello world from serverless')
  };

  callback(null, response);
};
