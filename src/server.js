const express = require('express')
const server = express()

const { port } = require('../configs/config');

server.use("/", require("./Routes"))


server.listen(port || 3001, () => {
    console.log(`Server listening on ${port || 3001}`)
})