'use strict';
const uuid = require('uuid');
const response = require('./utils/response');
const ajv = require('ajv')({
  removeAdditional: true
});
const db = require('./utils/db');
const log = require('./utils/log');

const lead = {
  type: 'object',
  properties: {
    leadId: { type: 'string', maxLength: 200 },
    accountId: { type: 'string', maxLength: 200 },
    prospectId: { type: 'string', maxLength: 200 },
    referrer: { type: 'string', maxLength: 200 },
    company: { type: 'string', maxLength: 200 },
    title: { type: 'string', maxLength: 200 },
    firstname: { type: 'string', maxLength: 200 },
    lastname: { type: 'string', maxLength: 200 },
    email: { type: 'string', format: 'email', minLength: 5, maxLength: 200 },
    phone: { type: 'string', minLength: 7, maxLength: 50 },
    emailOptIn: { type: 'boolean' },
    phoneOptIn: { type: 'boolean' },
    status: { type: 'string' },
    isTest: { type: 'boolean' },
    createdAt: { type: 'string' },
    updatedAt: { type: 'string' }
  },
  required: ['accountId', 'email'],
  additionalProperties: false
};

module.exports.createLead = (jsonIn, callback) => {
  let valid = ajv.validate(lead, jsonIn);
  if (!valid) {
    response.httpresponse(400, ajv.errors, callback);
  } else {
    const timestamp = new Date().getTime();
    jsonIn.leadId = uuid.v1();
    jsonIn.status = 'created';
    jsonIn.createdAt = JSON.stringify(timestamp);
    jsonIn.updatedAt = JSON.stringify(timestamp);
    const params = {
      TableName: process.env.LEAD_TABLE,
      Item: {}
    };
    params.Item = jsonIn;
    db.create(params, callback);
  }
};
module.exports.getByAccountId = (pathparms, callback) => {
  const params = {
    TableName: process.env.LEAD_TABLE,
    IndexName: 'accountIdIndex',
    KeyConditionExpression: 'accountId = :accountId',
    ExpressionAttributeValues: {
      ':accountId': pathparms.accountId
    }
  };
  console.debug('getByAccountId parms:' + JSON.stringify(params));
  db.get(params, callback);
};

module.exports.getByAccountIdAndDate = (pathparms, callback) => {
  //TODO figure out how to query key index and 2ndary index
  const params = {
    TableName: process.env.LEAD_TABLE,
    IndexName: 'accountIdIndex',
    KeyConditionExpression: 'accountId = :accountId',
    FilterExpression: 'createdAt >= :createdAt',
    ExpressionAttributeValues: {
      ':accountId': pathparms.accountId,
      ':createdAt': pathparms.date
    }
  };
  console.debug('getByAccountIdAndDate parms:' + JSON.stringify(params));
  db.get(params, callback);
};

module.exports.getById = (pathparms, callback) => {
  const params = {
    TableName: process.env.LEAD_TABLE,
    KeyConditionExpression: 'leadId = :leadId',
    ExpressionAttributeValues: {
      ':leadId': pathparms.leadId
    }
  };
  console.debug('getbyId parms:' + JSON.stringify(params));
  db.get(params, callback);
};

module.exports.getByIdAndDate = (pathparms, callback) => {
  const params = {
    TableName: process.env.LEAD_TABLE,
    KeyConditionExpression: 'leadId = :leadId and createdAt >= :createdAt',
    ExpressionAttributeValues: {
      ':leadId': pathparms.leadId,
      ':createdAt': pathparms.date
    }
  };
  console.debug('getByIdAndDate parms:' + JSON.stringify(params));
  db.get(params, callback);
};
