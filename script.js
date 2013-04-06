bugs = new Array();

$(function() {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  function draw() {
    for(key in bugs) {
      var width = $('#canvas').width(),
         height = $('#canvas').height(),
         radius = 30,
            hue = Math.floor(bugs[key].x / width * 360),
     saturation = Math.floor(bugs[key].y / height * 100),
      lightness = Math.floor(bugs[key].y / height * 100);
    
      context.beginPath();
      context.arc(bugs[key].x, bugs[key].y, radius, 0, 2 * Math.PI);
      context.fillStyle = 'hsl(' + hue + ',' + saturation + '%, ' + lightness + '%)';
      context.fill();

      if(bugs[key].x < $(window).width()) {
        bugs[key].x = bugs[key].x + 4;
      } else {
        bugs[key].x = 0;
        //delete bugs[key];
      }
    }
  }

  $('#content').mousemove(function(event) {
    if(event.which==1) {
      bugs.push({ x: event.pageX, y: event.pageY - 40 });
      Sound.playSound(event.pageX, event.pageY, false);
    }
  });

  $('#content').click(function(event) {
    bugs.push({ x: event.pageX, y: event.pageY - 40 });
    Sound.playSound(event.pageX, event.pageY, false);
  });

  function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    draw();

    requestAnimFrame(function() {
      animate();
    });
  }

  animate();
});