**Welcome to our COMP 580 Project - Mathy Bird.** 

This game is a version of Flappy Bird that has been modified so the bird flaps through the pipes by giving the correct answer to simple math questions. Users advance and accrue points by selecting the right answer to the math questions provided before the bird passes through the selected number of pipes. 

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

As is, our game provides a great framework on which one might add a number of further customization and accessibility options. 

We could implement features for those with visual impairments by including sound and screen reader compatibility. Unlike like with Flappy Bird, our game does not require users to be able to see the path on which the bird is flying. If we were able to convey the question to someone acoustically, they could answer the question, and the bird would successfully travel through the pipes without the need for visually judgements.

It would be possible to expand the difficulty and types of math questions available to users. For instance, we could add questions that test pattern and/or shape recognition and allow for users to test more than simply arithmetic skill and capacity. Such changes would make the game more insteresting and effective as a teaching tool.

We could also, for aesthetic purposes, make the bird’s flight path more complex. Rather than having the bird continue on a straight line along the x-axis, we could program the bird to follow a more sinusoidal path. We could even attempt to make the bird automatically adjust its flight pattern to account for dynamic instanciations of pipes. Doing something along these lines would give Mathy Bird a spirit nearer to that of the original version of Flappy Bird we all know and love.

The game will continue to be hosted live on Github’s servers for individuals around the world to play. Mathy Bird is fun for everyone and the perfect way to spend an afternoon. We hope that others will enjoy our game and continue to improve upon the accessibility features we have provided.
