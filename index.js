var request = require('request');
var obfusYa = require('obfusYa');

var data = 'https://raw.githubusercontent.com/FrontendSimf20016/obfuscator/master/data.json';

request({
    url: data,
    json: true
}, function(err, res, body) {
    if (!err && res.statusCode === 200) {
        var resData = obfusYa(body);
        console.log(body[0] + ':' + resData[body[0]]);
    }
});