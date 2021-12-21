const https = require('https');

var options = {
  "method": "GET",
  "host": "min-api.cryptocompare.com",
  "port": 443,
  "path": "/data/price?fsym=BTC&tsyms=USD",
  "headers": {
    'Content-Type': 'application/json'
  }
};

const minutes = 1;

const time_loop = minutes * 60 * 1000;

function get_bitcoin_value() {
var requestLoop = setInterval(function(){

var request = https.request(options, function (response) {
    response.on("data", function (data) {
      parsed_json = JSON.parse(data);
      let date_ob = new Date();
      process.env.BITCOIN_VALUE = parsed_json.USD;
      process.env.TIME = date_ob.toString();
      console.log(process.env.TIME + " " + process.env.BITCOIN_VALUE);
    });
  });
request.end();

}, time_loop);


}



module.exports = { get_bitcoin_value }