// title: OpenJSCAD.org Logo
// author: Rene K. Mueller 
// license: Creative Commons CC BY
// URL: http://openjscad.org/#examples/logo.jscad
// revision: 0.003
// tags: Logo,Intersection,Sphere,Cube

function main() {
    var bottom = circle({center:true}).scale([5, 1]).translate([0,1]).subtract(
        square([5, 2]).translate([-5, 0])
    );
    var body = square([3, 10], {center:true}).translate([1.5, 6]).subtract(
        circle({center:true}).scale([1, 6]).translate([3, 7.7])
    );
    
//return rotate_extrude({fn: 128},
//         union(bottom, body)
//        );

    return union(bottom, body);
}
