'use strict';

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

    default:
      data = {
        text: 'We used to look up at the sky and wonder at our place in the stars. Now we just look down, and worry about our place in the dirt.'
      }
  }

  return data;
}

module.exports = response;
