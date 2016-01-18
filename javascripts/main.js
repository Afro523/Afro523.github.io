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
