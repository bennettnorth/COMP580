**Welcome to our COMP 580 Project - Mathy Bird.** 

Our game is a modified version of Flappy Bird that includes simple math questions. Users advance and accrue points by selecting the right answer to the questions provided before the bird passes through the selected number of pipes. 

We constructed this game with the intention of making Flappy Bird accessible for people with motor impairments.

The game is based on the popular tutorial filmed by [Coding Challenge #31: Flappy Bird](https://www.youtube.com/watch?v=cXgA1d_E-jY) and is adapted from [The Coding Train's Flappy Bird Clone](https://github.com/CodingTrain/Flappy-Bird-Clone).  We did all of our programming in JavaScript, using Visual Studio Code.

**Libraries Used:**

Mathy Bird makes use of jQuery and p5.js JavaScript libraries.

jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax. It is free, open-source, and available [here](https://jquery.com/). 

p5.js is a JavaScript library for creative coding, with a focus on making coding accessible and inclusive for artists, designers, educators, and beginners. It is free, open-source, and available [here](https://p5js.org/download/).


**How to Build and Deploy it:** 

* Follow this link to the source code for our game: https://github.com/CodingTrain/Flappy-Bird-Clone
* Follow this link to the tutorial on which our game is loosely based: https://www.youtube.com/watch?v=cXgA1d_E-jY
* Follow this link to deploy our game: https://bennettnorth.github.io/ 

**Problems Encountered:**

The first obsticle we encountered was learning to use the p5.js library with which our source code had been created. No members of our group had any experience with p5.js, so we had to learn about its foundational logic, the design features it provides, and its interaction with the DOM. However, it turned out to be a very intuitive library to work with once we became familiar with it. 

We encountered problems when trying to figuring out how to make the bird fly without a user continuously pressing the SPACEBAR. It was simple to remove the need for user input, but took a little time to create a flight path for the bird. Eventually, we were able to simplify this task by keeping the pipes at a constant height and ensuring the bird did not pass certain boundaries unless the user failed to answer a question in the provided amount of time or answered a question incorrectly.

There were a number of difficulties surrounding the implementation of questions for the user. Originally we had hoped to find a database with different types of premade questions, but we were unable to do so. Instead, we were forced to generate our own questions by creating a formula that could be filled in with random numbers and arithmetic operations to generate random arithmetic questions. Generating our questions in this way required us to account for certain problem cases. For example, we realized that we would need to narrow the range and complexity of the questions we asked, because failing to do so would prevent the user from answering the question quickly enough.  We also realized that in cases of division and, more surprisingly, when generating random answers to our questions, we would have to avoid using zeros, because doing so often led to indeterminate and/or wrong answers. Fianlly, we made sure to avoid fractions in division cases in order to save the user from having to calculate decimal quotients.

We also did not realize p5.js was not compatible with the use of the TAB and ENTER keys to select buttons on a page.  We used jQuery to handle user cases that did not include mouse presses and integrated the p5.js and jQuery libraries as seemlessly as possible in our code. 

Lastly, we had hoped to add different customization options that would allow users to choose between different themes for the game (e.g. having a Baby Yoda hop between lightsabers in front of an outer space background).  We assumed that by swapping png files in our game, we could easily make this happen.  However, it turns out the pictures used to create the background and pipes required specifically sized files in order to avoid being pixelated. We were also unable to get the bird file to change immediately upon choosing a theme.  Each time a user chose a theme, the game had to be restared twice before the image of the bird was replaced with the correct image. In light of these difficulties, we decided to do away with the ability to choose particular themes altogether.
 
**Future work:**

As is, our game provides a great framework on which one might add a number of further customization and accessibility options. 

We could implement features for those with visual impairments by including sound and screen reader compatibilities. Unlike Flappy Bird, our game does not require users to be able to see the path on which the bird is flying. If we were able to convey the question to someone acoustically, they could answer the question, and the bird would successfully travel through the pipes without the need for visually judgements.

It would be possible to expand the difficulty and types of math questions available to users. For instance, we could add questions that test pattern and/or shape recognition and allow for users to test more than simply arithmetic skill and capacity. Such changes would make the game more insteresting and effective as a teaching tool.

We could also, for aesthetic purposes, make the bird’s flight path more complex. Rather than having the bird continue on a straight line along the x-axis, we could program the bird to follow a more sinusoidal path. We could even attempt to make the bird automatically adjust its flight pattern to account for dynamic instanciations of pipes. Doing something along these lines would give Mathy Bird a spirit nearer to that of the original version of Flappy Bird we all know and love.

Our game will continue to be hosted live on Github’s servers for individuals around the world to play. Mathy Bird is fun for everyone and the perfect way to spend an afternoon. We hope that others will enjoy our game and continue to improve upon the accessibility features we have provided.
