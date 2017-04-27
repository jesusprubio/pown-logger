/*
  Copyright Jesús Pérez <jesusprubio@fsf.org>

  This code may only be used under the MIT license found at
  https://opensource.org/licenses/MIT.
*/

'use strict';

const chalk = require('chalk');
const prettyjson = require('prettyjson');
const emoji = require('node-emoji');


// TODO: Use ascii-art instead?
// https://www.npmjs.com/package/ascii-art

/* eslint-disable no-console */
module.exports.title = (str) => {
  const title = `\n${emoji.get('skull')} ${str.toUpperCase()}\n`;

  console.log(chalk.bgMagenta.bold(title));
};

module.exports.regular = str => console.log(str);

module.exports.info = str => console.log(chalk.blue(str));

module.exports.json = json => console.log(prettyjson.render(json));

module.exports.result = (res) => {
  console.log(`\n${emoji.get('sparkles')}  Result:`);

  console.log(prettyjson.render(res));
};


/* eslint-enable no-console */
