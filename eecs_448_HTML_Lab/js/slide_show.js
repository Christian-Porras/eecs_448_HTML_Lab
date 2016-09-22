//SlideShow.js
var currentPictureIndex = 0;

var pictures = [
	"img/business_panda.jpg",
	"img/lemur.jpg",
	"img/pug.jpg",
	"img/raccoon.jpg",
	"img/wolf.jpg"
];

function nextPicture(){
	var img = document.getElementById("currentPicture");
	if(currentPictureIndex== 4){														//if at the end of the array
		currentPictureIndex = 0;															//go to first index
	}
	else {																									//otherwise
		currentPictureIndex++;																//go to next index
	}
	img.src = pictures[currentPictureIndex];							  //set the source to the new index
	return;
}

//sets the image source to the next one in the array
function prevPicture(){
	var img = document.getElementById("currentPicture");
	if(currentPictureIndex== 0){														//checks if it is the first image
		currentPictureIndex = 4;															//if first image, go to back of array
	}
	else {																									//otherwise
		currentPictureIndex--;																//go to previous index
	}
	img.src = pictures[currentPictureIndex];								//set the sources to new index
	return;
}
