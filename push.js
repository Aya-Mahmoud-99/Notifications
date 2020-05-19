// JavaScript source code
var push = require('web-push');
let vapidKeys = {
    publicKey: 'BLteN2prbnIT7PrE4mXaG7jbzYS5qMgilwgTLweOe38jAgM6ykb6889cdD-XBKQuHFm7iGAjCD1CitioTmy5VlI',
  privateKey: 'vEIz1M1c7siwIZ-pGy-Es6F9J16atqfiFEsriemYYds'
}
let sub = {}
push.setVapidDetails('mailto::test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey);
push.sendNotification(sub,'test message');
