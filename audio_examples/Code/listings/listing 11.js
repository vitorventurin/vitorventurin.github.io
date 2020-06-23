// run on page load
var audio = document.getElementById('audio');

jQuery.ajax({
	url: 'ajax.js',
	async: false,
	success: function() {
		audio.play(); // audio will play in iOS before 4.2.1
	}
});