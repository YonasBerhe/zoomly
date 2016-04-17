//2432e2a1-173d-42df-9f7a-0f118ea73ae7

const express = require("express");
const serveStatic = require("serve-static");
var app = express();

app.use(express.static('view'));


app.listen(3000);

console.log("app running on localhost:3000")
