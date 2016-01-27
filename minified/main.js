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
    var ele = typeof element === "string" ? document.getElementById(element) : element;
    var DistanceNeededY = ele.offsetTop * 0.80;

    //Experimental
    var scrollStep = Math.PI / (1000/15),
    cosParameter = DistanceNeededY /2;

    console.log('scrollStep = ' + scrollStep);
    console.log('cosParameter = ' + cosParameter);

    var scrollCount = 0,
        scrollMargin,
        scrollInterval = setInterval( function() {
          if (DistanceNeededY != 0) {
            scrollCount = scrollCount + 1;
            scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
            window.scrollTo( 0, ( DistanceNeededY - scrollMargin ) );
            console.log('DistanceNeededY = ' + DistanceNeededY);
            console.log('scrollCount = ' + scrollCount);
            console.log('scrollMargin = ' + scrollMargin);
            console.log('scrollInterval = ' + scrollInterval);
            console.log('scrollCount = ' + scrollCount);
          } else {
            clearInterval(scrollInterval);
          }
        }, 15);

  //  window.scrollTo(0, ele.offsetTop * 0.75);


}
