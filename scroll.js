var scrolling = false;
var scrolldelay;

function pageScroll() {
  if (!scrolling) {
    return;
  }

  window.scrollBy(0, 2);
  scrolldelay = setTimeout(pageScroll, 65);
}

function stopScroll() {
  scrolling = false;
  clearTimeout(scrolldelay);
  window.scrollBy(0, 0);
}

function startScroll() {
  scrolling = true;
  pageScroll();
}

function keyboardStopPageScroll() {
  clearTimeout(scrolldelay);
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
    startScroll();
  }
});
// on RIGHT ➡︎ key keypress, scroll down or increase speed
document.addEventListener('keydown', function(event) {
  if (event.keyCode == 39) {
    startScroll();
  }
});