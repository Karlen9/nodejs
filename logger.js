const url = 'http://logger.io/log';
const _ = require('underscore');


module.exports = function log(message) { 
  //Send an HTTP request
  console.log(message);
}
