$(document).ready(function(){
var workTime = 1500;
var seconds = workTime;
var breakTime = 300;
var display;
var count;
var workMode = true;
var play = false;
var sound = new Audio("./media/salt_machine.mp3")
$("#timer").text(timer(seconds));
$('#sessionMode').text("Work");
$('#workTime').text(timer(workTime));
$('#breakTime').text(timer(breakTime));

function timer(seconds) {
	var hours = Math.floor(seconds / 3600);
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	seconds = seconds % 60;

	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	if (hours < 10) {
		hours = "0" + hours;
	}
	
	return display = hours + ":" + minutes + ":" + seconds;
	
}

function decrement() {
	if (seconds === 0) {
		sound.play();
			if (workMode === true) {
				seconds = breakTime;
				workMode = false;
				$('#sessionMode').text("Break");
			}
			else {
				seconds = workTime;
				workMode = true;
				$('#sessionMode').text("Work");
			}
		$("#timer").text(timer(seconds));
	}		
	else {
		seconds = seconds - 1;
		$("#timer").text(timer(seconds));
	}
}

function counter() {
	count = setInterval(decrement, 1000);
}

function playPause() {
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
}

function reset () {
	clearInterval(count);
	seconds = workTime;
	$("#timer").text(timer(seconds));
	$('#sessionMode').text("Work");
	play = false;
	$("#play").text('Play');
}


// Controls
$("#play").click('button', playPause);
$("#reset").click('button', reset);

//Increase Work Time
$('#work').find('.plus').click('button', function(){
	if (play === false) { 
		workTime = workTime + 60;
		seconds = workTime;
		$('#workTime').text(timer(seconds));
		$('#timer').text(timer(seconds));
	}
});
//Reduce Work Time
$('#work').find('.minus').click('button', function(){
	if (play === false && workTime > 60) { 
		workTime = workTime - 60;
		seconds = workTime;
		$('#workTime').text(timer(seconds));
		$('#timer').text(timer(seconds));
	}
});

//Increase Break Time
$('#break').find('.plus').click('button', function(){
	if (play === false) { 
		breakTime = breakTime + 60;
		$('#breakTime').text(timer(breakTime));
	}
});

//Reduce Break Time
$('#break').find('.minus').click('button', function(){
	if (play === false && breakTime > 60) { 
		breakTime = breakTime - 60;
		$('#breakTime').text(timer(breakTime));
	}
});


	
});