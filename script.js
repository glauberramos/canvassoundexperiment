bugs = new Array();

$(function() {
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

  $('#stop').click(function() {
    if (move) {
      move = false;
      $(this).val('Move');
    } else {
      move = true;
      $(this).val('Stop');
    }
  });

  function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    Draw.draw();

    requestAnimFrame(function() {
      animate();
    });
  }

  animate();
});