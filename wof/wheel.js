
// let audio = new Audio('metronone.wav');
var audio1 = document.getElementById('audio1');
var width = window.innerWidth;
var height = width;//window.innerHeight;

Konva.angleDeg = false;
var angularVelocity = 0;
var initialVelocity = 0;
var first = true;
var angularVelocities = [];
var lastRotation = 0;
var controlled = false;
var numWedges = 20;//was 25
var angularFriction = 0.2;
var target, activeWedge, stage, layer, wheel, pointer;
var radius = 400;
var finished = true;
var slicewidth = 0;
var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
var fontname = "Calibri";
var waspositive = false;

function getRandomReward() {
	var mainDigit = Math.round(Math.random() * 9) * 100;
	var before = mainDigit;
	if(mainDigit == 0){
		mainDigit = "BANKRUPT";
	}
//console.log("CHECKING: " + mainDigit + " BEFORE: " + before + iif(mainDigit == 0, " IS ZERO"));
return mainDigit + "";
}

function getRandomColor() {
	var r = 100 + Math.round(Math.random() * 55);
	var g = 100 + Math.round(Math.random() * 55);
	var b = 100 + Math.round(Math.random() * 55);
	var s = getRandomReward();
	if(s == "BANKRUPT"){
r = 0; g = 0; b = 0;//black
}
return purifyColor([r, g, b], s);
}

function slicesize(){
	return findNewPoint(0,0, 360 / numWedges, radius);
}

function findNewPoint(x, y, angle, distance) {
	var result = {};
	result.x = Math.round(Math.cos(angle * Math.PI / 180) * distance + x);
	result.y = Math.round(Math.sin(angle * Math.PI / 180) * distance + y);
	return result;
}

function getAverageAngularVelocity() {
	var total = 0;
	var len = angularVelocities.length;
	if (len === 0) {
		return 0;
	}
	for (var n = 0; n < len; n++) {
		total += angularVelocities[n];
	}
	total = total / len;
	return total;
}

function purifyColor(color, s) {
	var randIndex = Math.round(Math.random() * 3);
	color[randIndex] = 0;
	color[3] = s;
	return color;
}

function getTextWidth(text, font, size, height, total) {
	if(isUndefined(height)){
		height = false;
	}
	if(isUndefined(total)){
		total = false;
	}
	if(text.includes('\n')){
		var max = 0;
		text = text.split('\n');
		for(var i = 0; i < text.length; i++){
			var width = getTextWidth(text[i], font, size, height, total);
			if(total){
				max += width;
			} else if(width > max){
				max = width;
			}
		}
		return max;
	}
// getTextWidth("hello there!", "bold 12pt arial")
// re-use canvas object for better performance
// var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
var context = canvas.getContext("2d");
context.font = font + " " + size;
if(height){
	return -1;
}
var metrics = context.measureText(text);
return metrics.width;
}


function isNumeric(n) {
	return (typeof n == 'number')
}

function isUndefined(n) {
	return (typeof n == 'undefined')
}

function addWedge(n) {
	var s = getRandomColor();
var reward = s[3];// getRandomReward();
var size = 16;
if (isNumeric(reward)) {
	reward = "" + reward;
}
reward = Array.from(reward).join('\n');

var r = s[0];
var g = s[1];
var b = s[2];
var angle = (2 * Math.PI) / numWedges;

var endColor = 'rgb(' + r + ',' + g + ',' + b + ')';
r += 100;
g += 100;
b += 100;

var startColor = 'rgb(' + r + ',' + g + ',' + b + ')';

var wedge = new Konva.Group({
	rotation: (2 * n * Math.PI) / numWedges
});

var wedgeBackground = new Konva.Wedge({
	radius: radius,
	angle: angle,
	fillRadialGradientStartPoint: 0,
	fillRadialGradientStartRadius: 0,
	fillRadialGradientEndPoint: 0,
	fillRadialGradientEndRadius: radius,
	fillRadialGradientColorStops: [0, startColor, 1, endColor],
	fill: '#64e9f8',
	fillPriority: 'radial-gradient',
	stroke: '#ccc',
	strokeWidth: 2
});

wedge.add(wedgeBackground);
var y = getTextWidth(reward, fontname, size, false);
//console.log("REWARD: " + reward.split('\n').join('') + " slicewidth: " + slicewidth + " WIDTH: " + y);

var text = new Konva.Text({
	text: reward,
	fontFamily: fontname,
	fontSize: minsize(reward, radius * 0.5, fontname, size),
	fill: 'white',
	align: 'center',
	stroke: 'yellow',
	strokeWidth: 1,
	rotation: (Math.PI + angle) / 2,
	x: radius - 20,
	y: slicewidth - y * 2,
	listening: false
});

wedge.add(text);
text.cache();

wedge.startRotation = wedge.rotation();

wheel.add(wedge);
}

function minsize(text, maxheight, fontname, maxfontsize){
	text = text.split('\n').join("");
	var len = Math.floor(text.length / 4);
	return maxfontsize - (len * 5);
/*
var height = getTextWidth(text, fontname, maxfontsize, true, true);
console.log("[minsize] height: " + height + " maxfontsize: " + maxfontsize + " maxheight: " + maxheight);
while(height >= maxheight && maxfontsize > 5){
console.log("[minsize] height: " + height + " maxfontsize: " + maxfontsize + " maxheight: " + maxheight);
maxfontsize = maxfontsize - 5;
height = getTextWidth(text, fontname, maxfontsize, true, true);
}

console.log("minsize: " + text.split('\n').join("[N]") + " max height: " + maxheight + " fontname: " + fontname + " maxfontsize: " + maxfontsize + " height: " + height);
*/
return maxfontsize;
}

function animate(frame) {
// handle wheel spin
var angularVelocityChange = (angularVelocity * frame.timeDiff * (1 - angularFriction)) / 1000;
angularVelocity -= angularVelocityChange;

// activate / deactivate wedges based on point intersection
var shape = stage.getIntersection({
	x: stage.width() / 2,
	y: 100
});

if (controlled) {
	if (angularVelocities.length > 10) {
		angularVelocities.shift();
	}

	angularVelocities.push(
		((wheel.rotation() - lastRotation) * 1000) / frame.timeDiff
		);
} else if(initialVelocity > 0 && !finished) {
	var diff = (frame.timeDiff * Math.abs(angularVelocity)) / 1000;

//console.log("diff: " + diff + " angularVelocity: " + angularVelocity + " FINSISHED: " + tobool(finished) + " controlled: " + tobool(controlled) + " above fraction: " + tobool(diff > 0.0001));

if (diff > 0.0001){// || diff < -0.0001) {
	if(!waspositive && diff > 0){
		diff = -diff;
	}
	wheel.rotate(diff);
} else if (!controlled) {
	if (shape) {
		var text = shape
		.getParent()
		.findOne('Text')
		.text();
		var price = text.split('\n').join('');
//if (first) {
// first = false;
//} else
if (Math.abs(initialVelocity) < 2) {
	alert("Try a faster spin");
} else {
alert('Your reward is ' + price);// + " initialVelocity: " + initialVelocity + " waspositive: " + tobool(waspositive));
}
} else {
//console.log("SHAPE NOT FOUND");
}
finished = true;
}
}

lastRotation = wheel.rotation();

function playSound() {
    // Stop and rewind the sound if it already happens to be playing.
    // audio1.pause();
    // audio1.currentTime = 0;

    // Play the sound.
    audio1.play();
}

if (shape) {
	if (shape && (!activeWedge || shape._id !== activeWedge._id)) {
		pointer.y(20);

		new Konva.Tween({
			node: pointer,
			duration: 0.3,
			y: 30,
			easing: Konva.Easings.ElasticEaseOut,
			onFinish: function () {
				//play sound:
				playSound();
	        },
		}).play();

		if (activeWedge) {
			activeWedge.fillPriority('radial-gradient');
		}
		shape.fillPriority('fill');
		activeWedge = shape;
	}
}
}

function init() {
	stage = new Konva.Stage({
		container: 'game',
		width: width,
		height: height
	});

	layer = new Konva.Layer();

	radius = stage.height() * 0.5 - 50;
	wheel = new Konva.Group({
		x: stage.width() * 0.5,
		y: radius + 10
	});

	slicewidth = slicesize().y * 0.5;
	for (var n = 0; n < numWedges; n++) {
		addWedge(n);
	}

	pointer = new Konva.Wedge({
		fillRadialGradientStartPoint: 0,
		fillRadialGradientStartRadius: 0,
		fillRadialGradientEndPoint: 0,
		fillRadialGradientEndRadius: 30,
		fillRadialGradientColorStops: [0, 'white', 1, 'red'],
		stroke: 'white',
		strokeWidth: 2,
		lineJoin: 'round',
		angle: 1,
		radius: 30,
		x: stage.width() / 2,
		y: 33,
		rotation: -90,
		shadowColor: 'black',
		shadowOffset: 3,
		shadowBlur: 2,
		shadowOpacity: 0.5
	});

// add components to the stage
layer.add(wheel);
layer.add(pointer);
stage.add(layer);

// bind events
wheel.on('mousedown touchstart', function(evt) {
	if(finished || angularVelocity == 0){
		console.log("MOUSE DOWN");
		angularVelocity = 0;
		controlled = true;
		target = evt.target;
		finished = false;
	}
});

// add listeners to container
stage.addEventListener('mouseup touchend', function() {
	mouseup();
}, false);

var leftMouseButtonOnlyDown = false;
function setLeftButtonState(e) {
	leftMouseButtonOnlyDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
	if(controlled && !leftMouseButtonOnlyDown){
		mouseup();
	}
}
document.body.onmousedown = setLeftButtonState;
document.body.onmousemove = setLeftButtonState;
document.body.onmouseup = setLeftButtonState;

function mouseup(){
	if(controlled){
		controlled = false;
		angularVelocity = getAverageAngularVelocity() * 5;
		if (angularVelocity > 20) {
			angularVelocity = 20;
		} else if (angularVelocity < -20) {
			angularVelocity = -20;
		}
		console.log("MOUSE UP: " + angularVelocity);
		initialVelocity = Math.abs(angularVelocity);
		waspositive = angularVelocity > 0;
		angularVelocities = [];
	}
}

stage.addEventListener('mousemove touchmove', function(evt) {
	if(controlled){
		console.log("MOUSE MOVE");
		var mousePos = stage.getPointerPosition();
		if (mousePos && target) {
			var x = mousePos.x - wheel.getX();
			var y = mousePos.y - wheel.getY();
			var atan = Math.atan(y / x);
			var rotation = x >= 0 ? atan : atan + Math.PI;
			var targetGroup = target.getParent();

			wheel.rotation(
				rotation - targetGroup.startRotation - target.angle() / 2
				);
		}
	}
}, false);

var anim = new Konva.Animation(animate, layer);
anim.start();
}


function tobool(value){
	if(value){return "YES";}
	return "NO";
}

init();

// fit stage
function fitStageIntoParentContainer() {
    var container = document.querySelector('#stage-parent');
    // now we need to fit stage into parent
    var containerWidth = container.offsetWidth;
    // to do this we need to scale the stage
    var scale = containerWidth / width;

    stage.width(width * scale);
    stage.height(width * scale); //width = height
    stage.scale({ x: scale, y: scale });
    stage.draw();
    console.log("resized: " + canvas.width + "w" + " | " + canvas.height + "h");
}
fitStageIntoParentContainer();    
// adapt the stage on any window resize
window.addEventListener('resize', fitStageIntoParentContainer);


//deprecated: resizing event
// window.addEventListener("resize", updateCanvas);

// function updateCanvas() {
//   // update canvas size (and position) here
//   width = window.innerWidth;
//   height = width;
//   // height = window.innerHeight;
// 	console.log("resized: " + canvas.width + "w");// + " | " + canvas.height + "h");

//   // redraw canvas content based on new size
//   // ...
//   // init();
// }

// updateCanvas();   // initial call