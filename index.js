//2432e2a1-173d-42df-9f7a-0f118ea73ae7

const express = require("express");
var app = express();
var PORT = 7000;
var bodyParser = require('body-parser');
var main = require('./src/main.js');



app.use(express.static('view'));
app.use('/node_modules', express.static('node_modules'));


app.use(bodyParser.urlencoded({extended: true}));



app.post('/data', function(req, res) {
var data = req.body.info;
console.log('post data', data);
});

app.post('/search', function(req, res) {
    var query = req.body.query;
    main.search(query, function(err, res, body) {
        if (err) {
            console.log(err);
        }
        var docs = body.documents;
        var urlWeights = {};
        for (var i = 0; i < docs.length; i++) {
            var post = docs[i];
            urlWeights[post.reference] = post.weight;
        }
        console.log(urlWeights);
    });
});
var opacity = Math.random();

app.post('/opacity', function(req, res) {
    res.send({
        opacity: getOpacities()
    });
});

function getOpacities() {
    return opacity;
}

app.listen(PORT, function() {

console.log("visit localhost:" + PORT + " " + "to view project")
});


