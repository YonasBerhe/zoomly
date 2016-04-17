var diameter = 4;

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

  var nodes = pack.nodes(root);

  var colorFunc = function(d) {
    return d.children ? color(d.depth) : "gray";
  }

  var circle = scene.selectAll("a-cylinder")
      .data(nodes)
    .enter().append("a-cylinder")
      .attr("position", function(d) {
        return d.x + " " + (d.depth) * 0.2 + " " + d.y;
      })
      .attr("radius", function(d) { return d.r; })
      .attr("segments-radial", function(d) { return 36*(d.r/root.r)+4; })
      .attr("height", 0.2)
      .attr("color", colorFunc)
      .attr("opacity", function (d) {
        return 0.5;
      })
      .attr("roughness", 0.8)
      .on('mouseenter', function(d) {
        d3.select(this).attr("color", "orange");
      })
      .on('mouseleave', function(d) {
        d3.select(this).attr("color", colorFunc);
      });
});
