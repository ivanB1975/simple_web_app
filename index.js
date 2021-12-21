const express = require('express')
const https = require('https');
const app = express()
const port = 3000



var options = {
  "method": "GET",
  "host": "min-api.cryptocompare.com",
  "port": 443,
  "path": "/data/price?fsym=BTC&tsyms=USD",
  "headers": {
    'Content-Type': 'application/json'
  }
};


app.get('/', (req, res) => {
  var request = https.request(options, function (response) {
    response.on("data", function (data) {
      parsed_json = JSON.parse(data);
      console.log(parsed_json.USD);
      res.send('The value of bitcoin is in USD: '+parsed_json.USD)
    });
  });
  request.end();
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})