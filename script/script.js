$(document).ready(function(){
var workTime = 1500;
var seconds = workTime;
var breakTime = 300;
var count;
var workMode = true;
var play = false;
var sound = new Audio("./media/salt_machine.mp3")
$("#timer").text(timer(seconds));
$('#sessionMode').text("Session");
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
	
	return (hours > 0) ? hours + ':' + minutes + ":" + seconds : minutes + ":" + seconds;
	
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
				$('#sessionMode').text("Session");
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

function stop () {
	clearInterval(count);
	play = false;
	workMode = true;
	seconds = workTime;
	$("#play").text('Play');
	$("#timer").text(timer(seconds));
	$('#sessionMode').text("Session");
}

function reset () {
	clearInterval(count);
	seconds = workTime = 1500;
	breakTime = 300;
	workMode = true;
	play = false;
	$("#timer").text(timer(seconds));
	$("#workTime").text(timer(seconds));
	$("#breakTime").text(timer(breakTime));
	$('#sessionMode').text("Session");
	$("#play").text('Play');
}

function incWorkTime () {
	if (play === false) { 
		workTime = workTime + 60;
		seconds = workTime;
		$('#workTime').text(timer(seconds));
		$('#timer').text(timer(seconds));
	}
}

function decWorkTime () {
	if (play === false && workTime > 60) { 
		workTime = workTime - 60;
		seconds = workTime;
		$('#workTime').text(timer(seconds));
		$('#timer').text(timer(seconds));
	}
}

function incBreakTime () {
	if (play === false) { 
		breakTime = breakTime + 60;
		$('#breakTime').text(timer(breakTime));
	}
}

function decBreakTime () {
	if (play === false && breakTime > 60) { 
		breakTime = breakTime - 60;
		$('#breakTime').text(timer(breakTime));
	}
}

// Controls
$("#play").click('button', playPause);
$('#stop').click('button', stop);
$('#reset').click(reset);
$('#work').find('.plus').click('button', incWorkTime);
$('#work').find('.minus').click('button', decWorkTime);
$('#break').find('.plus').click('button', incBreakTime);
$('#break').find('.minus').click('button', decBreakTime);
	
});