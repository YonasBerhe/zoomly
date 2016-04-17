var radius = 2;
var maxImages = 10;
var padding = {
  width: 0.5,
  height: 0.1
};
var height = 0.4;

var root = d3.select("a-entity#objects");

d3.json("subreddits.json", function(error, subreddits) {

  var asArray = Object.keys(subreddits).map(function(name, index)  {
    return {
      subreddit: name,
      index: index,
      articles: subreddits[name]
    }
  });

  var numSubreddits = asArray.length;
  var selectedSubreddit = null;

  var camera = d3.select("a-entity#camera");
  var scene = d3.select("a-scene");

  if (error) throw error;

  function displaySubreddit(sub) {
    if (sub === selectedSubreddit) {
      return;
    }
    var className;
    if (selectedSubreddit) {
      className = 'group-' + selectedSubreddit.subreddit;
      scene.selectAll("a-curvedimage." + className).remove();
      scene.selectAll("a-cylinder." + className).attr('opacity', 0.9);
    }

    selectedSubreddit = sub;
    var subIndex = asArray.indexOf(selectedSubreddit);
    className = 'group-' + selectedSubreddit.subreddit;

    function getAssetId(d, i) {
      return 'thumb-' + subIndex + '-' + i;
    }

    scene.select('a-assets').selectAll('img')
    .data(sub.articles, getAssetId)
    .enter().append('img')
    .attr('id', getAssetId)
    .attr('src', function (d) {
      return d.image;
    });

    scene.selectAll("a-curvedimage." + className)
      .data(sub.articles)
    .enter().append("a-curvedimage")
      .attr("class", className)
      .attr("position", function(d) {
        return '0 '+ (height/2 + padding.height + subIndex * (height + padding.height)) + ' 0';
      })
      .attr("src", function (d, i) {
        return '#' + getAssetId(d, i);
      })
      .attr("radius", function(d) {
        return radius;
      })
      .attr("theta-length", function (d) {
        return 1 / length * 360 - 1;
      })
      .attr("height", function (d) {
        return d.height/d.width * 3;
      })
      .attr("rotation", function (d, i) {
        return '0 ' + (i / maxImages * 360 - 1) + ' 0';
      });
  }



  // create a cylinder for each subreddit
  var circle = scene.selectAll("a-cylinder")
      .data(asArray)
    .enter().append("a-cylinder")
      .attr("position", function(d, i) {
        return '0 '+ (height/2 + padding.height + i * (height + padding.height)) + ' 0';
      })
      .attr('class', function (d) {
        return 'group-' + d.subreddit;
      })
      .attr("radius", function(d, i) { return radius; })
      // .attr("segments-radial", function(d) { return 20; })
      .attr("height", height)
      .attr("color", "#333")
      .attr("opacity", 0.9)
      .attr("roughness", 0.8)
      .on('mouseenter', function(d) {
        d3.select(this).attr("color", "orange");
      })
      .on('mouseleave', function(d) {
        d3.select(this).attr("color", "#333");
      })
      .on('click', function(d) {
        displaySubreddit(d);
        d3.select(this).attr('opacity', 0);
      });

    // one big cylinder
    var fullHeight = padding.height * 2 + numSubreddits * (height + padding.height);
    scene.append("a-cylinder")
      .attr("position", "0 " + fullHeight/2 + " 0")
      .attr("height", fullHeight)
      .attr("radius", radius + padding.width)
      .attr("opacity", 0.3)
      .on('click', function(d) {
        d3.select(this).remove();
      });
});
