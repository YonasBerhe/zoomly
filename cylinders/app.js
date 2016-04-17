var radius = 2;
var padding = {
  width: 0.5,
  height: 0.1
};
var height = 0.4;

var root = d3.select("a-entity#objects");

d3.json("subreddits.json", function(error, subreddits) {

  var asArray = Object.keys(subreddits).map(function(name)  {
    return {
      subreddit: name,
      articles: subreddits[name]
    }
  });

  var numSubreddits = asArray.length;
  
  var camera = d3.select("a-entity#camera");
  var scene = d3.select("a-scene");

  if (error) throw error;

  // create a cylinder for each subreddit
  var circle = root.selectAll("a-cylinder")
      .data(asArray)
    .enter().append("a-cylinder")
      .attr("position", function(d, i) {
        return '0 '+ (height/2 + padding.height + i * (height + padding.height)) + ' 0';
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
