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

let sub = {}
push.setVapidDetails('mailto::test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey);
push.sendNotification(sub,'test message');
