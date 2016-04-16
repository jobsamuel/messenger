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

  .post(function(req, res) {
    // TODO
  });

router.get('/', function(req, res) {
  res.send({
    message: 'Hello world!',
    status: 'OK'
  });
});

module.exports = router;
