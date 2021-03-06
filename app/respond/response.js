'use strict';

const crypto = require('crypto');

function response(text) {
  let data;

  switch(text) {
    case 'generic':
      data = {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "generic",
            "elements": [{
              "title": "White Castle",
              "subtitle": "by Yuri Shwedoff",
              "image_url": "http://i.imgur.com/rVLUkXM.jpg",
              "buttons": [{
                "type": "web_url",
                "url": "http://www.yurishwedoff.gallery/oze9u5q9zdhppa1ry7m18yhi2x3k62",
                "title": "View"
              },
              {
                "type": "postback",
                "title": "Buy",
                "payload": "BUY_OZE9U5",
              }]
            },
            {
              "title": "Sun",
              "subtitle": "by Yuri Shwedoff",
              "image_url": "http://i.imgur.com/sVlPgD6.jpg",
              "buttons": [{
                "type": "web_url",
                "url": "http://www.yurishwedoff.gallery/1okjiy5b0tdeu4uz1wu5xwsuato9u3",
                "title": "View"
              },
              {
                "type": "postback",
                "title": "Buy",
                "payload": "BUY_1OKJIY",
              }],
            }]
          }
        }
      };

      break;

    case 'BUY_OZE9U5':
      data = {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "receipt",
            "recipient_name": "Messenger User",
            "order_number": crypto.randomBytes(64).toString('hex'),
            "currency": "USD",
            "payment_method": "Visa 1234",
            "timestamp": Date.now(),
            "elements": [{
              "title": "White Castle",
              "subtitle": "by Yuri Shwedoff",
              "quantity": 1,
              "price": 19
            }],
            "summary": {
              "total_cost": 19
            }
          }
        }
      };

      break;

    case 'BUY_1OKJIY':
      data = {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "receipt",
            "recipient_name": "Messenger User",
            "order_number": crypto.randomBytes(64).toString('hex'),
            "currency": "USD",
            "payment_method": "Master Card 1234",
            "timestamp": Date.now(),
            "elements": [{
              "title": "Sun",
              "subtitle": "by Yuri Shwedoff",
              "quantity": 1,
              "price": 19
            }],
            "summary": {
              "total_cost": 19
            }
          }
        }
      };

      break;
    
    case 'image':
      data = {
        attachment: {
          type: 'image',
          payload: {
            url: 'http://i.imgur.com/1WuDC6y.jpg'
          }
        }
      };

      break;

    case 'options':
      data = {
        text: 'How far would you like to go?',
        quick_replies:[
          {
            content_type: 'text',
            title: 'Galaxy',
            payload: 'OPTION_GHJK'
          },
          {
            content_type: 'text',
            title: 'Solar System',
            payload: 'OPTION_VBNM'
          }
        ]
      };

      break;

    case 'are you alive?':
      data = {
        sender_action: 'typing_on'
      }

      break;

    case 'hey?':
      data = {
        sender_action: 'typing_off'
      }

      break;

    case 'persistent menu':
      data = {
        setting_type : 'call_to_actions',
        thread_state : 'existing_thread',
        call_to_actions: [
          {
            type: 'postback',
            title: 'Help',
            payload: 'MENU_HELP'
          },
          {
            type: 'postback',
            title: 'Place New Order',
            payload: 'MENU_NEW_ORDER'
          },
          {
            type: 'web_url',
            title: 'View Website',
            url: 'http://www.yurishwedoff.gallery'
          }
        ]
      };

      break;

    default:
      data = {
        text: 'We used to look up at the sky and wonder at our place in the stars. Now we just look down, and worry about our place in the dirt.'
      }
  }

  return data;
}

module.exports = response;
