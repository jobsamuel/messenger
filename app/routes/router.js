'use strict';

const express = require('express');
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

  // A snippet from https://developers.facebook.com/docs/messenger-platform/quickstart
  .post(function(req, res) {
    const messaging_events = req.body.entry[0].messaging;

    for (i = 0; i < messaging_events.length; i++) {
      const event = req.body.entry[0].messaging[i];
      const sender = event.sender.id;
      
      if (event.message && event.message.text) {
        const text = event.message.text;
        
        // Handle a text message from this sender
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
