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