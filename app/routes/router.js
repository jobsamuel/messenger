'use strict';

const express = require('express');
const respond = require('./../respond/response');
const router = express.Router();
const TOKEN = process.env.VERIFY_TOKEN;

router.route('/webhook')
  .get(function(req, res) {
    if (req.query['hub.verify_token'] === TOKEN) {
      return res.send(req.query['hub.challenge']);
    }

    res
      .status(400)
      .send({
        message: 'Wrong validation token.'
      });
  })

  // https://developers.facebook.com/docs/messenger-platform/quickstart
  .post(function(req, res) {
    const messaging_events = req.body.entry[0].messaging;

    // DEBUG
    console.log(messaging_events);

    for (let i = 0; i < messaging_events.length; i++) {
      const event = req.body.entry[0].messaging[i];
      const sender = event.sender.id;
      
      if (event.message && event.message.text) {
        const text = event.message.text;
        let structured = false;
        
        // DEBUG
        console.log(text);

        if (text === 'generic') {
          structured = true;
        }

        // Handle a text message from this sender
        respond(sender, `Text received, echo: ${text}`, structured, function(error) {
          if (error) {
            return console.log(error);
          }

          // DEBUG
          console.log('A message have been sent!');
        });
      }

      if (event.postback) {
        const text = JSON.stringify(event.postback);

        respond(sender, `Postback received, echo: ${text}`, false, function(error) {
          if (error) {
            return console.log(error);
          }

          // DEBUG
          console.log('A message have been sent!');
        });
      }
    }

    res.sendStatus(200);
  });

router.get('/', function(req, res) {
  res.send({
    message: 'Hello world!',
    status: 'OK'
  });
});

module.exports = router;
