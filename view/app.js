var diameter = 4;
var subreddits = ['artificial', 'Seattle','dataisbeautiful', 'EarthPorn'];

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
            console.log(dataMerged.dataisbeautiful[i].data.preview);

            }

        }
    })
})


var color = d3.scale.linear()
    .domain([-1, 5])
    .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
    .interpolate(d3.interpolateHcl);


var pack = d3.layout.pack()
    .padding(2)
    .size([diameter, diameter])
    .value(function(d) { return d.size; })

var scene = d3.select("a-entity#objects");

d3.json("flare.json", function(error, root) {
  if (error) throw error;

  var focus = root,
      nodes = pack.nodes(root),
      view;

  var circle = scene.selectAll("a-cylinder")
      .data(nodes)
    .enter().append("a-cylinder")
      .attr("position", function(d) {
        return d.x + " " + (d.depth) * 0.2 + " " + d.y;
      })
      .attr("radius", function(d) { return d.r; })
      .attr("segments-radial", function(d) { return 36*(d.r/root.r)+4; })
      .attr("height", 0.2)
      .attr("color", function(d) {
        return d.children ? color(d.depth) : "gray";
      })
      .attr("roughness", 0.8)
    .append("a-event")
      .attr("name", "cursor-mouseenter")
      .attr("color", "orange");
});
