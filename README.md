This project uses React, JavaScript, React Router, and the Flickr API to create a dynamic one page website. The page renders and routes users to a gallery of 24 images of rainbows. Users then have the option to click on either of three links at the top of the page to populate the gallery with images of those things (rainbows, dogs, waterfalls). The images are loaded into an array when the page is initially loaded, so clicking back between them will show the same images until the page is reloaded. The user also has the option to enter a search query in the search box. When a query is entered, a call is made to the Flickr API that yields 24 images corresponding to the user's search. 