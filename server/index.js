// TECHNOS //
const express = require('express');
const HTTP = require('http');
const cors = require('cors');
const axios = require("axios");
const bodyParser = require('body-parser')
const CryptoJS = require("crypto-js");

// Controllers //

// Instance et creation de serveur //
const app = express();
const server = HTTP.createServer(app);
const PORT = process.env.PORT || 5000;

// CORS //
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

// BodyParser //
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())

// ROUTING //
	// Welcome //
	app.get('/', (req,res) => {
		res.send("Welcome")
	})

// LISTENING //
app.use(cors());
server.listen(PORT, () => console.log(`Le serveur de --PreviouslyOn-- est UP ! PORT : ${PORT} ; ADRESSE : ${API_URL}`));