'use strict';

const http = require('http');
const app = require('./app/app');

console.log('Initializing Messenger...');

http.createServer(app).listen(app.set('port'), function() {
  console.info('Messenger running at port: ' + app.set('port'));
});
