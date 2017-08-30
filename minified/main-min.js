function selectProject(e){var a=getProjectData(e.id);$("#skillsContainer").empty(),$.each(a.skills,function(e,a){$("#skillsContainer").append('<div class="chip animated fadeInRight">'+a+"</div>")}),$("#project-description").empty(),$.each(a.description,function(e,a){$("#project-description").append('<p class="animated fadeInUp">'+a+"</p>")}),$("#project-panel").empty(),$.each(a.images,function(e,t){"minApp"==a.id?($("#project-panel").append('<a id="minPic'+e+'" class="minApp animated fadeInLeft waves-effect waves-light modal-trigger" href="#modal'+e+'"> <img class="hoverable responsive-img z-depth-1" src="images/'+t+'"></a>'),$(".panel1").append('<div id="modal'+e+'" class="modal"><div id="modalImg'+e+'" class="imgContainer"></div></div>'),$("#modalImg"+e).css({"background-image":"url(images/"+t+")"}),document.getElementById("minPic"+e).onclick=function(){openModal(e)}):"godp"==a.id?($("#project-panel").append('<a id="minPic'+e+'" class="godp hoverable animated fadeInLeft waves-effect waves-light modal-trigger" href="#modal'+e+'"> <img class="responsive-img z-depth-1" src="images/'+t+'"></a>'),$(".panel1").append('<div id="modal'+e+'" class="modal"><div id="modalImg'+e+'" class="imgContainer"></div></div>'),$("#modalImg"+e).css({"background-image":"url(images/"+t+")"}),document.getElementById("minPic"+e).onclick=function(){openModal(e)}):"lvlDesign"==a.id?($("#project-panel").append('<a id="minPic'+e+'" class="lvlDesign hoverable animated fadeInLeft waves-effect waves-light modal-trigger" href="#modal'+e+'"> <img class="hoverable responsive-img z-depth-1" src="images/'+t+'"></a>'),$(".panel1").append('<div id="modal'+e+'" class="modal"><div id="modalImg'+e+'" class="imgContainer"></div></div>'),$("#modalImg"+e).css({"background-image":"url(images/"+t+")"}),document.getElementById("minPic"+e).onclick=function(){openModal(e)}):console.log("error in data loading")})}function getProjectData(e){var a={};switch(e){case"minApp":a=projectData[0];break;case"godp":a=projectData[1];break;case"lvlDesign":a=projectData[2];break;default:console.log("error in getProjectData")}return a}function getPath(e){console.log(e)}function openModal(e){$("#modal"+e).modal().modal("open")}function isScrolledIntoView(e){var a=e.getBoundingClientRect().top,t=e.getBoundingClientRect().bottom;return a>=0&&t<=window.innerHeight}var projectData=[{id:"minApp",title:"Pocket Mineral Guide",projectRole:"Lead Developer",skills:["Javascript (ES6)","Meteor","React","MongoDB","Material-UI"],description:["-Mineral education app currently available in both android and iOS stores.","-Contains over 1500 unique minerals with high definition pictures.","-Can be used to actually identify a mineral in hand!","-Written in ES6 using the meteor platform to make the app available for Android and iOS stores.","-Leveraged reactJS’s component reusability and top down data-flow to efficiently write the app."],images:["minID1.png","minID2.png","minID3.png"]},{id:"godp",title:"Graduation Outcome Data Processing",projectRole:"Lead Developer",skills:["Javascript","Bootstrap","SCSS","PHP","MySql"],description:["-Browser based intranet application with a full front to back end system.","-This system is meant to be used by a school's career services departments to edit, maintain and generate graphs for student outcomes.","-These outcomes would be submitted to organizations such as NACE or USNews for their college statistics","-Talked with stakeholders regularly to make sure the product was aligned with the original scope of the project","-Used Bootstrap and jQuery on the front end","-Created middleware using PHP","-Archtected MySql database and generated large set of testing data"],images:["godpHome.png","godpEditing.png","godpDash.png"]},{id:"lvlDesign",title:"Graduation Outcome Data Processing",projectRole:"Lead Developer",skills:["Unreal Engine","Unreal Script","C++"],description:["-Designed the landscape and atmosphere of a level in the Unreal Engine","-Created events and interactions throughout the level using Unreal Script","-Applied dynamic shadows based on the location and color of the lighting"],images:["FirstLevel01.png","FirstLevel02.png","FirstLevel03.png","FirstLevel05.png"]}];$("#project-menu > div").click(function(){selectProject(this)}),$("#project-panel > img").click(function(){selectProject(this)}),$(function(){$.scrollify({section:".panel",offset:0,scrollbars:!1,before:function(e,a){var t=a[e].attr("data-section-name");$(".active").removeClass("active"),$("li").find('a[href="#'+t+'"]').parent().addClass("active")},afterRender:function(){var e='<div class="navbar-fixed"> <nav> <div class="nav-wrapper"> <a href="#home" class="brand-logo">J.R. Dev</a> <a href="#" data-activates="mobile-menu" class="button-collapse"><i class="material-icons">menu</i></a><ul class="right hide-on-med-and-down page">',a='<ul class="side-nav" id="mobile-menu">',t="";$(".panel").each(function(){t="",-1!=$(location).attr("href").search($(this).attr("data-section-name"))?t="active":"http://localhost:3000/"===$(location).attr("href")&&"home"==$(this).attr("data-section-name")&&(t="active"),e+='<li class="'+t+'"><a href="#'+$(this).attr("data-section-name")+'"><span class="hover-text">'+$(this).attr("data-section-name").charAt(0).toUpperCase()+$(this).attr("data-section-name").slice(1)+"</span></a></li>",a+='<li class=" "><a href="#'+$(this).attr("data-section-name")+'"><span class="hover-text">'+$(this).attr("data-section-name").charAt(0).toUpperCase()+$(this).attr("data-section-name").slice(1)+"</span></a></li>"}),e+="</ul></div></nav></div>",a+="</ul>",totalNav=e+a,$(".home").before(totalNav),$("li a").on("click",function(){$.scrollify.move($(this).attr("href"))})}})}),$(window).resize("resize",function(e){clearTimeout(a);var a=setTimeout(function(){window.location.reload()},100)});