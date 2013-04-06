$(function() {
  $('#canvas').attr('width', $(window).width() - 40);
  $('#canvas').attr('height', $(window).height() - 40);

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