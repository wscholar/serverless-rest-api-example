'use strict';

// tests for getById
// Generated by serverless-jest-plugin

const mod = require('./../src/crm_handler');

const jestPlugin = require('serverless-jest-plugin');
const lambdaWrapper = jestPlugin.lambdaWrapper;
const wrapped = lambdaWrapper.wrap(mod, { handler: 'getById' });

describe('getById', () => {
  beforeAll(done => {
    //  lambdaWrapper.init(liveFunction); // Run the deployed lambda

    done();
  });

  it('implement tests here', () => {
    return wrapped.run({}).then(response => {
      expect(response).toBeDefined();
    });
  });
});
