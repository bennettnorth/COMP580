Welcome to our COMP 580 Project - Mathy Bird. 

This game is a version of Flappy Bird that has been modified so the bird flaps through the pipes by giving the correct answer to simple math questions. Users advance and accrue points by selecting the right answer to the given math question before the bird passes through the selected number of pipes. 

We constructed this game with the intention of making Flappy Bird accessible for people with motor impairments.

The game is based on the popular tutorial filmed by [Coding Challenge #31: Flappy Bird](https://www.youtube.com/watch?v=cXgA1d_E-jY), and our game, specifically, is adapted from [The Coding Train's Flappy Bird Clone](https://github.com/CodingTrain/Flappy-Bird-Clone).  We did all of our programming in JavaScript, using Visual Studio Code.

**Libraries Used:**
Mathy Bird makes use of jQuery and p5.js JavaScript libraries.

jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax. It is free, open-source software, and available [here](https://jquery.com/). 

p5.js is a JavaScript library for creative coding, with a focus on making coding accessible and inclusive for artists, designers, educators, and beginners. It is free, open-source, and available [here](https://p5js.org/download/).


**How to Build and Deploy it:** 


* Follow this link to the source code for our game: https://github.com/CodingTrain/Flappy-Bird-Clone
* Follow this link to the tutorial on which our game is loosely based: https://www.youtube.com/watch?v=cXgA1d_E-jY
* Follow this link to deploy our game: https://bennettnorth.github.io/ 

**Problems Encountered:**
Our first obstacle about p5.js, but it was pretty intuitive once we got things rolling
Figuring out how we were going to make the bird fly on its own
We had to simplify the game by keeping the pipes at a constant height
Wanted to do different types of math questions and couldn’t find a database of premade questions, so we had to generate our own
To resolve the issues we faced with making our own questions, we had to narrow the scope of the range and complexity of arithmetic questions we asked
Have to avoid zeros → they made everything more difficult
Used some hacky methods to create answer choices
Fractions were a headache so we avoided generating any questions with decimal products
We did not realize p5.js was not compatible with tabbing and entering to select buttons on a page, so we had to come up with some creative ways around this limitation.
Another one of our goals was to add customization options because we thought we could easily swap png files in our game
Turns out, wasn’t so easy because we need specifically sized files in order for it to look good (not pixelated)
Could only get the pipes and bird to look good, so we left users with only a Baby Yoda option (we figured it would be the most appreciated)
However, I couldn't figure out how to get the bird file to change immediately (sometimes takes starting a new game twice)
 
**Future work:**
We have a great framework to add more accessibility options
We could spend time adding sound and screen reader compatibility for those with visual impairments
Add different genres of math questions like we originally hoped to do -- for now, it is perfect for our target user
Giving users an option to increase the range of complexity of math questions would be something to look into as a starter
Make the bird’s flight more complex
Spend more time on re-making the pipes dynamic and the bird automatically adjusts its flight path to make it look more like a real game of flappy bird
The game will continue to be hosted live on Github’s servers for individuals around the world to play. Mathy Bird is fun for pretty much everyone and the perfect way to spend an afternoon.
