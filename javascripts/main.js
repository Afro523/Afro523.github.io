
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

  function toggleController(){
    var toggleArray[] = document.getElementsByClassName('toggleable');
    var arrayLength = toggleArray.length;

    //Turn everything Off
    for (x; x <= arrayLength; x++){
      toggleArray[x].style.display = 'none';
    }
  };
