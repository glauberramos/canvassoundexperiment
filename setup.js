var canvas;
var context;
var Sound;

$(function() {
  canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');

  var numberLines = $(window).width() / 40;
  for (i = 1; i < numberLines; i++) {
    lines.push({ x: i*40 });
  }

  $('#canvas').attr('width', $(window).width());
  $('#canvas').attr('height', $(window).height() - 60);

  window.requestAnimFrame = (function(callback) {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  })();

  $('#clear').click(function() {
  	bugs = [];
  });
});