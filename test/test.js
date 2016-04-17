
const hod = require('havenondemand');
const apikey = '2432e2a1-173d-42df-9f7a-0f118ea73ae7';
const client = new hod.HODClient(apikey);
const foo = require('../foo.json');

var testData = {text: "A team led by experts at Cardiff University has provided new evidence to explain why deep sea creatures were able to survive the catastrophic asteroid strike that wiped out the dinosaurs 65m years ago."};
var text = testData.text;
var url = "https://www.sciencedaily.com/releases/2016/04/160414081843.htm";
const index = 'zoomly';

/*
possible models
find related concepts
match similar concepts
categorize
 */

var callback = function(err,resp,body){
    console.log(body)
};
//client.call('findsimilar', callback, data);

//Example of using findsimilar

//Goal - Index pages, and use weighted similarity to return pages
//Create index
//Add index
//findsimilar

//var createData =
//{
//    index: 'zoomly',
//    flavor: 'standard',
//    description: 'Testing index for zoomly angelhack',
//    index_fields: 'index',
//    display_name: 'zoomly'
//};

var document = { document :
    [
        {
            title: "Science",
            content: text
        }
    ]
};

testData.indexes = ['zoomly'];

function run() {
    client.call('addtotextindex', callback, { json: JSON.stringify(document), index: index});

    client.call('findsimilar', callback, testData);

    client.call('indexstatus', callback, {index: index});
}

function test() {
    for (var i = 0; i < foo.Seattle.length; i++) {
        var post = foo.Seattle[i];
        var doc = { document :
            [
                {
                    title: post.data.title,
                    content: post.data.selftext
                }
            ]
        };

        client.call('addtotextindex', callback, {index: index, json: JSON.stringify(doc)});
    }

}


test();

