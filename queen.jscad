// title: js-chess queen
// author: @michalbe
// url: http://github.com/michalbe/js-chess

function main() {
  var bottom = circle({center:true}).scale([7, 2]).translate([0,1]).subtract(
    square([7, 4]).translate([-7, 0])
  ).subtract(
    square([14, 2]).translate([-7, -2])
  );

  var body = square([3, 22], {center:true}).translate([1.5, 12]).subtract(
    circle({center:true}).scale([1, 10]).translate([3, 9.8])
  ).union(
    circle({center:true}).translate([0, 24])
  ).union(
    circle({center:true}).scale([3,1]).translate([0, 23])
  );

  var collar = circle({center:true})
  .scale([4, 0.5]).subtract(
    square([4, 2]).translate([-4, -1])
  ).translate([0, 17]);

  var base = rotate_extrude({fn: 128},
    union(bottom, body, collar)
  );

  return base;
}
