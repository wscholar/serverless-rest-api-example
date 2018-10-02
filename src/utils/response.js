'use strict';
//handles all http reponses via callback
const log = require('./log');
module.exports.httpresponse = (statuscode, body, callback) => {
  try {
    const response = {
      statusCode: statuscode ? statuscode : 500,
      body: JSON.stringify(body ? body : {})
    };

    if (response.statusCode == 200) {
      console.debug(log.logJson('httpresponse', body, response, ''));
    } else {
      console.error(log.logJson('httpresponse error', body, '', response));
    }
    callback(null, response);
  } catch (error) {
    console.error(log.logJson('httpresponse', body, '', error));
    const errorresponse = {
      statusCode: 500,
      body: JSON.stringify(error)
    };
    callback(null, errorresponse);
  }
};
