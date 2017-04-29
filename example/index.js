/*
  Copyright Jesús Pérez <jesusprubio@fsf.org>

  This code may only be used under the MIT license found at
  https://opensource.org/licenses/MIT.
*/

'use strict';

const logger = require('../');


const testArr = ['pown', 'js', 1, 2, 3, 4, 5];

logger.regular('\nChunks:');
logger.chunks(testArr, 2);
