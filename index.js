//2432e2a1-173d-42df-9f7a-0f118ea73ae7

const express = require("express");
var app = express();
var PORT = 3000;

app.use(express.static('view'));

app.listen(PORT);

