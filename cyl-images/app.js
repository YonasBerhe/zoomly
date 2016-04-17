
var scene = d3.select("a-entity#objects");

d3.json('testdata.json', function(error, links) {
  if (error) throw error;

  var length = 10;
  links = links.slice(0, length).filter(function (item) {
    return item.image;
  });

  var circle = scene.selectAll("a-cylinder")
      .data(links)
    .enter().append("a-curvedimage")
      .attr("src", function (d) {
        return d.image;
      })
      .attr("radius", function(d) {
        return 4;
      })
      .attr("theta-length", function (d) {
        return 1 / length * 360 - 1;
      })
      .attr("height", function (d) {
        console.log(d.height);
        return d.height/d.width * 3;
      })
      .attr("rotation", function (d, i) {
        return '0 ' + (i / length * 360 - 1) + ' 0';
      });
});
