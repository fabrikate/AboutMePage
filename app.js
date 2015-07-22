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
	'tbd',
	'Painting is a way for me to relax, I love painting landscapes with watercolor or anything via my computer'
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

function generateCodeProjectImages(){
var codeProjectCollection = ['codeProjectCalc.jpg', 'codeProjectGOT.jpg', 'codeProjectWater.jpg'];

$('#codeProject0').attr('src', codeProjectCollection[0]);
$('#codeProject1').attr('src', codeProjectCollection[1]);
$('#codeProject2').attr('src', codeProjectCollection[2]);

}
generateCodeProjectImages();

function generateGalleryThumbNail(){
	var imageCollection = [];
	for(var j=0; j < 16; j++){
		var imageFileName = 'Image' + j + '.jpg';
		imageCollection.push(imageFileName);

		$('#galleryImg0').attr('src', imageCollection[0]);
		$('#galleryImg1').attr('src', imageCollection[1]);
		$('#galleryImg2').attr('src', imageCollection[2]);
		$('#galleryImg3').attr('src', imageCollection[3]);
		$('#galleryImg4').attr('src', imageCollection[4]);
		$('#galleryImg5').attr('src', imageCollection[15]);
	};
}
	// $('#thumbNail0').attr('src', imageFileName[i]);
generateGalleryThumbNail();

function navigationBar() {
	$('#galleryPage').hide();
}
navigationBar();

$('#galleryButton').on('click', function(){
	$('#galleryPage').fadeIn(2000);
	$('#homePage').fadeOut();
})

$('#homeButton').on('click', function(){
	$('#homePage').fadeIn(2000);
	$('#galleryPage').fadeOut();
})

