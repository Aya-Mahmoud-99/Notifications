// JavaScript source code
var push = require('web-push');
/*let vapidKeys = {
    publicKey: 'BLteN2prbnIT7PrE4mXaG7jbzYS5qMgilwgTLweOe38jAgM6ykb6889cdD-XBKQuHFm7iGAjCD1CitioTmy5VlI',
  privateKey: 'vEIz1M1c7siwIZ-pGy-Es6F9J16atqfiFEsriemYYds'
}*/
let vapidKeys = {
    publicKey: 'BJ7BOrLdsc4Lq7jU6wlxFGBChneAR_Lg8587Z5KjEBXJ0Rfd5ZtdGh5bqRYPqbfZpdfvfAHIZ9X9Vw848oTnlXY',
  privateKey: 'cta1wIIeqmLjESmnolE8rWFOiyfImoFZCSOvr5z51MI'
}

let sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/ed7fpdkyBiY:APA91bHWSCwd-haQXqRLcWC43O8pz0cGMg9EOM-K5c8WyDsbg65BeovL-MUKysmcZ-RdOoUSiOyCCYjKusHmsgzHXYufze0b0df9zP8o28SDEebqMkabcXonXVoRJjgKqfONRjQ35-Sw", "expirationTime": null, "keys": { "p256dh": "BB38EgHR2FdcAjDRbWNxupQxtc-uRZngsUpLU8I_HiX-Yy01EmkR-mRzYgAE29SnsiyzDgIxGoAvQlOSbeA5MvQ", "auth": "Sm1YXrHLtjLJEzn1oMMUiw" } };
push.setVapidDetails('mailto::test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey);
push.sendNotification(sub,'test message');
