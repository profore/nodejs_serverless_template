var moment = require('moment');

/*
if you open the initializer feature, please implement the initializer function, as below:
module.exports.initializer = function(context, callback) {
    console.log('initializing');
    callback(null, '');
};
*/

module.exports.handler = function(req, res, ctx) { 
  console.log('hello world');
  res.setHeader('content-type', 'application/json');
  res.send(moment().format('YYYY-MM-DD HH:mm:ss'));
};