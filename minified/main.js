
  function expandToggle(){
    var projectState = document.getElementById('projectCellsHolder');

    if (projectState.style.display == 'block') {
      //Hidden
      document.getElementById('projectCellsHolder').style.display = 'none';
    }else {
      //Showing
      document.getElementById('projectCellsHolder').style.display = 'block';
    }
  };
