let scrolldelay;

function pageScroll() {
  window.scrollBy(0, 2); // x and y scroll values
  scrolldelay = setTimeout('pageScroll()', 65); // scrolls every 65 milliseconds
}

function stopScroll() {
  clearTimeout(scrolldelay);
  window.scrollBy(0, 0);
  if (window.scrollY > 0) {
    scrolldelay = setTimeout('stopScroll()', 0);
  } else {
    clearTimeout(scrolldelay);
  }   
}

function keyboardStopPageScroll() {

  clearTimeout(scrolldelay);
  window.scrollBy(0, 0);
  if (window.scrollY > 0) {
    scrolldelay = setTimeout('stopScroll()', 0);
  } else {
    clearTimeout(scrolldelay);
  } 
}
function topFunction() {
  
  document.documentElement.scrollTop = 0;
  keyboardStopPageScroll();
} 

//BACK TO TOP KEYBOARD SHORTCUTS
// on UP⬆︎ key keypress, scroll up to the top of the page
document.addEventListener('keydown', function(event) {
  if (event.keyCode == 38) {
    topFunction();
    keyboardStopPageScroll();
  }
});
// on LEFT ⬅︎ key keypress, stop scrolling COMPLETELY ////////
document.addEventListener('keydown', function(event) {
  if (event.keyCode == 37) {
    stopScroll();
    keyboardStopPageScroll();
  }
});

// SCROLL DOWN KEYBOARD SHORTCUTS
// on DOWN ⬇︎ key keypress, scroll down or increase scroll speed 
document.addEventListener('keydown', function(event) {
  if (event.keyCode == 40) {
    pageScroll();
  }
});
// on RIGHT ➡︎ key keypress, scroll down or increase speed
document.addEventListener('keydown', function(event) {
  if (event.keyCode == 39) {
    pageScroll();
  }
});