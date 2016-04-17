var hn = require('hacker-news-api');
var cmd = require('node-cmd');

hn.story().recent(function(error, data) {
    if (error) throw error;
    console.log(data);
});


 

