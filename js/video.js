// store video as variable
const video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});

// play button
document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
	// update volume information
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// pause button
document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

// slow down button
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.90;
	console.log(video.playbackRate);
});

// faster button
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.10;
	console.log(video.playbackRate);
});

// skip button
document.querySelector("#skip").addEventListener("click", function() {
	let time = video.currentTime + 10;
	console.log("Skip ahead");
	if (time >= video.duration) {
		video.currentTime = 0;
		console.log(video.currentTime);
	}
	else {
		video.currentTime = time;
		console.log(video.currentTime);
	}
});

// mute
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

// volume slider
document.querySelector("#slider").addEventListener("click", function() {
	video.volume = slider.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// vintage styled 
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

// original styled 
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});