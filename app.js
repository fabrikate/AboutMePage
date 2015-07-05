//Set up and update about me section with bullets for easy reading.
function createAboutMeContent(){
	//Create text for the header
	var aboutMeHeader = document.getElementById('aboutMeHeader');
	aboutMeHeader.textContent = 'About Me...';

	//Create bullet points for the about me section
	var aboutMeBullets = [
	'I was born in Colorado, but grew up in the greater Seattle area.',
	'Claymation has freaked me out since I was a little kid.',
	'I am a Washington State University Grad (Go Cougs!)',
	'I have been living in the Boston area for the past 3 years',
	'You will see some photos/paintings of my cat, Cyrano. He will be on a AFV episode! Date TBD',
	'Painting is a way for me to relax, I love painting landscapes with watercolor or anything via my computer'
	];

	//Use a loop to append a bullet for each text string
	// ******BUG TO FIX, br is created but not creating a space between the li elements for readability
	for(i=0; i<aboutMeBullets.length; i++){
		var getAboutMeLocation = document.getElementById('contentAboutMe');
		var newList = document.createElement('li');
		newList.textContent = aboutMeBullets[i];
		getAboutMeLocation.appendChild(newList);
		var breakElement = document.createElement('br');
		newList.appendChild(breakElement);
	}
}
createAboutMeContent();

//Set up and update gallery section

function generateGalleryImages(){
	var numImages = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
	var imageNameArray = [];
	var image = 'Image';
	for(i=0; i< numImages.length; i++){
		var imageName = image+numImages[i]+'.jpg';
		console.log(imageName);
		imageNameArray.push(imageName);
		console.log(imageNameArray)
	}
	var getGalleryElement = document.getElementById('galleryImages');
	var newImg = document.createElement('')
}
generateGalleryImages();

//Set up and update link to code projects section
