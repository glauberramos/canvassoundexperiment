Sound = (function() {
    var audioCtx = null;

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

    return {
        playSound: function(x, y, quick) {
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
        }
    };
})();