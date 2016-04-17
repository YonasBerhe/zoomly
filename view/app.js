var subreddits = { one : 'artificial', two: 'Seattle'};
//console.log(subreddits);
//var subreddits = [
//'artificial', 
//'seattle'
//]

var dataMerged = {};




//dataMerged[subreddit] = [];
//dataMerged['dataisbeautiful'] = [];

//console.log(dataMerged);




/*subreddits.forEach(function(subreddit){
   $.ajax({
        url: 'https://www.reddit.com/r/' + subreddit + '.json?limit=100',
        dataType: 'jsonp',
        jsonp: 'jsonp',
        success: function(data) {
            var json = data.data.children;
            //console.log(json);
            dataMerged += json;
            console.log(dataMerged);
        }
    })
})

*/

for (var i = 0; i < 2; i++) {

    var subredditPoint = i;

    var subreddit;
    if (subreddit == 1) {

        subreddit = subreddits.one;

    } else {
        subreddit = subreddits.two;
    }
$.ajax({
        type: "POST",
        url: 'https://www.reddit.com/r/' + subreddit + '.json?limit=100',
        dataType: 'jsonp',
        jsonp: 'jsonp',
        success: function(data) {
            var json = data.data.children;
            //console.log(json);
            dataMerged += json;
            console.log(dataMerged);
         

       }
    })
}
