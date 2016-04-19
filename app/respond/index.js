'use strict';

const request = require('request');
const response = require('./response');
const TOKEN  = process.env.MESSENGER_TOKEN;

function respond(sender, text, structured, callback) {
  const config = {
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: {
      access_token: TOKEN
    },
    method: 'POST',
    json: {
      recipient: { 
        id: sender 
      },
      message: response(text)
    }
  };
  
  request(config, function(error, response, body) {
    if (error || response.body.error) {
      const _error = new Error();
      _error.message = 'Sending message failed.';
      _error.details = error || response.body.error;
      
      return callback(_error);
    }

    // DEBUG
    console.log(body);
  });
}

module.exports = respond;
