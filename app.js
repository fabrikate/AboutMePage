//Set up and update about me section with bullets for easy reading.
function createAboutMeContent(){
	//Create text for the header
	var aboutMeHeader = document.getElementById('aboutMeHeader');
	aboutMeHeader.textContent = 'About Me...';

	//Create bullet points for the about me section
	var aboutMeBullets = [
	'I was born in Colorado, but grew up in the greater Seattle area.',
	'Claymation has freaked me out since I was a little kid.',
	'I am a Washington State University grad (Go Cougs!)',
	'I have been living in the Boston area for the past 3 years',
	' ',
	'I have a 7 year-old nephew who I think is amazing.',
	'I am a Game of Thrones nerd, I read the books too.',
	'Watercolor painting is a hobby of mine, I have since learned how to pain on a mac.'
	];

	//Use a loop to append a bullet for each text string
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

// Write code that feeds images from JavaScript
function generateCodeProjectImages(){
	//Set Header
	var h2element = document.getElementById('codeProjectHeader');
	var codeProjectHeader = 'Code Projects...';
	h2element.textContent = codeProjectHeader;

	// Declare an array with the 3 fileNames
	var codeProjectCollection = ['codeProjectCalc.jpg', 'codeProjectGOT.jpg', 'codeProjectWater.jpg'];

	$('#codeProject0').attr('src', codeProjectCollection[0]);
	$('#codeProject1').attr('src', codeProjectCollection[1]);
	$('#codeProject2').attr('src', codeProjectCollection[2]);

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

// Use jQuery to load code goals page
// function codeProject() {
// 	$('#codeProjectsButton').on('click', funtion (){
// 		$('#testLoad').load('codeProjects.html');
// 	})
// }
// codeProject()
function testFunction(){
	window.location.href = 'codeProjects.html';
}

function goHome(){
	window.location.href = 'index.html';
}

