'use strict';

const request = require('request');
const TOKEN  = process.env.MESSENGER_TOKEN;

function response(sender, text, callback) {
  const messageData = {
    text: text
  };

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
      message: messageData,
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

module.exports = response;
