// *** Index.html content***
//Set up and update about me section with bullets for easy reading.
function createAboutMeContent(){
	//Create text for the header
	$('#aboutMeHeader').text('About Me...');

	//Create bullet points for the about me section
	var aboutMeBullets = [
	'Born in Colorado but grew up in Seattle.',
	'Claymation freaks me out.',
	'I am a WSU grad (Go Cougs!)',
	'Before May I lived in Boston for 3 years.',
	'I have never been kayaking but I want to.',
	'I have a 7 year-old nephew who introduced me to Minecraft.',
	'I am a Game of Thrones nerd, I read the books too.',
	'Painting is my favorite relaxing hobby.'
	];

	//Use a loop to append a bullet for each text string
	for(i=0; i<aboutMeBullets.length; i++){
		$('#contentAboutMe').append('<li>' + aboutMeBullets[i] + '</li>' + '<br>');
	}
}
createAboutMeContent();

// Write code that feeds images from JavaScript
function generateCodeProjectImages(){
	//Set Header
	var h2element = document.getElementById('codeProjectHeader');
	var codeProjectHeader = 'Code Projects...';
	h2element.textContent = codeProjectHeader;

	// Declare an array with the 3 fileNames
	var codeProjectCollection = ['codeProjectGOT.jpg', 'codeProjectWater.jpg'];

	$('#codeProject0').attr('src', codeProjectCollection[0]);
	$('#codeProject1').attr('src', codeProjectCollection[1]);
}
generateCodeProjectImages();

//Create a function to generate the Gallery thumbnails and header
function generateGalleryThumbNail(){
	//create an empty array to push the file names into
	var imageCollection = [];
	for(var j=0; j < 16; j++){
		var imageFileName = 'Image' + j + '.jpg';
		imageCollection.push(imageFileName);

		//Use jQuery to feed file names to the document.
		$('#galleryImg0').attr('src', imageCollection[0]);
		$('#galleryImg1').attr('src', imageCollection[1]);
		$('#galleryImg2').attr('src', imageCollection[2]);
		$('#galleryImg3').attr('src', imageCollection[3]);
		$('#galleryImg4').attr('src', imageCollection[4]);
		$('#galleryImg5').attr('src', imageCollection[15]);
	};
}
generateGalleryThumbNail();

// *** jQuery / anchor tag navigation between pages

// Use jQuery to disolve between the home page content and the gallery content.
function navigationBar() {
	$('#galleryPage').hide();
}
navigationBar();

$('#galleryButton').on('click', function(){
	$('#galleryPage').fadeIn(1000);
	$('#homePage').fadeOut();
})
$('#homeButton').on('click', function(){
	$('#homePage').fadeIn(1000);
	$('#galleryPage').fadeOut();
})
