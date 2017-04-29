/*
  Copyright Jesús Pérez <jesusprubio@fsf.org>

  This code may only be used under the MIT license found at
  https://opensource.org/licenses/MIT.
*/

'use strict';

const chalk = require('chalk');
const prettyjson = require('prettyjson');
const emoji = require('node-emoji');
const lodash = require('lodash');
const keypress = require('keypress');


// TODO: Use ascii-art instead?
// https://www.npmjs.com/package/ascii-art


/* eslint-disable no-console */
module.exports.title = (str) => {
  const title = `\n${emoji.get('skull')} ${str.toUpperCase()}\n`;

  console.log(chalk.bgMagenta.bold(title));
};


module.exports.regular = str => console.log(str);


module.exports.info = str => console.log(chalk.blue(str));


module.exports.result = (msg, res) => {
  console.log(`\n${emoji.get('sparkles')}  ${msg || 'Result'}:`);

  if (res) { console.log(prettyjson.render(res)); }
};


module.exports.chunks = (arr, chunkSize) => {
  if (!lodash.isArray(arr)) { throw new Error('Bad format, array needed'); }

  const chunks = lodash.chunk(arr, chunkSize);
  let index = 0;
  const eventName = 'keypress';

  // Make `process.stdin` begin emitting "keypress" events.
  keypress(process.stdin);

  console.log(prettyjson.render(chunks[index]));
  index += 1;
  if (!chunks[index + 1]) { return; }

  console.log(chalk.blue('\nPress ESC to finish or any other key to see more ...'));

  // Listen for the event.
  process.stdin.on(eventName, (ch, key) => {
    // To allow ctrl+c
    if (key.ctrl && key.name === 'c') { process.stdin.pause(); }

    if (key.name === 'escape' || !chunks[index + 1]) {
      process.stdin.pause();
    }

    console.log(prettyjson.render(chunks[index]));
    index += 1;
  });

  process.stdin.setRawMode(true);
  process.stdin.resume();
};


module.exports.json = json => console.log(prettyjson.render(json));
/* eslint-enable no-console */
