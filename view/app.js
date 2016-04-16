var subreddits = {  artificial: 'artificial', seattle: 'Seattle'};

console.log(subreddits);

var dataMerged = {};


//dataMerged[subreddit] = [];
//dataMerged['dataisbeautiful'] = [];

console.log(dataMerged);




$.ajax ({

url: 'https://www.reddit.com/r/' + subreddits + '.json?limit=100',
dataType: 'jsonp',
jsonp: 'jsonp',
success: function (data) {



//var json = data.data.children;
//console.log(json);


}

})



