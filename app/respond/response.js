'use strict';

const request = require('request');
const TOKEN  = process.env.MESSENGER_TOKEN;

function response(sender, text, structured, callback) {
  let messageData = {
    text: text
  };

  if (structured) {
    messageData = {
      "attachment": {
        "type": "template",
        "payload": {
          "template_type": "generic",
          "elements": [{
            "title": "First card",
            "subtitle": "Element #1 of an hscroll",
            "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
            "buttons": [{
              "type": "web_url",
              "url": "https://www.messenger.com/",
              "title": "Web url"
            }, {
              "type": "postback",
              "title": "Postback",
              "payload": "Payload for first element in a generic bubble",
            }],
          },{
            "title": "Second card",
            "subtitle": "Element #2 of an hscroll",
            "image_url": "http://messengerdemo.parseapp.com/img/gearvr.png",
            "buttons": [{
              "type": "postback",
              "title": "Postback",
              "payload": "Payload for second element in a generic bubble",
            }],
          }]
        }
      }
    };
  }

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
