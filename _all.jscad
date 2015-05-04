// title: js-chess all pieces
// author: @michalbe
// url: http://github.com/michalbe/js-chess

function main() {
  var pawn = require('models/js-chess/pawn.jscad');
  var rook = require('models/js-chess/rook.jscad');
  var bishop = require('models/js-chess/bishop.jscad');
  var queen = require('models/js-chess/queen.jscad');
  var king = require('models/js-chess/king.jscad');

  rook = rook.translate([15, 0]);
  bishop = bishop.translate([30, 0]);
  // knight
  queen = queen.translate([60, 0]);
  king = king.translate([80, 0]);

  return [pawn, rook, bishop, queen, king];
}
