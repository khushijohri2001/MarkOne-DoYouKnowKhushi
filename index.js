var readlineSync = require('readline-sync');

var score = 0;

//user input
var userName = readlineSync.question("What's your name? ");
console.log("\n");
console.log("Welcome " + userName + " to the game 'DO YOU KNOW KHUSHI?' ");
console.log("\n");
console.log("Answer 5 Questions about Khushi ");
console.log("................................");





//function definition
function quiz(question, answer) {
  var input = readlineSync.question(question);
  if (input.toUpperCase() === answer.toUpperCase()) {
    console.log("Right!");
    score = score + 1;
  }
  else {
    console.log("Wrong!");
  }

  console.log("Your score is ", score);
  console.log("--------------");
}


//objects
var questionOne = {
  question: "Where do Khushi Live? ",
  answer: "jaipur"
}

var questionTwo = {
  question: "What is Khushi's favourite colour? ",
  answer: "blue"
}

var questionThree = {
  question: "What is Khushi's age? ",
  answer: "19"
}
var questionFour = {
  question: "What is Khushi's Favourite hobby? ",
  answer: "drawing"
}
var questionFive = {
  question: "In which year was she born? ",
  answer: "2001"
}


//array definition
var ques = [questionOne, questionTwo, questionThree, questionFour, questionFive];

//function call
for (var i = 0; i < ques.length; i++) {
  var currentQues = ques[i];
  quiz(currentQues.question, currentQues.answer);
}

console.log("\n");
console.log(userName + "Your score is " + score + "/5");
console.log("\n");


if (score == 5) {
  console.log("Wowwww! " + userName + " , you are closest to Khushi");
}
else if (score == 4) {
  console.log("Amazing! " + userName + " , you are close enough to Khushi");
}
else if (score == 3) {
  console.log("Good! " + userName + " , you know Khushi");
}
else if (score == 2) {
  console.log("Fine! " + userName + " You dont know Khushi well");
}
else {
  console.log("Oh Noooo! " + userName + " you dont know Khushi at all");
}



console.log("Thank you for playing");

var highscore = [
  {
    name: "Khushi",
    score: 5
  },

  {
    name: "Samiksha",
    score: 4
  }
]

for (var k = 0; k < highscore.length; k++) {
  currentScore = highscore[k];
  t = k + 1;
  console.log("The scorer " + t + " is " + currentScore.name + " with a score of " + currentScore.score);

}

