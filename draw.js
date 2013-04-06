var move = true;

Draw = (function() {
  return {
  	draw: function() {
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
	      	if (move) {
	        	bugs[key].x = bugs[key].x + 4;
	      	}
	      } else {
	        bugs[key].x = 0;
	        //delete bugs[key];
	      }
	    }
	  }
  };
})();