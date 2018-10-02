'use strict';
//Log model for creating structured json to log.  Can eventually be extended to output somewhere other than Cloudwatch
const log = {
  message: '',
  params: '',
  response: '',
  error: ''
};

module.exports.logJson = (message, params, response, error) => {
  var curlog = log;
  curlog.message = message;
  curlog.params = JSON.stringify(params);
  curlog.response = response;
  curlog.error = JSON.stringify(error);
  return curlog;
};
