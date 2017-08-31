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
		title:"Graduation Outcome Data Processing",
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
		title:"Graduation Outcome Data Processing",
		projectRole:"Lead Developer",
		skills:["Unreal Engine", "Unreal Script", "C++"],
		description:["-Designed the landscape and atmosphere of a level in the Unreal Engine",
					"-Created events and interactions throughout the level using Unreal Script",
					"-Applied dynamic shadows based on the location and color of the lighting"],
		images:["FirstLevel01.png", "FirstLevel02.png", "FirstLevel03.png", "FirstLevel05.png"]
	}
];

//Project Data Loading
$( "#project-menu > div" ).click( function(){selectProject(this)});
$( "#project-panel > img" ).click( function(){selectProject(this)});
function selectProject(obj) {
	//reference projectData
	var projectData =  getProjectData(obj.id);

	// Empty Skills Container
	$( "#skillsContainer").empty();

	//Repopulate for each skill in array of skills
	$.each((projectData.skills), function(index, value){
		$("#skillsContainer").append("<div class=\"chip animated fadeInRight\">"+value+"</div>");
	});

	//Empty description and append with new one
	$("#project-description").empty();
	$.each((projectData.description), function(index, value){
		$("#project-description").append("<p class=\"animated fadeInUp\">"+value+"</p>");
	});

	$("#project-panel").empty();
	$.each((projectData.images), function(index, value){
		if(projectData.id == "minApp"){
			$("#project-panel").append("<a id=\"minPic"+index+"\" class=\"col s4 animated fadeInLeft waves-effect waves-light modal-trigger\" href=\"#modal"+index+"\"> <img class=\"hoverable responsive-img z-depth-1\" src=\"images/"+value +"\"></a>");	
			$(".panel1").append("<div id=\"modal"+index+"\" class=\"modal\"><div id=\"modalImg"+index+"\" class=\"imgContainer\"></div></div>")
			$("#modalImg"+index).css({"background-image": "url(images/"+value+")" });
			document.getElementById("minPic"+index).onclick = function(){
    			openModal(index);
				}
		} else if(projectData.id == "godp"){
			$("#project-panel").append("<a id=\"minPic"+index+"\" class=\"col s6 animated fadeInLeft waves-effect waves-light modal-trigger\" href=\"#modal"+index+"\"> <img class=\"hoverable responsive-img z-depth-1\" src=\"images/"+value +"\"></a>");	
			$(".panel1").append("<div id=\"modal"+index+"\" class=\"modal\"><div id=\"modalImg"+index+"\" class=\"imgContainer\"></div></div>")
			$("#modalImg"+index).css({"background-image": "url(images/"+value+")" });
			document.getElementById("minPic"+index).onclick = function(){
    			openModal(index);
				}
			if(index === 2){
				$("#minPic2").addClass("offset-s3");
			}
		} else if(projectData.id == "lvlDesign"){
			$("#project-panel").append("<a id=\"minPic"+index+"\" class=\"col s6 animated fadeInLeft waves-effect waves-light modal-trigger\" href=\"#modal"+index+"\"> <img class=\"hoverable responsive-img z-depth-1\" src=\"images/"+value +"\"></a>");	
			$(".panel1").append("<div id=\"modal"+index+"\" class=\"modal\"><div id=\"modalImg"+index+"\" class=\"imgContainer\"></div></div>")
			$("#modalImg"+index).css({"background-image": "url(images/"+value+")" });
			document.getElementById("minPic"+index).onclick = function(){
    			openModal(index);
				}
			if(index === 1 || index === 3){
				$("#minPic"+index).wrap("<div class=\"row\">");
				
			}
		} else {
			console.log("error in data loading");
		}
	});
}

//Scrolling and pagination
$(function() {
	$.scrollify({
		section:".panel",
		offset:0,
		scrollbars:false,
		before:function(i,panels) {

			var ref = panels[i].attr("data-section-name");
			$(".active").removeClass("active");

			$("li").find("a[href=\"#" + ref + "\"]").parent().addClass("active");
		},
		afterRender:function() {
			//Start of navbar
			var pagination = "<div class=\"navbar-fixed\"> <nav> <div class=\"nav-wrapper\"> <a href=\"#home\" class=\"truncate brand-logo\">Joshua Resnick Dev</a> <a href=\"#\" data-activates=\"mobile-menu\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a><ul class=\"right hide-on-med-and-down page\">";
			var sideNav = "<ul class=\"side-nav\" id=\"mobile-menu\">";
			var activeClass = "";

			//Build Navbar based on sections in index.html
			$(".panel").each(function() {
				activeClass = "";
				//applies active class to current panel
				var string = $(location).attr('href');
				if(string.search($(this).attr("data-section-name")) != -1) {
					activeClass = "active";
				} else if ($(location).attr('href') === "http://localhost:3000/" && $(this).attr("data-section-name") == "home"){
					activeClass = "active";
				}
				pagination += "<li class=\"" + activeClass + "\"><a href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
				sideNav += "<li class=\" \"><a href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
			});

			pagination += "</ul></div></nav></div>";
			sideNav += "</ul>";
			totalNav = pagination + sideNav;
			//Attach Navbar (pagination) to home class
			$(".home").before(totalNav);
			//Add event handler to nav links
			$("li a").on("click",function() {
				$.scrollify.move($(this).attr("href"));
			});
		}
	});
});

//UTILITY FUNCTIONS

//Simple Switch to get appropriate array of data
function getProjectData(id){
	var data = {};
	switch (id) {
	case "minApp":
		data = projectData[0];
		break;
	case "godp":
		data = projectData[1];
		break;

	case "lvlDesign":
		data = projectData[2];
		break;

	default:
		console.log("error in getProjectData");
	}

	return data;
}

function getPath(incPath){
	console.log(incPath);
}

//Opening Modal
function openModal(index){
	$("#modal"+index).modal().modal('open');
}

//Simple check to see element is visible
function isScrolledIntoView(el) {
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;

    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}

$(window).resize('resize', function(event) {
  clearTimeout(resizeTimeout);
  var resizeTimeout = setTimeout(function(){
    window.location.reload();
  }, 100);
});
