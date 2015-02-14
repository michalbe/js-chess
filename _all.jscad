// title: js-chess all pieces
// author: @michalbe
// url: http://github.com/michalbe/js-chess

function main() {
  var pawn = require('models/js-chess/pawn.jscad');
  var bishop = require('models/js-chess/bishop.jscad');

  bishop = bishop.translate([30, 0]);

  return [pawn, bishop];
}
