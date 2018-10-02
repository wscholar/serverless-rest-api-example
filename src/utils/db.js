'use strict';
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const response = require('../utils/response');
const devMode = Boolean(process.env.IS_OFFLINE);
const dboptions = {
  endpoint:
    'http://' +
    process.env.DYANMODB_LOCAL_HOST +
    ':' +
    process.env.DYANMODB_LOCAL_PORT,
  region: 'localhost',
  sslEnabled: false
};
const dbconn = new AWS.DynamoDB.DocumentClient(devMode ? dboptions : {});

module.exports.create = (params, callback) => {
  dbconn.put(params, error => {
    // handle potential errors
    if (error) {
      response.httpresponse(error.statusCode, error, callback);
    } else {
      console.info('Create new lead:' + JSON.stringify(params));
      response.httpresponse(200, params.Item, callback);
    }
  });
};
module.exports.get = (params, callback) => {
  dbconn.query(params, (error, result) => {
    if (error) {
      response.httpresponse(error.statusCode, error, callback);
    } else {
      response.httpresponse(200, result.Items, callback);
    }
  });
};
