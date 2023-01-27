#  Global RSS News Reader App
https://news.un.org/en/rss-feeds

## Table of Contents
- [Overview](#overview)
- [Code Explanation](#code-explanation)
- [Optimization](#optimization)

## Overview

- This project displays news articles from different regions.
- The latest news articles are displayed at the top of the UI.
- This is managed and dynamically displayed using the loadRegions.js file. 


## Code Explanation

The loadRegions.js file contains the main logic for this project. It starts by defining an object named urls, which contains the RSS feed URLs for different regions.

When a button is clicked, the corresponding event listener calls the loadRegion() function, passing in the id of the button that was clicked. The loadRegion() function uses the id to look up the appropriate RSS feed URL from the urls object.
The function then uses the fetch() method to retrieve the RSS feed. The res.text() method is then used to convert the RSS feed into a string.

The XML string is parsed into a DOM object using the DOMParser() object. The function loops through each item in the feed, creating HTML elements for the date, title, main paragraph, image, and link of each article. These elements are then appended to the output element on the page.

## Optimization
I recently consolidated all RSS logic into this particular loadRegion() function, resulting in smaller project size and a single script file to handle data from any region.


My goal is to create something similar to a social media news feed with simple auto scrolling features. 
I made this so I can go through all of my news in the morning hands-free while drinking coffee and getting to plan my day out at the same time without interruption.

Been enjoying quite a lot so far.
