var handler = function() {
	if (this.currentTime >= spriteData.meow2.start + spriteData.meow2.length) {
		this.pause();
	}
};

audioSprite.addEventListener('timeupdate', handler, false);