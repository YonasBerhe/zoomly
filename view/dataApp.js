var subreddits = ['dataisbeautiful', 'earthporn'];
var dataMerged = {};

subreddits.forEach(function(subreddit) {
    $.ajax({
        type: "POST",
        url: 'https://www.reddit.com/r/' + subreddit + '.json?limit=100',
        dataType: 'jsonp',
        jsonp: 'jsonp',
        success: function(data) {
            var json = data.data.children;
            dataMerged[subreddit] = json;
            //console.log(dataMerged);
            //console.log(dataMerged.Seattle[0].data);

            json.forEach(function(data) {
                if (data.data.preview) {
                    console.log(data.data.preview.images[0].source.url)
                    var image = data.data.preview.images[0].source.url;
                    window.image = image;
                }

                var title = data.data.title;
                window.title = title;
                var url = data.data.url;
                window.url = url;


            });

            var content = {
                title,
                url,
                image
            };

            $.post('/data', {
                info: content
            }, function(data) {
                console.log("working");
            })

        }
    })

});



