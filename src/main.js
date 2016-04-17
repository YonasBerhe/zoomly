'use strict';

const hod = require('havenondemand');
const apikey = '2432e2a1-173d-42df-9f7a-0f118ea73ae7';
const client = new hod.HODClient(apikey);
const index = 'zoomly';

/* /data
body.content
properties
title
url
content
 */

module.exports = {
    findRelated: function(text, indexes) {
        client.call('findrelatedconcepts', callback, {text: text, indexes: indexes});
    }
};

var callback = function(err,res,body){
    if (err) {
        console.log(err);
    }
    console.log(body);
};

