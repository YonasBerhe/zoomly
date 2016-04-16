var subreddit = 'earchporn';


$.ajax ({

url: 'https://www.reddit.com/r/' + subreddit + '.json?limit=100',
dataType: 'json',
success: function (data) {

 var jsonv = data.children;


}

})
