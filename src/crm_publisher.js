'use strict';
module.exports.publish = (event, context, callback) => {
  console.log('Stream event : ', JSON.stringify(event, null, 2));
  console.log('Stream event Records: ', JSON.stringify(event.Records, null, 2));
  if (Boolean(process.env.IS_OFFLINE)) {
    console.log('Offline dynamodb Stream processed');
    return;
  }
  // Process records and perform biz logic
  event.Records.forEach(record => {
    if (record.eventName === 'INSERT') {
      console.log('Processing DynamoDB Record: %j', record.dynamodb);
    } else {
      console.log('Processing Dynamo other Stream Event: %j', record.eventName);
    }
  });

  callback(null, 'Successfully processed records.');
};
