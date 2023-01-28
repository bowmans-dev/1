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

const loadRegion = (key) => {

  let url = urls[key];

  fetch(url).then((res) => {
    
    res.text().then((xmlTxt) => {

      // Parse XML string into DOM object and loop through each item in the feed
      let doc = new DOMParser().parseFromString(xmlTxt, 'text/xml');
      doc.querySelectorAll('item').forEach((item) => {

        // display date of article
        let date = document.createElement('p');
        date.textContent = item.querySelector('pubDate').textContent;
        //remove the time from the date
        date.textContent = date.textContent.slice(0, 16);
        date.classList.add("date");
        document.querySelector('output').appendChild(date);

        // display title of article
        let h1 = document.createElement('h1');
        h1.textContent = item.querySelector('title').textContent;
        document.querySelector('output').appendChild(h1);
        
        // display main paragraph main article
        let p = document.createElement('p');
        p.textContent = item.querySelector('description').textContent;
        document.querySelector('output').appendChild(p);

        // get image from article
        let imageURL = document.createElement('img');
        imageURL.setAttribute('src', item.querySelector('enclosure').getAttribute('url'));
        imageURL.classList.add("image");
        document.querySelector('output').appendChild(imageURL);

        //display link to article and open in a new tab 
        let link = document.createElement('a');
        link.setAttribute('href', item.querySelector('link').textContent);
        link.setAttribute('target', '_blank');
        link.textContent = item.querySelector('link').textContent;
        link.classList.add("link");
        document.querySelector('output').appendChild(link);  

        //display line break
        let hr = document.createElement('hr');
        document.querySelector('output').appendChild(hr);
      });
    });
  });
}
