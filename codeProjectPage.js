//Add content to CodeProjects html page.

function codeGoals(){
	var codeHeader = 'Galvanize and Beyond...';
	$('#codeGoalsHeader').text(codeHeader);

	var codeGoalsBullet = [
	'At Galvanize: proficent in the MEAN stack',
	'At Galvanize: JavaScript mastery',
	'At Galvanize: clear understanding of git',
	'Post Galvanize: work for a start-up',
	'Post Galvanize: have a strong portfolio',
	'Post Galvanize: tbd'
	]

	for(var i=0; i<codeGoalsBullet.length; i++){
		$('#codeGoalsList').append('<li>' + codeGoalsBullet[i] + '</li>' + '<br>');

	}
}
codeGoals();

function codeProjects(){
	var $codeProjectHeader = $('#codeProjectsHeader').text('Code Projects...');

	var $gotLink = '<a href="https://github.com/fabrikate/GameOfThrones_TriviaGame" target="_blank">';
	var $showGOTimg = $gotLink + '<img src='+'"codeProjectGOT.jpg" id="gotImg"/>' + '</a>';
	var $gotTD = $('#projectGOT').append('<td>' + $showGOTimg + '</td>');
	var $GOTtext = $($gotTD).append('<td>' + 'Using some intermediate Front-End Skills I built a trivia game all about Game of Thrones. Upon starting get your Westeros name and answer a series of questions from dropdown menus.' + '</td>');

	var $waterLink = '<a href="https://github.com/fabrikate/WaterApp" target="_blank">';
	var $showWaterImg = $waterLink + '<img src="codeProjectWater.jpg" id="waterImg"/>' + '</a>';
	var $waterTD = $('#projectWater').append('<td>' + $showWaterImg + '</td>');
	var $waterText = $($waterTD).append('<td>' + 'In an effort to show friends just how much water they should drink I developed this app. Enter in your weight, activity level for the day, and prefered water bottle size. You will then learn the ounces range you need to consume and how many water bottles that is. No more excuses!' + '</td>');
}

codeProjects();

$('#TinaFeyGif').hide();

function codingGif() {
	$('#startingCodeCareer').text('So how do I feel about starting a career in coding?');
	$('#startingCodeCareer').on('click', function(){
		$('#TinaFeyGif').show();
	})
}
codingGif();
