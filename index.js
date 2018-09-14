const txt1 = require('module-browser-field');
const txt2 = require('module-browser-field-obj');

module.exports.getMessage = function() {
  return [
    'module with browser field (string) => ' + txt1,
    'module with browser field (object) => ' + txt2,
  ].join('\n');
}