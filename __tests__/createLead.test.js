'use strict';

// tests for createLead
// Generated by serverless-jest-plugin

const mod = require('./../src/crm_handler');

const jestPlugin = require('serverless-jest-plugin');
const lambdaWrapper = jestPlugin.lambdaWrapper;
const wrapped = lambdaWrapper.wrap(mod, { handler: 'createLead' });

describe('createLead', () => {
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