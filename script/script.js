function timer(time){
	var seconds = time * 60
	var minutes = seconds / 60;
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}

	if (seconds == seconds - 1){

	}
	var display = minutes + ":" + seconds;

	$("#timer").text(display);

	$("#play").click('button', function(){
		setInterval(function(){
			seconds = seconds - 1;
			$("#timer").text(display);
			console.log(seconds);
		}, 1000);
	})
}


function decrement(){
	seconds = seconds - 1;
	$("#timer").text(display);

}


$(document).ready(function(){
	timer(25);
	
})