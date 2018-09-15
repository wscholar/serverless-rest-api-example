//modify this for the db you want to use, make sure to consider offline mode
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

module.exports.dynamodb = function() {
  //TODO verify that region has to be localhost for offline mode
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
  return dbconn;
};
