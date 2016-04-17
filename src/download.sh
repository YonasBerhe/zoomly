#!/bin/bash

curl https://www.reddit.com/r/$1.json?limit=100 -s | jq '[.data.children[].data | {title: .title, url: .permalink, image: .preview.images[0].source.url, width: .preview.images[0].source.width, height: .preview.images[0].source.height}]' -M
