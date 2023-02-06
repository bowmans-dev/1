const urls = {
  "africa" : "https://news.un.org/feed/subscribe/en/news/region/africa/feed/rss.xml",
  "americas" : "https://news.un.org/feed/subscribe/en/news/region/americas/feed/rss.xml",
  "asia" : "https://news.un.org/feed/subscribe/en/news/region/asia-pacific/feed/rss.xml",
  "europe" : "https://news.un.org/feed/subscribe/en/news/region/europe/feed/rss.xml",
  "middle-east" : "https://news.un.org/feed/subscribe/en/news/region/middle-east/feed/rss.xml"
}

const output = document.querySelector('output');

document.getElementById("africa").addEventListener("click", function (event) {

  output.innerHTML = ""; // Clear output element
  loadRegion(event.target.id);
});

document.getElementById("americas").addEventListener("click", function (event) {
  output.innerHTML = "";
  loadRegion(event.target.id);
});

document.getElementById("asia").addEventListener("click", function (event) {
  output.innerHTML = "";
  loadRegion(event.target.id);
});

document.getElementById("europe").addEventListener("click", function (event) {
  output.innerHTML = "";
  loadRegion(event.target.id);
});

document.getElementById("middle-east").addEventListener("click", function (event) {
  output.innerHTML = "";
  loadRegion(event.target.id);
});


const loadRegion = (key) => {

  const output = document.querySelector('output');
  
  let url = urls[key];

  fetch(url).then((res) => {

    res.text().then((xmlTxt) => {
      
      // Parse XML string into DOM object and loop through each item in the feed
      let doc = new DOMParser().parseFromString(xmlTxt, 'text/xml');

      doc.querySelectorAll('item').forEach((item) => {
       
        // display date of article
        let date = document.createElement('p');
        date.textContent = item.querySelector('pubDate').textContent;
        date.textContent = date.textContent.slice(4, 12);
        date.classList.add("date");
    
        // display title of article
        let h1 = document.createElement('h1');
        h1.textContent = item.querySelector('title').textContent;
    
        // create a link to the article
        let link = document.createElement('a');
        link.setAttribute('href', item.querySelector('link').textContent);
        link.textContent = "";
        link.classList.add("link");
        output.appendChild(link);
        
        // get image from article
        let imageURL = document.createElement('img');
        imageURL.setAttribute('src', item.querySelector('enclosure').getAttribute('url'));
        imageURL.classList.add("image");
        imageURL.classList.add("fade-in-on-load");
        
        // if image is not found, hide it
        imageURL.onerror = function() {
          imageURL.style.display = "none";
        }
        
        // display main paragraph main article
        let p = document.createElement('p');
        p.textContent = item.querySelector('description').textContent;
        
        // put the h1 inside of the link
        link.appendChild(h1);
        //put the date inside of the link
        link.appendChild(date);
        // display the image outside of the link
        link.appendChild(imageURL);
        //put the paragraph inside of the link
        link.appendChild(p);
        
        // create a line break separating each article
        let hr = document.createElement('hr');
        output.appendChild(hr);     
    
      });
    });
  });
};
