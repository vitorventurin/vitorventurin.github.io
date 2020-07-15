var audio1 = document.getElementById('audio1');
var audio2 = document.getElementById('audio2');
audio1.play();

// at a later time
audio2.play(); // there will be a few second delay as iOS is instantiating a new audio object. 

// at an even later time
audio1.play(); // there will also be a few second delay, as the audio object for audio1 in iOS was destroyed when we played audio2.