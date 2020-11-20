/* Get our elements */
const player = document.querySelector('.player'); /* Get the player */
const video = player.querySelector('.viewer'); /* Get the video */
const progress = player.querySelector('.progress'); /* Get the progress bar */
const progressBar = player.querySelector('.progress__filled'); /* Get the progress bar */
const toggle = player.querySelector('.toggle'); /* Get the toggle */
const skipButtons = player.querySelectorAll('[data-skip]'); /* Get the data skip */
const ranges = player.querySelectorAll('.player__slider'); /* Get the slider */

/* Build our functions */

function togglePlay() {
    if (video.paused) { /* pause is a property built into the video */
    video.play(); /* If paused the toggle to play */
    } else {
        video.pause(); /* if play then toggle to pause */
    }
} 

/* Alternative menthod1 - this creates a const of method with the commands which is then called underneath - if video is play then toggle to pause etc*/
/* function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
} */

/* Alternative menthod2 - Puts the commands underneath */
/* function togglePlay() {
    const method = ;
    video[video.paused ? 'play' : 'pause']();
} */

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  console.log(icon);
  toggle.textContent = icon;
}


/* Hook up our event listeners */

video.addEventListener('click', togglePlay); /* when click toggle play and pause */
video.addEventListener('play', updateButton); /* when playing update the button */
video.addEventListener('pause', updateButton); /* when paused update the button */

toggle.addEventListener('click', togglePlay); /* when click play button toggle play and pause */
