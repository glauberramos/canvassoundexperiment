bugs = new Array();

$(function() {
	var audioCtx = null;
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

	if ('webkitAudioContext' in window) {
    audioCtx = new webkitAudioContext();

    function bufferSound(event) {
        var request = event.target;
        soundBuffer = audioCtx.createBuffer(request.response, false);
    }

    var request = new XMLHttpRequest();
    request.open('GET', 'sound.mp3', true);
    request.responseType = 'arraybuffer';
    request.addEventListener('load', bufferSound, false);
      request.send();
  }

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
	
	function playSound(x, y, quick) {
    var sound = audioCtx.createBufferSource();
    var gain = audioCtx.createGainNode();

    sound.buffer = soundBuffer;
    sound.playbackRate.value = x / $('#canvas').width() * 2;
    sound.connect(gain);
    gain.connect(audioCtx.destination);

    var volume = y / $('#canvas').height() / 4;
    gain.gain.value = volume;

    if (quick) {
        sound.noteGrainOn(0., .2, .4);
    } else {
        sound.noteOn(0);
    }
	};

  $('#content').mousemove(function(event) {
    if(event.which==1) {
      bugs.push({ x: event.pageX, y: event.pageY - 40 });
      playSound(event.pageX, event.pageY, false);
    }
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