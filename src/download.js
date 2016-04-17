var http = require('http');

var subreddits = ['dataisbeautiful', 'earthporn'];

subreddits.forEach(function(subreddit) {
	var data = http.get('http://www.reddit.com/r/' + subreddit + '.json?limit=100', function(res) {
	  	var body = '';
	  	res.on('data', function(chunk){
	        body += chunk;
	    });

	    res.on('end', function() {
	        var data = JSON.parse(body);
	        console.log("Got a response: ", data);
	    });
  	});
});
