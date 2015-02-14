// title: js-chess bishop
// author: @michalbe
// url: http://github.com/michalbe/js-chess

function main() {
  var bottom = circle({center:true}).scale([7, 2]).translate([0,1]).subtract(
    square([7, 4]).translate([-7, 0])
  ).subtract(
    square([14, 2]).translate([-7, -2])
  );
  var body = square([3, 10], {center:true}).translate([1.5, 6]).subtract(
    circle({center:true}).scale([1, 6]).translate([3, 7.7])
  );
  var collar = circle({center:true})
  .scale([4, 0.5]).subtract(
    square([4, 2]).translate([-4, -1])
  )
  .translate([0, 11]);

  var head = circle({center:true}).scale(2.5).translate([0, 13.9]);

  var base = rotate_extrude({fn: 128},
    union(bottom, body, collar, head)
  );

  return base;
}
