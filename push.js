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

let sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/dNmpU1233yA:APA91bFtRV1i64cf-4dDIvBAjP6z9Md__1q5pSHXqHA_1SHixKbJNNq6S6p5mr4Qp5tv09vlpnDcYifAxKKffgygF3_2Xapy-1fShXD0PXAkdwlVJSdabNdpauTr16jB3aHcBh-_AnFn", "expirationTime": null, "keys": { "p256dh": "BBNVYgDWhT3x5DHCgWXJpNzavAWMFyHD9-5OPv-8mqmxow5og68Ngqx7uEwbgEPlaLFS_XdGNxck7C-n1khl-9Y", "auth": "KtNgzYBfkR5hvQkiU1Jczw" } };
push.setVapidDetails('mailto::test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey);
push.sendNotification(sub,'test message');
