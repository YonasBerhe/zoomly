//2432e2a1-173d-42df-9f7a-0f118ea73ae7

const express = require("express");
var app = express();
var PORT = 7000;
var bodyParser = require('body-parser');



app.use(express.static('view'));
app.use('/node_modules', express.static('node_modules'));


app.use(bodyParser.urlencoded({extended: true}));



app.post('/data', function(req, res) {
var data = req.body.info;
console.log('post data', data);
});



app.listen(PORT, function() {

});

