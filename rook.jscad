// title: js-chess bishop
// author: @michalbe
// url: http://github.com/michalbe/js-chess

function main() {
  var bottom = circle({center:true}).scale([7, 2]).translate([0,1]).subtract(
    square([7, 4]).translate([-7, 0])
  ).subtract(
    square([14, 2]).translate([-7, -2])
  );
  var body = square([3, 14], {center:true}).translate([1.5, 9.8]).subtract(
    circle({center:true}).scale([2, 7]).translate([3.7, 8.1])
  ).scale([1.4, 1]);
  var head = square([5, 5]).subtract(
    square([4, 1]).translate([0, 4])
  ).translate([0, 16.5]);

  var base = rotate_extrude({fn: 128},
    union(bottom, body, head)
  );

  return base;
}
