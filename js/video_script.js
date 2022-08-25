const firstLoader = document.getElementById('first-loader');
const secondLoader = document.getElementById('second-loader');
const video = document.getElementById("video_frame");

const nameContainer = document.getElementById('name');
const ageContainer = document.getElementById('age');
const locationContainer = document.getElementById('location');
const hobbiesContainer = document.getElementById('hobbies');
const hobbie1 = document.getElementById('hobbie1');
const hobbie2 = document.getElementById('hobbie2');
const hobbie3 = document.getElementById('hobbie3');
const hobbie4 = document.getElementById('hobbie4');
const qualitiesContainer = document.getElementById('qualities');
const quality1 = document.getElementById('quality1');
const quality2 = document.getElementById('quality2');
const quality3 = document.getElementById('quality3');
const quality4 = document.getElementById('quality4');
const quality5 = document.getElementById('quality5');
const waiting = document.getElementById('waiting-confirmation');

const turnoff = document.getElementById('turnoff-effect');


const onTimeUpdate = function() {
	if (video.currentTime >= 3) {
		secondLoader.style.display = "none";
	}

	if(video.currentTime >= 4) {
		nameContainer.classList.add('visible')
	}

	if(video.currentTime >= 5) {
		ageContainer.classList.add('visible')
	}

	if(video.currentTime >= 6) {
		locationContainer.classList.add('visible')
	}

	if(video.currentTime >= 7) {
		hobbiesContainer.classList.add('visible')
	}

	if(video.currentTime >= 7.5) {
		hobbie1.classList.add('visible')
	}

	if(video.currentTime >= 8) {
		hobbie2.classList.add('visible')
	}

	if(video.currentTime >= 8.5) {
		hobbie3.classList.add('visible')
	}

	if(video.currentTime >= 9) {
		hobbie4.classList.add('visible')
	}

	if(video.currentTime >= 8.5) {
		qualitiesContainer.classList.add('visible')
	}

	if(video.currentTime >= 8.5) {
		quality1.classList.add('visible')
	}

	if(video.currentTime >= 9) {
		quality4.classList.add('visible')
	}

	if(video.currentTime >= 9.5) {
		quality2.classList.add('visible')
	}

	if(video.currentTime >= 10) {
		quality3.classList.add('visible')
	}

	if(video.currentTime >= 10.5) {
		quality5.classList.add('visible')
	}

	if(video.currentTime >= 36) {
		waiting.classList.add('visible')
	}

	if(video.currentTime >= video.duration) {
		turnoff.classList.add('visible')
	}
}

video.addEventListener('timeupdate', onTimeUpdate);

document.addEventListener("keydown", (event) => {
	if (event.code == "Space" || event.code == "Enter" && video.play() == false) {
		video.play();
	}
})

window.onload = function() {
	setTimeout(function() {
		firstLoader.style.display = "none";
		if (true){video.play()};
	}, 2000)
}