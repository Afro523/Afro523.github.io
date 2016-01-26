var toggleArray = document.querySelectorAll(".toggleable");
//var toggleArray = document.getElementsByClassName('toggleable');
var arrayLength = toggleArray.length;

//Just have to be sure to put the # of the header within the function call
function toggleController(headerClicked){
  var openedInt = 0;
  //Turn everything Off
  try {
    for (i = 0; i <= arrayLength; i++){
      toggleArray[i].style.display = "none";
        if (headerClicked == i ) {
          toggleArray[i].style.display = "block";
          openedInt = i;
        }
    }
  } catch (e) {
    }
  };

function scrollStart(element) {

  try {
    window.scroll(0,findPos(document.getElementById('projectsPreview')));


    var ele = document.getElementById(element);
    console.log(ele.offsetTop);
    window.scrollTo(0, ele.offsetTop);

  } catch (e) {
    console.log(e.message);
    console.log(e.name);
  }
}

function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
}
