$(document).ready(function(){
var seconds = 1500;
var display;
var count;
var play = false;
$("#timer").text(timer(seconds));

function timer(seconds) {
	var minutes = Math.floor(seconds / 60);
	seconds = Math.floor(seconds % 60);

	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	
	display = minutes + ":" + seconds;
	
	return display;
}

function decrement() {
	seconds = seconds - 1;
	if (seconds === 0) {
		clearInterval(count);
	}
	$("#timer").text(timer(seconds));
}

function counter() {
	count = setInterval(decrement, 1000);
}

// function playPause() {

	$("#play").click('button', function(){
		if (play === false){
			counter();
			play = true;
			$("#play").text('Pause');
		}
		else {
			clearInterval(count);
			play = false;
			$("#play").text('Play');
		}

	});
// }

	
	
});