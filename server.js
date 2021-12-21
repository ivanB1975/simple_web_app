const express = require('express')
const client = require("./client");
const app = express()
const port = 3000

client.get_bitcoin_value();

app.get('/', (req, res) => {
  res.send('The value of bitcoin is in USD: ' + process.env.BITCOIN_VALUE)
})

app.listen(port, () => {
  console.log("Server started")
})