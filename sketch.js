// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/cXgA1d_E-jY

// P5 exported functions (eslint flags)
/* exported preload, setup, draw, keyPressed */

// Exported sprites (eslint flags)
/* exported birdSprite, pipeBodySprite, pipePeakSprite */

var bird;
var pipes;
var parallax = 0.8;
var score = 0;
var maxScore = 0;
var birdSprite;
var pipeBodySprite;
var pipePeakSprite;
var bgImg;
var bgX;
var gameoverFrame = 0;
var isOver = false;

var touched = false;
var prevTouched = touched;

var count = 0;
var startTheGame = false;

var goToSettings = false;

var gameFrameCount = 0;

var userAnswer = false;

var correctAnswerChoice;

var answer_choice_A;
var answer_choice_B;
var answer_choice_C;
var answer_choice_D;

var addition_only = false;
var subtraction_only = false;
var division_only = false;
var multiplication_only = false; 


var question;
var new_question = false;

var correctAnswer = 0;
// var currTime = new Date();
// var startTime = 0;
// var endTime = 0;

function preload() {
  pipeBodySprite = loadImage('graphics/pipe_body.png');
  pipePeakSprite = loadImage('graphics/pipe_body.png');
  birdSprite = loadImage('graphics/og_bird.png');
  bgImg = loadImage('graphics/background.png');
}

function setup() {
  createCanvas(800, 600);
  reset();

  start_game_button = createButton('Start Game');
  start_game_button.position((width/2)-40,height/2);
  start_game_button.style('background-color', '#4CAF65');
  start_game_button.style('padding: 10px 27px');
  start_game_button.style('border-radius: 25px 25px 25px 25px');

  settings_button = createButton('Settings');
  settings_button.position((width/2)-30,(height/2)+50);
  settings_button.style('background-color', '#4CAF65');
  settings_button.style('padding: 10px 27px');
  settings_button.style('border-radius: 25px 25px 25px 25px');

  restart_button = createButton('Restart');
  restart_button.position((width/2)-20, (height/2)+100);
  restart_button.style('background-color', '#4CAF65');
  restart_button.style('padding: 5px 14px');
  restart_button.style('border-radius: 25px 25px 25px 25px');
  restart_button.hide();

  leave_button = createButton('Main Menu');
  leave_button.position((width/2)-31.5, (height/2)+140);
  leave_button.style('background-color', '#4CAF65');
  leave_button.style('padding: 5px 14px');
  leave_button.style('border-radius: 25px 25px 25px 25px');
  leave_button.hide();

  return_to_main = createButton('Return to Main Menu');
  return_to_main.position(600, 500);
  return_to_main.style('background-color', '#4CAF65');
  return_to_main.style('padding: 5px 14px');
  return_to_main.style('border-radius: 25px 25px 25px 25px');
  return_to_main.hide();

  answer_A = createButton("A");
  answer_A.position(15, 32);
  answer_A.hide();

  answer_choice_A = createP(' ');
  answer_choice_A.position(15, 35);

  answer_B = createButton("B");
  answer_B.position(785, 32);
  answer_B.hide();

  answer_choice_B = createP(' ');
  answer_choice_B.position(785, 35);

  answer_C = createButton("C");
  answer_C.position(15, 560);
  answer_C.hide();

  answer_choice_C = createP(' ');
  answer_choice_C.position(15, 570);

  answer_D = createButton("D");
  answer_D.position(785, 560);
  answer_D.hide();

  answer_choice_D = createP(' ');
  answer_choice_D.position(785, 570);

  // Adding Difficulty Buttons
  addition_button = createButton('Addition Only');
  addition_button.position(200, 300);
  addition_button.hide();

  subtraction_button = createButton('Subtraction Only');
  subtraction_button.position(200, 400);
  subtraction_button.hide();

  division_button = createButton('Division Only');
  division_button.position(200, 350);
  division_button.hide();

  multiplication_button = createButton('Multiplication Only');
  multiplication_button.position(200, 250);
  multiplication_button.hide();


  answer_A.mousePressed(() => {
    if (correctAnswerChoice == 0) {
      userAnswer = true;
    } else {
      userAnswer = false;
    }
  });

  answer_B.mousePressed(() => {
    if (correctAnswerChoice == 1) {
      userAnswer = true;
    } else {
      userAnswer = false;
    }
  });

  answer_C.mousePressed(() => {
    if (correctAnswerChoice == 2) {
      userAnswer = true;
    } else {
      userAnswer = false;
    }
  });

  answer_D.mousePressed(() => {
    if (correctAnswerChoice == 3) {
      userAnswer = true;
    } else {
      userAnswer = false;
    }
  });

  start_game_button.mousePressed(() => { // home menu start
    startTheGame=true;
    start_game_button.hide();
    settings_button.hide();
  });

  settings_button.mousePressed(() => { // go to settings
    goToSettings=true;
    start_game_button.hide();
    settings_button.hide();
    addition_button.show();
    subtraction_button.show();
    division_button.show();
    multiplication_button.show();
    return_to_main.show();
  });

  restart_button.mousePressed(() => { // restart the game w/out going to menu
    startTheGame=true;
    restart_button.hide();
    leave_button.hide();
    reset();
  });

  leave_button.mousePressed(() => { // return to main menu from game
    startTheGame=false;
    leave_button.hide();
    restart_button.hide();
    start_game_button.show();
    settings_button.show();
    reset();
  });

  return_to_main.mousePressed(() => { // return to main menu from settings
    goToSettings = false;
    start_game_button.show();
    settings_button.show();
    return_to_main.hide();

    addition_button.hide();
    subtraction_button.hide();
    division_button.hide();
    multiplication_button.hide();
    return_to_main.hide();
  });

  // Math Button Functionality
    //Addition 

   // Addition Start the Game
   addition_button.mousePressed(() => { // home menu start
    subtraction_only = false;
    division_only = false;
    multiplication_only = false;

    addition_only = true;
    startTheGame=true;
    start_game_button.hide();
    settings_button.hide();
    addition_button.hide();
    subtraction_button.hide();
    division_button.hide();
    multiplication_button.hide();
    return_to_main.hide();
  });

   // Subtraction Start the Game
   subtraction_button.mousePressed(() => { // home menu start
    addition_only = false;
    division_only = false;
    multiplication_only = false;

    subtraction_only = true;
    startTheGame=true;
    start_game_button.hide();
    settings_button.hide();
    addition_button.hide();
    subtraction_button.hide();
    division_button.hide();
    multiplication_button.hide();
    return_to_main.hide();
  });
   // Division Start the Game
   division_button.mousePressed(() => { // home menu start
    addition_only = false;
    subtraction_only = false;
    multiplication_only = false;

    division_only = true;
    startTheGame=true;
    start_game_button.hide();
    settings_button.hide();
    addition_button.hide();
    subtraction_button.hide();
    division_button.hide();
    multiplication_button.hide();
    return_to_main.hide();
  });

    // Multiplication Start the Game
    multiplication_button.mousePressed(() => { // home menu start
      addition_only = false;
      subtraction_only = false;
      division_only = false;
  
      multiplication_only = true;
      startTheGame=true;
      start_game_button.hide();
      settings_button.hide();
      addition_button.hide();
      subtraction_button.hide();
      division_button.hide();
      multiplication_button.hide();
      return_to_main.hide();
    });

}

function draw() {
  background(0);
  // Draw our background image, then move it at the same speed as the pipes
  image(bgImg, bgX, 0, bgImg.width, height);
  bgX -= pipes[0].speed * parallax;

  // this handles the "infinite loop" by checking if the right
  // edge of the image would be on the screen, if it is draw a
  // second copy of the image right next to it
  // once the second image gets to the 0 point, we can reset bgX to
  // 0 and go back to drawing just one image.
  if (bgX <= -bgImg.width + width) {
    image(bgImg, bgX + bgImg.width, 0, bgImg.width, height);
    if (bgX <= -bgImg.width) {
      bgX = 0;
    }
  }

  if (!startTheGame) {
    textSize(64);
    textAlign(CENTER, TOP-CENTER);
    text('Mathy Bird', width / 2, (height / 2) - 150);
    textAlign(LEFT, BASELINE);
  }


  if (startTheGame) {
    if (gameFrameCount==0) {
      question = createQuestion();
    }
    answer_A.show();
    answer_B.show();
    answer_C.show();
    answer_D.show();

    if (!isOver) {
      textSize(64);
      textAlign(CENTER, TOP-CENTER);
      text(question, width / 2, (height / 2) - 150);
      textAlign(LEFT, BASELINE);
      textSize(25);
      var pipeCount = 3-count;
      text('Pipes left: ' + pipeCount.toString(), width / 2, height - 550);
    }

    gameFrameCount++;
    for (var i = pipes.length - 1; i >= 0; i--) {
      pipes[i].update();
      pipes[i].show();

      if (pipes[i].pass(bird)) {
        score++;
        count++;
      }

      if (pipes[i].hits(bird)) {
        gameover();
      }

      if (pipes[i].offscreen()) {
        pipes.splice(i, 1);
      }
    }

    bird.update();
    bird.show();

    if ((gameFrameCount - gameoverFrame) % 150 == 0) {
      pipes.push(new Pipe());
    }

    // if ((frameCount - gameoverFrame) % 150 == 0) {
    //   pipes.push(new Pipe());
    // }


  // after every 3 pipes, check if the user's answer was correct
    if (count==3) {
      if (userAnswer) {
        count=0;
        userAnswer=false;
        question = createQuestion();
      } else {
        bird.wrongAnswer();
        bird.update();
      }
    }

    showScores();

    // touches is an list that contains the positions of all
    // current touch points positions and IDs
    // here we check if touches' length is bigger than one
    // and set it to the touched var
    // touched = (touches.length > 0);
    //
    // // if user has touched then make bird jump
    // // also checks if not touched before
    // if (touched && !prevTouched) {
    //   bird.up();
    // }
    //
    // // updates prevTouched
    // prevTouched = touched;
  } else if (goToSettings) {
      // this is where we can add costomization
      // textSize(64);
      // textAlign(CENTER, CENTER);
      // text('COMING SOON', width / 2, height / 2);
      // textAlign(LEFT, BASELINE);
  }

}

function showScores() {
  textSize(32);
  text('score: ' + score, width/2, height-50);
  text('record: ' + maxScore, width/2, height-30);
}

function gameover() {
  textSize(64);
  textAlign(CENTER, CENTER);
  text('GAMEOVER', width / 2, height / 2);
  textAlign(LEFT, BASELINE);
  let correctString = 'Correct Answer: '
  textSize(24);
  textAlign(CENTER, CENTER);
  text(correctString.concat(correctAnswer.toString()), width / 2, (height / 2)+50);
  textAlign(LEFT, BASELINE);
  maxScore = max(score, maxScore);
  isOver = true;

  leave_button.show();
  restart_button.show();

  answer_A.hide();
  answer_B.hide();
  answer_C.hide();
  answer_D.hide();

  answer_choice_A.html(' ');
  answer_choice_B.html(' ');
  answer_choice_C.html(' ');
  answer_choice_D.html(' ');

  noLoop();
}

function reset() {
  isOver = false;
  score = 0;
  bgX = 0;
  pipes = [];
  bird = new Bird();
  pipes.push(new Pipe());
  //gameoverFrame = frameCount - 1;
  gameoverFrame = gameFrameCount - 1;
  count = 0;
  gameFrameCount = 0;
  loop();
}

function createQuestion() {
  let strings_of_equations = ['+', '-', 'x', '/']; // add filter
  let z = Math.floor(Math.random() * Math.floor(strings_of_equations.length)) // the operation

  if(addition_only == true ){
     z = 0;
  } 
  if(subtraction_only == true){
     z = 1;
  }
  if(division_only == true){
     z = 3;
  }
  if(multiplication_only == true){
     z =2;
  } 
  
  
  
  //let strings_of_equations = ['+', '-', 'x', '/']; // add filter

  //generate random range_of_numbers
  let x = Math.floor(Math.random() * Math.floor(10)) // change 10 to a factor variable
  let y = Math.floor(Math.random() * Math.floor(10))
  //let z = Math.floor(Math.random() * Math.floor(strings_of_equations.length)) // the operation

  while (x == 0 && y == 0) {
    x = Math.floor(Math.random() * Math.floor(10))
    y = Math.floor(Math.random() * Math.floor(10))
  }

  while (x == 0 || y == 0) {
    x = Math.floor(Math.random() * Math.floor(10))
    y = Math.floor(Math.random() * Math.floor(10))
  }

  switch(z) {
    case 0:
      correctAnswer=x+y;
      break;
    case 1:
      correctAnswer=x-y;
      break;
    case 2:
      correctAnswer=x*y;
      if (x==0 || y==0) {
        zeroCatch = true;
      }
      break;
    case 3:
      while (x%y!=0) {
        y = Math.floor(Math.random() * Math.floor(10));
      }
      correctAnswer=x/y;
      break;
  }

  console.log('maybe we fixed it');

  let danger = 0
  
  let randomChoice = Math.floor(Math.random() * Math.floor(correctAnswer-y,correctAnswer+x));
  while (randomChoice==correctAnswer || randomChoice==(correctAnswer+x) || randomChoice==(correctAnswer-y)) {
    randomChoice = Math.floor(Math.random() * Math.floor(correctAnswer-y,correctAnswer+x));
    danger++;
    if (danger>5) {
      console.log('danger danger');
      randomChoice = correctAnswer+x+y+2;
      break;
    } 
  }
  let choices = [correctAnswer, correctAnswer+x, correctAnswer-y, randomChoice];
  

  let shuffled = shuffleThis(choices);

  answer_choice_A.html(shuffled[0]);
  answer_choice_B.html(shuffled[1]);
  answer_choice_C.html(shuffled[2]);
  answer_choice_D.html(shuffled[3]);

  switch (shuffled.findIndex(element => element==correctAnswer)) {
    case 0:
      correctAnswerChoice = 0;
      break;
    case 1:
      correctAnswerChoice = 1;
      break;
    case 2:
      correctAnswerChoice = 2;
      break;
    case 3:
      correctAnswerChoice = 3;
      break;
  }

  var return_string = x.toString().concat(' ', strings_of_equations[z]);
  return_string = return_string.concat(' ', y.toString());

  return return_string.concat(' =  ?');
}

// stolen from stack overflow: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleThis(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  console.log('problem is not here:436');
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}





// unused code from og code
// function keyPressed() {
//   if (key === ' ') {
//     //bird.up();
//     gameover()
//     if (isOver) reset(); //you can just call reset() in Machinelearning if you die, because you cant simulate keyPress with code.
//   }
//
// }
//
// function touchStarted() {
//   if (isOver) reset();
// }
