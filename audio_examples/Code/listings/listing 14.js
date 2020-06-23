// audioSprite has already been loaded via a user touch event
var audioSprite = document.getElementById('audio');
var spriteData = {
	meow1: {
		start: 0,
		length: 1.1
	},
	meow2: {
		start: 1.3,
		length: 1.1
	},
	whine: {
		start: 2.7,
		length: 0.8
	},
	purr: {
		start: 5,
		length: 5
	}
};

// play meow2 sprite
audioSprite.currentTime = spriteData.meow2.start;
audioSprite.play();