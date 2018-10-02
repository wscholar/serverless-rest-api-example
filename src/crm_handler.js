'use strict';
const leadmodel = require('./crm_model');

module.exports.createLead = (event, context, callback) => {
  let jsonIn = JSON.parse(event.body);
  return leadmodel.createLead(jsonIn, callback);
};
module.exports.getByAccountId = (event, context, callback) => {
  return leadmodel.getByAccountId(event.pathParameters, callback);
};
module.exports.getByAccountIdAndDate = (event, context, callback) => {
  return leadmodel.getByAccountIdAndDate(event.pathParameters, callback);
};
module.exports.getById = (event, context, callback) => {
  return leadmodel.getById(event.pathParameters, callback);
};
module.exports.getByIdAndDate = (event, context, callback) => {
  return leadmodel.getByIdAndDate(event.pathParameters, callback);
};
