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

let sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/dTKr0MKjhc4:APA91bGyHa1W74pk76_bolGkDfC9JiammoXZ5jgd3N9k_xODDGmPSkvuk1_8PQbrFkEg0AVM47WkloV0e5eEkuPKgcM5e21YGRcP6r2EBQsTcpjfJ3-Yb7xfhuYIJsMgcVeCA2Ei-m4l", "expirationTime": null, "keys": { "p256dh": "BJnxjgNsWAjg_MbLIcgh0KX-gAV8UTgdZRM60CK9a3fzauKp-CuBx9c85Kw1pTPsgGI3RPQYzqqxpCrfJ8Qyr94", "auth": "-BJeMTs7Tvi48Nh_yXC6MQ" } };
push.setVapidDetails('mailto::test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey);
push.sendNotification(sub,'test message');
