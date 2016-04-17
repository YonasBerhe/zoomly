'use strict';

//concept extraction
//find similar
//find related

const hod = require('havenondemand');
const apikey = '2432e2a1-173d-42df-9f7a-0f118ea73ae7';
const client = new hod.HODClient(apikey);
const index = 'zoomly';

module.exports = {
    findRelated: function(input) {
        if (input.url) {
            client.call('findrelatedconcepts', callback, {url: input.url, indexes: index});
        } else {
            client.call('findrelatedconcepts', callback, {text: input.text, indexes: index});
        }

    },
    addToIndex: function(url, index) {
        var obj = {
            url: url,
            index: index
        };
        client.call('addtotextindex', callback, obj);
    },
    extractConcepts: function(input) {
        if (input.url) {
            client.call('extractconcepts', callback, {url: input.url});
        } else {
            client.call('extractconcepts', callback, {text: input.text});
        }
    }
};

function callback(err,res,body) {
    if (err) {
        console.log(err);
    }
    console.log(body);
}

