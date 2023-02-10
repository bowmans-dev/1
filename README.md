### An RSS feed aggregator/ reader. 
### Displays news articles from the United Nations (UN) website, filtered by region: Africa, Americas, Asia Pacific, Europe, and Middle East.

#### Code Explained:
##### Each button triggers a loadRegion function. The loadRegion function uses the fetch API to retrieve an XML file from the UN's website, corresponding to the selected region. The XML file is then parsed into a DOM object and processed to extract the information needed to display the articles, such as the article's title, date, and a link to the full article. The extracted information is then used to create HTML elements and added to the output section.
