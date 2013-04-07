var move = true;

Draw = (function() {
  return {
  	draw: function() {
  		//draw line in the middle
      context.lineWidth = 10;
      context.beginPath();
      context.moveTo($(window).width()/2,0);
      context.strokeStyle = '#2AAF6B';
      context.lineTo($(window).width()/2,$(window).height());
      context.stroke();

      //draw lines
      for(key in lines) {
      	var width = $('#canvas').width(),
	         height = $('#canvas').height();
	    
	      context.lineWidth = 5;
      	context.beginPath();
      	context.moveTo(lines[key].x,0);
      	context.strokeStyle = '#ccc';
      	context.lineTo(lines[key].x,$(window).height());
      	context.stroke();

	      if(lines[key].x < $(window).width()) {
	      	if (move) {
	        	lines[key].x = lines[key].x + 4;
	      	}
	      } else {
	        lines[key].x = 0;
	      }
      }
	    
	    //draw circles/notes
	    for(key in bugs) {
	      var width = $('#canvas').width(),
	         height = $('#canvas').height(),
	         radius = 15,
	            hue = Math.floor(bugs[key].x / width * 360),
	     saturation = Math.floor(bugs[key].y / height * 100),
	      lightness = Math.floor(bugs[key].y / height * 100);
	    
	      context.beginPath();
	      context.arc(bugs[key].x, bugs[key].y, radius, 0, 2 * Math.PI);
	      context.fillStyle = 'hsl(' + hue + ',' + saturation + '%, ' + lightness + '%)';
	      context.fill();

	      if(bugs[key].x < $(window).width()) {
	      	if (move) {
	        	bugs[key].x = bugs[key].x + 4;
	      	}
	      } else {
	        bugs[key].x = 0;
	      }

	      if((bugs[key].x > ($(window).width()/2 - 5)) && (bugs[key].x < ($(window).width()/2 + 5))) {
	      	Sound.playSound(bugs[key].y, bugs[key].x, false);
	      }
	    }
	  }
  };
})();