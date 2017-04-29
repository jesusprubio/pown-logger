/*
  Copyright Jesús Pérez <jesusprubio@fsf.org>

  This code may only be used under the MIT license found at
  https://opensource.org/licenses/MIT.
*/

'use strict';

const logger = require('../');


const testArr = ['pown', 'js', 'bluebox', 'chita', 'r2pipe', 'subquest', 'malware-jail'];

logger.regular('\nChunks:');
logger.chunks(testArr, 3);
