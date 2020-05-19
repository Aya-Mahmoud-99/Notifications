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

let sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/d85SevHaNvY:APA91bGHbMpnfrkMZhOhvh0ieYvdYIj1SBeioMA_8PaHAA2SdVPtRXp0MxTACOCsZqvIYZteXYAkwidkDhOA4YPO78f1UY0kSn4rO9MoUNNAzCaMegkhAMdbnyBxZP0hj03atRCmJ9iL", "expirationTime": null, "keys": { "p256dh": "BKddQ6aN8xcb3p8L2I-vaRtWrS6Wmc6qw7CvLUvqHtN9Oogt-8QKE_fvzplCSNiytu0K6WIMhen34ehyGHmTBZs", "auth": "YY2iF4V8JFAStqxHW4hiog" } };
push.setVapidDetails('mailto::test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey);
push.sendNotification(sub,'test message');
