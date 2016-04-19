# messenger
> A Facebook Messenger Bot demo.

## pre-requisites

- [Cloud Server](https://m.do.co/c/2f6ba054b7bc) (In case you couldn't deploy your bot in Heroku)
- [Messenger Platform](https://developers.facebook.com/docs/messenger-platform/implementation#setup)

## usage

```bash
$ npm install
$ export VERIFY_TOKEN="your-validation-token"
$ export MESSENGER_TOKEN="your-messenger-token"
$ npm start
```

> **NOTE:** If you decided to use your own server, due to Messenger Platform wouldn't allow you to point your webhook to an IP, you would need to configure a domain with a SSL certificate and then point your app to it.

## tutorial

[Building your Messenger Bot](https://developers.facebook.com/videos/f8-2016/building-your-messenger-bot/)

## license
[MIT License](http://opensource.org/licenses/MIT) :copyright: Jobsamuel Núñez