// run on page load
var audio = document.getElementById('audio');
audio.play(); // This will silently fail
audio.currentTime = 2; // This will throw a fatal error since the metadata for the audio does not exist