var audio = document.getElementById('audio');
audio.play();

var onEnded = function() {
	this.play();
};

audio.addEventListener('ended', onEnded, false);