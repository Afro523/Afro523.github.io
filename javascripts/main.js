var toggleArray = document.getElementsByClassName('toggleable');
var arrayLength = toggleArray.length;



  function expandToggle(){
    var projectState = document.getElementById('projectCellsHolder');
    var aboutMeState = document.getElementById('aboutParagraph');

    if (projectState.style.display == 'block') {
      //Set To Hidden
      document.getElementById('projectCellsHolder').style.display = 'none';
    }else {
      //Set to Showing
      document.getElementById('projectCellsHolder').style.display = 'block';

      if (aboutMeState.style.display != 'none'){
        aboutMeState.style.display = 'none';
      }
    }

  };

  //Just have to be sure to put the # of the header within the function call
  function toggleController(headerClicked){

    var openedInt = 0;

    //Turn everything Off
    for (i = 0; i <= arrayLength; i++){
      toggleArray[i].style.display = 'none';
      if (headerClicked == i ) {
        toggleArray[i].style.display = 'block';
        openedInt = i;
      }
    }
  };
