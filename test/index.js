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
  logger.regular('\nJSON: (str)');
  logger.json(testStr);
  logger.regular('\nResult: (srt, srt)');
  logger.result(testStr, testStr);
  logger.regular('\nResult: (null, string)');
  logger.result(null, testStr);
  logger.regular('\nResult: (str - objc)');
  logger.result(testStr, testJson);
  logger.regular('\nResult: (objc - array)');
  logger.result(testStr, testArr);

  assert.ok(true);
});
