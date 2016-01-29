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

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

function scrollToY(scrollTarget) {
    // scrollTargetY: the target scrollY property of the window
    // speed: time in pixels per second
    // easing: easing equation to use
    var ele = document.getElementById(scrollTarget),
    position = ele.getBoundingClientRect(),
    y = position.top,
    scrollY = 0,
    scrollTargetY = y ,
    speed = speed || 1000,
    easing = easing || 'easeInOutSine',
    currentTime = 0;


    // min time .1, max time .8 seconds
    var time = Math.max(0.5, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.5));

    // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
    var PI_D2 = Math.PI / 2,
        easingEquations = {
            easeOutSine: function (pos) {
                return Math.sin(pos * (Math.PI / 2));
            },
            easeInOutSine: function (pos) {
                return (-0.5 * (Math.cos(Math.PI * pos) - 1));
            },
            easeInOutQuint: function (pos) {
                if ((pos /= 0.5) < 1) {
                    return 0.5 * Math.pow(pos, 5);
                }
                return 0.5 * (Math.pow((pos - 2), 5) + 2);
            }
        };

    // add animation loop
    function tick() {
        currentTime += 1 / 60;

        var p = currentTime / time;
        var t = easingEquations[easing](p);

        if (p < 1) {
            requestAnimFrame(tick);

            window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
        } else {
            console.log('scroll done');
            window.scrollTo(0, scrollTargetY);
        }
    }
    // call it once to get started
    tick();
}
