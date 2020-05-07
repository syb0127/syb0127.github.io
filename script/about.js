/* Width of each carousel image, in pixels */
let carouselWidth = 322;

/* Part 2.1: Get the elements */
let prevButton = document.getElementById('button-previous');
let nextButton = document.getElementById('button-next');
let imageRow = document.getElementById('carousel-image-row');

/* Part 2.2: Create variable to keep track of which image we're on */
let imageNum = 0;

/* Part 2.3: The showNextImage function should shift the image row to the left */
function showNextImage() {
	imageNum = imageNum + 1;
	checkControls();
	let newPixelOffset = -carouselWidth * imageNum;
	imageRow.style.left = newPixelOffset + "px";
}

/* Part 2.4: Change the onclick property for the next button */
nextButton.onclick = showNextImage;

/* Part 2.5: The showPrevImage function should shift the image row to the right */
function showPrevImage() {
	imageNum = imageNum - 1;
	checkControls();
	let newPixelOffset = -carouselWidth * imageNum;
	imageRow.style.left = newPixelOffset + "px";
}

/* Part 2.6: Change the onclick property for the prev button */
prevButton.onclick = showPrevImage;

/* Total number of images */
let totalImages = document.getElementsByClassName('carousel-image').length;

/* Part 2.7 */
function checkControls() {
	/* What should happen when we reach the first image? */
	if (imageNum === 0) {
		prevButton.classList.add("hidden");
	} else if (prevButton.classList.contains("hidden")) {
		prevButton.classList.remove("hidden");
	}
	/* What should happen when we reach the last image? */
	if (imageNum === totalImages - 1) {
		nextButton.classList.add("hidden");
	} else if (nextButton.classList.contains("hidden")) {
		nextButton.classList.remove("hidden");
	}
}
 
