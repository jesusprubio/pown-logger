/*
  Copyright Jesús Pérez <jesusprubio@fsf.org>

  This code may only be used under the MIT license found at
  https://opensource.org/licenses/MIT.
*/

'use strict';

const test = require('tap').test; // eslint-disable-line import/no-extraneous-dependencies
const logger = require('../');

const testStr = 'Hi world!';
const testJson = { pown: 'js' };
const testArr = ['pown', 'js'];


test('should not throw', (assert) => {
  assert.plan(1);

  console.log('\nRegular:'); // eslint-disable-line no-console
  logger.regular(testStr);
  logger.regular('\nTitle:');
  logger.title(testStr);
  logger.regular('\nInfo:');
  logger.info(testStr);
  logger.regular('\nJSON:');
  logger.json(testJson);
  logger.regular('\nJSON: (string)');
  logger.json(testStr);
  logger.regular('\nResult: (string)');
  logger.result(testStr, testStr);
  logger.regular('\nResult: (JSON - object)');
  logger.result(testStr, testJson);
  logger.regular('\nResult: (JSON - array)');
  logger.result(testStr, testArr);

  assert.ok(true);
});
