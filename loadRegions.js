const urls = {
  "africa-button" : "https://news.un.org/feed/subscribe/en/news/region/africa/feed/rss.xml",
  "americas-button" : "https://news.un.org/feed/subscribe/en/news/region/americas/feed/rss.xml",
  "asia-button" : "https://news.un.org/feed/subscribe/en/news/region/asia-pacific/feed/rss.xml",
  "europe-button" : "https://news.un.org/feed/subscribe/en/news/region/europe/feed/rss.xml",
  "middle-east-button" : "https://news.un.org/feed/subscribe/en/news/region/middle-east/feed/rss.xml"
}

document.getElementById("africa-button").addEventListener("click", function (event) {
  document.querySelector('output').innerHTML = ""; // Clear output element
  loadRegion(event.target.id);
});

document.getElementById("americas-button").addEventListener("click", function (event) {
  document.querySelector('output').innerHTML = ""; // Clear output element
  loadRegion(event.target.id);
});

document.getElementById("asia-button").addEventListener("click", function (event) {
  document.querySelector('output').innerHTML = ""; // Clear output element
  loadRegion(event.target.id);
});

document.getElementById("europe-button").addEventListener("click", function (event) {
  document.querySelector('output').innerHTML = ""; // Clear output element
  loadRegion(event.target.id);
});

document.getElementById("middle-east-button").addEventListener("click", function (event) {
  document.querySelector('output').innerHTML = ""; // Clear output element
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
        
        
        // create a space for the voiceover to read out a long pause between articles 
        let space = document.createElement('p');
        space.textContent = `.,      ...`;
        space.classList.add("space");
        
        
        // display title of article
        let h1 = document.createElement('h1');
        h1.textContent = item.querySelector('title').textContent;
        output.appendChild(h1);
        
        output.appendChild(space);     
        
        // get image from article
        let imageURL = document.createElement('img');
        imageURL.setAttribute('src', item.querySelector('enclosure').getAttribute('url'));
        imageURL.classList.add("image");
        output.appendChild(imageURL);
        
        // display date of article
        let date = document.createElement('p');
        date.textContent = item.querySelector('pubDate').textContent;
        date.textContent = date.textContent.slice(4, 12);
        date.classList.add("date");
        output.appendChild(date);
        
        // display main paragraph main article
        let p = document.createElement('p');
        p.textContent = item.querySelector('description').textContent;
        output.appendChild(p);
        

        let link = document.createElement('a');
        link.setAttribute('href', item.querySelector('link').textContent);
        link.textContent = "";
        link.classList.add("link");
        output.appendChild(link);
        output.appendChild(space);

      });
    });
  });
}