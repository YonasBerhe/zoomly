
var dataMerged = {}; 

subreddits.forEach(function(subreddit){
   $.ajax({
       type: "POST",
        url: 'https://www.reddit.com/r/' + subreddit + '.json?limit=100',
        dataType: 'jsonp',
        jsonp: 'jsonp',
        success: function(data) {
            var json = data.data.children;
             dataMerged[subreddit] = json;
//console.log(dataMerged);
//     console.log(dataMerged.Seattle[0].data.url);
           for (i = 0; i < 100; i++) {
console.log(dataMerged.dataisbeautiful[i].data.title);
console.log(dataMerged.dataisbeautiful[i].data.url);

}

var content = {
var title = dataMerged.dataisbeautiful[i].data.title);
var url = console.log(dataMerged.dataisbeautiful[i].data.url);
}


$.post('/data', content, function (data) {
          console.log("working");
      })


     
    })
})
