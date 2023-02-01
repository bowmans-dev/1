function topFunction() {
  
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  stopScroll();
} 

function pageScroll() {
  window.scrollBy(0,1);
  scrolldelay = setTimeout(pageScroll,30);
}

function stopScroll() {
  clearTimeout(scrolldelay);
}


// SCROLL DOWN 
  // on down key keypress, scroll down or increase scroll speed 
  document.addEventListener('keydown', function(event) {
    if (event.keyCode == 40) {
      pageScroll();
    }
  });
  // on right key keypress, scroll down or increase speed
  document.addEventListener('keydown', function(event) {
    if (event.keyCode == 39) {
      pageScroll();
    }
  });


//BACK TO TOP
// on up key keypress, scroll up to the top of the page
document.addEventListener('keydown', function(event) {
  if (event.keyCode == 38) {
    topFunction();
  }
});
// on left key keypress, scroll to the top of the page
document.addEventListener('keydown', function(event) {
  if (event.keyCode == 37) {
    topFunction();
  }
});