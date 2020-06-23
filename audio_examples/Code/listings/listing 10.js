var audio = document.getElementById('audio');
audio.play();

// at some later point in your script (does not need to be from a touch event)
audio.src = 'newfile.m4a';
audio.play(); // there will be a slight delay while the new audio file loads