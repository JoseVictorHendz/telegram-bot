const express = require('express');
const bodyParser = require("body-parser");

const packageJson = require('../package.json');

const { port } = require('../configs/config');

const server = express();

server.use(bodyParser.urlencoded({ extended: true })); 

server.use("/", require("./Routes"));


server.listen(port || 3001, () => {
    console.log(`${packageJson.name} listening on ${port || 3001}`)
});