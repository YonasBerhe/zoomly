var express = require("express");
app = express();

var request = require("request");



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});




app.get("/ruler/test", function(req, res) {
    request("https://raw.githubusercontent.com/halfspiral/zoomly/master/cylinders/subreddits.json", function(err, response, body) {
        if (err) res.send(err);
        res.send(body);
    });
});




app.use(express.static('static'));

var server = app.listen(8080, function() {
    console.log('Ready on port %d', server.address().port);
});
