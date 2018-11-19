//Document Startup for Materialize JS
var projectData = [
	{
		id:"minApp",
		title:"Pocket Mineral Guide",
		projectRole:"Lead Developer",
		skills:["Javascript (ES6)", "Meteor","React", "MongoDB", "Material-UI"],
		description:["-Mineral education app currently available in both android and iOS stores.",
					"-Contains over 1500 unique minerals with high definition pictures.",
					"-Can be used to actually identify a mineral in hand!",
					"-Written in ES6 using the meteor platform to make the app available for Android and iOS stores.",
					"-Leveraged reactJS’s component reusability and top down data-flow to efficiently write the app." ],
		images:["minID1.png", "minID2.png", "minID3.png"]
	},
	{
		id:"godp",
		title:"Graduate Data Processing",
		projectRole:"Lead Developer",
		skills:["Javascript","Bootstrap", "SCSS", "PHP","MySql"],
		description:["-Browser based intranet application with a full front to back end system.",
					"-This system is meant to be used by a school's career services departments to edit, maintain and generate graphs for student outcomes.",
					"-These outcomes would be submitted to organizations such as NACE or USNews for their college statistics",
					"-Talked with stakeholders regularly to make sure the product was aligned with the original scope of the project",
					"-Used Bootstrap and jQuery on the front end",
					"-Created middleware using PHP",
					"-Archtected MySql database and generated large set of testing data"],
		images:[ "godpHome.png", "godpEditing.png", "godpDash.png"]
	},
	{
		id:"lvlDesign",
		title:"Level Design",
		projectRole:"Lead Developer",
		skills:["Unreal Engine", "Unreal Script", "C++"],
		description:["-Designed the landscape and atmosphere of a level in the Unreal Engine",
					"-Created events and interactions throughout the level using Unreal Script",
					"-Applied dynamic shadows based on the location and color of the lighting"],
		images:["FirstLevel01.png", "FirstLevel02.png", "FirstLevel03.png", "FirstLevel05.png"]
	},
	{
		id:"site",
		title:"This Website",
		skills:["Javascript", "GSAP", "HTML", "SCSS", "Gulp"],
		description:["-This website was a fun little project (a little meta I know)",
					"-Used Greensock Animation Platform aka GSAP for the animations (really fun library)",
					"-Used Materialize.scss in conjunction with my own for easy theming and styling throughout site",
					"-Build process was done utilizing Gulp for minification of css and js"],
		images:["", "thisSite.png"]
	}
];

var skills = [
	'Javascript',
	'React',
	'AngularJS',
	'GSAP',
	'SCSS',
	'mySQL',
	'MongoDB',
	'Webpack',
	'Gulp'
];

//Globals
var screenHeight = $( document ).height();
var screenWidth = $( document ).width();
var smallScreen = false;

if(screenWidth < 750){
	smallScreen = true;
}
console.log(screenWidth);

$( window ).resize(function() {
	screenHeight = $( document ).height();
	screenWidth = $( document ).width();

	if(screenWidth > 750){
		smallScreen = true;
	}
});

// Animation Timelines
var tl = new TimelineLite({paused:true});
var tl2 = new TimelineLite({paused:true});

//For intro sequence
function wordAnimation(jqString, duration, delay){
	var nameSpans = $(jqString).children();
	var xDistance = 100;
	tl.eventCallback("onComplete", clearTl)
	if(screenWidth <= 375){
		xDistance = 40
	}
	tl.pause();
	for(i=0; nameSpans.length > i; i++){
		if( i % 3 === 0){
			if(nameSpans[i].innerText ==='r'){
				tl.fromTo(nameSpans[i], 0.2, {opacity:0, x: -100}, {opacity:1, x: xDistance})
				.to(nameSpans[i], 0.5, {rotation: 30})
				.to(nameSpans[i], 0.4, {rotation: -30})
				.to(nameSpans[i], 0.15, {rotation: 30})
				.to(nameSpans[i], 0.15, {rotation: -30})
				.to(nameSpans[i], 0.2, {rotation: 0, y: -50})
				.to(nameSpans[i], 0.2, {y: 0})
				.to(nameSpans[i], 0.2, {rotation: 15, x: 0})
				.to(nameSpans[i], 0.2, {rotation: 0});
				// .to(nameSpans[i], 0.2, {x: 0});
			} else {
				tl.fromTo(nameSpans[i], 0.15, {opacity:0, x: -100}, {opacity:1, x: 0})
			}
		} else if( i % 3 === 1){
			tl.fromTo(nameSpans[i], 0.15, {opacity:0, y: -100}, {opacity:1, y: 0})
		} else if( i % 3 === 2){
				tl.fromTo(nameSpans[i], 0.15, {opacity:0, x: 100}, {opacity:1, x: 0})
		}
	}
	tl.play();
}

var currentPrj = "";
// var firstRun = true;
// Project Fetch Animation
function animateFetch(prj, tl2){
	var elm = "#"+prj.id;
	var halfVH = screenHeight/2;
	// console.log(prj);
	// console.log(prj.id);
	if(currentPrj !== elm){
		tl2.set("#project", {
			x:-500,
			opacity:0
		});	
		//If not empty then push content down with falling btn
		
		tl2.to(elm, 2.5, {
			ease: Elastic.easeOut.config(1, 0.3),
			rotation: -90,
			transformOrigin:"right"
		});
	
		tl2.to(elm, 1, {
			  y: screenHeight,
		});
	
		tl2.set(elm, {
			  y: 0,
			x: -250,
			rotation:0
		});
	
		tl2.to(elm, 1.5, {
			x: 0,
			ease: Elastic.easeOut.config(0.3, 0.3)
		});
	
		tl2.to("#project", 1.5, {
			opacity:1,
			x:0,
			ease: Elastic.easeOut.config(0.3, 0.3),
			onComplete:clearTl2
		}, '-=1.5');
	
		tl2.play();
		currentPrj = elm;
	}
}

function getProject(el){
	var dataset = {};
	if(smallScreen){
		var projOpacity = Number($("#project").css("opacity"));
		if( projOpacity === 1){
			$("#project").animate({
				opacity: 0,
			}, 750, function(){
				$("#picture").empty();
				$("#desc").empty();
				$("#skills").empty();
				if(el.id ==="minApp" || el.id ==="dropDown_minApp"){
					dataset = projectData[0];
				} else if(el.id ==="godp" || el.id ==="dropDown_godp"){
					dataset = projectData[1];
				} else if(el.id === "lvlDesign" || el.id === "dropDown_lvlDesign"){
					dataset = projectData[2];
				} else if(el.id === "site" || el.id === "dropDown_site"){
					dataset = projectData[3];
				}
				$("#picture").append("<img class=\"responsive-img projectImg\" src=\"images\/"+dataset.images[1]+"\"></img>")
				$.each(dataset.description, function(index, value){
					$("#desc").append("<div>"+value+"</div>")
				})
				if(dataset.id === "minApp"){
					$("#desc").append("<div id=\"badge-container\" class=\"col s12 center-align\"></div>")
					$("#badge-container").append("<a href=\"https://play.google.com/store/apps/details?id=com.meteor.josh.mineral&hl=en_US\" target=\"_blank\"><img class=\"download-icon\" src=\"images/google-badge.png\"></a>")
					$("#badge-container").append("<a href=\"https://itunes.apple.com/us/app/pocket-mineral-guide/id1266022397?ls=1&mt=8\" target=\"_blank\"><img class=\"download-icon\" src=\"images/apple-download.svg\"></a>")
				}
				$.each(dataset.skills, function(index, value){
					$("#skills").append("<div class=\"col s12 skillContainer\">"+value+"</div>")
				})
			});	
			$("#project").animate({
				opacity: 1,
			}, 500);
		} else {
			if(el.id ==="minApp" || el.id ==="dropDown_minApp"){
				dataset = projectData[0];
			} else if(el.id ==="godp" || el.id ==="dropDown_godp"){
				dataset = projectData[1];
			} else if(el.id === "lvlDesign" || el.id === "dropDown_lvlDesign"){
				dataset = projectData[2];
			} else if(el.id === "site" || el.id === "dropDown_site"){
				dataset = projectData[3];
			}
			$("#picture").append("<img class=\"responsive-img projectImg\" src=\"images\/"+dataset.images[1]+"\"></img>")
				$.each(dataset.description, function(index, value){
					$("#desc").append("<div>"+value+"</div>")
				})
				$.each(dataset.skills, function(index, value){
					$("#skills").append("<div class=\"col s12 skillContainer\">"+value+"</div>")
				})
		}
	}else {
		$("#picture").empty();
		$("#desc").empty();
		$("#skills").empty();
		if(el.id ==="minApp" || el.id ==="dropDown_minApp"){
			dataset = projectData[0];
		} else if(el.id ==="godp" || el.id ==="dropDown_godp"){
			dataset = projectData[1];
		} else if(el.id === "lvlDesign" || el.id === "dropDown_lvlDesign"){
			dataset = projectData[2];
		} else if(el.id === "site" || el.id === "dropDown_site"){
			dataset = projectData[3];
		}
		$("#picture").append("<img class=\"responsive-img projectImg\" src=\"images\/"+dataset.images[1]+"\"></img>")
		$.each(dataset.description, function(index, value){
			$("#desc").append("<div>"+value+"</div>")
		})
		if(dataset.id === "minApp"){
			$("#desc").append("<div id=\"badge-container\" class=\"col s12 center-align\"></div>")
			$("#badge-container").append("<a href=\"https://play.google.com/store/apps/details?id=com.meteor.josh.mineral&hl=en_US\" target=\"_blank\"><img class=\"download-icon\" src=\"images/google-badge.png\"></a>")
			$("#badge-container").append("<a href=\"https://itunes.apple.com/us/app/pocket-mineral-guide/id1266022397?ls=1&mt=8\" target=\"_blank\"><img class=\"download-icon\" src=\"images/apple-download.svg\"></a>")
		}
		$.each(dataset.skills, function(index, value){
			$("#skills").append("<div class=\"col s12 skillContainer\">"+value+"</div>")
		})
	}
	if(!smallScreen){
		animateFetch(el, tl2);
	} else if (smallScreen){
		$("#project").animate({
			opacity: 1,
		}, 500);
	}
}

function clearTl(){
	tl.clear();
}
function clearTl2(){
	tl2.clear();
}

// function getProjectMobile(project){
// 	console.log(project)
// 	console.log(project.id)
// 	$()
// }

document.getElementById("animate").onclick = function() {
	wordAnimation("#mainTitle h1", 1, 0.2);
	wordAnimation("#mainTitle h3", 1, 0.2);
   tl.restart();
   tl.play();
}

// Scroll to anchor
$('.navButton').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top -56
        }, 1000);
    }
});

$.each(projectData, function(index, value){
	$("#projectBtnsContainer").append("<div id=\""+value.id+"\" class=\"btn projectBtn\" onclick=\"getProject(this)\">"+value.title+"</div>")
});

$.each(projectData, function(index, value){
	$("#projectDropdown").append("<li><a id=\"dropDown_"+value.id+"\" onclick=\"getProject(this)\">"+value.title+"</a></li>")
});

$.each(skills, function(index, value){
	$("#aboutSkillsContainer").append("<div class=\"aboutSkills\">"+value+"</div>")
});


//Window Resize
//-Recalculate smallScreen
function resizeWindow(){
	console.log(this);
	screenWidth = $( document ).width();
	console.log("screenWidth resize = "+screenWidth)
	if(screenWidth < 750){
		console.log("screenWidth resize = "+screenWidth)
		smallScreen = true;
	}
}

//On Doc Ready
$(document).ready(function(){
    $('.sidenav').sidenav();
	// particles
	$('.dropdown-trigger').dropdown({
		coverTrigger:false
	});
	
	particlesJS.load('particles-js', '../particles.json', function() {
	  console.log('callback - particles.js config loaded');
	});

	wordAnimation("#mainTitle h1", 1, 0.2);
	wordAnimation("#mainTitle h3", 1, 0.2);
});