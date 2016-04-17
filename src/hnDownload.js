var hn = require('hacker-news-api');
var Scraper = require("image-scraper");

hn.story().recent(function(error, data) {

    if (error) throw error;
    console.log(data.hits[4].url.toString());





var urls = {};
/*
 for (i = 0; i < 100; i++) {
urls +=  data.hits[i].url;






console.log(urls);
        //console.log(urls);

        

}
*/

var scraper = new Scraper(data.hits[0].url);
        console.log("we have images");

        scraper.scrape(function(image) {

//image.saveTo("./images");
//              image.save();

            console.log("1 image")

        })





})
