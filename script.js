// GIVEN I am taking a code quiz

// WHEN I click the start button

// THEN a timer starts and I am presented with a question

// WHEN I answer a question

// THEN I am presented with another question

// WHEN I answer a question incorrectly

// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0

// THEN the game is over

// WHEN the game is over

// THEN I can save my initials and score

var scoreCount
var timer
var questionArray = [{q: "What?", a:"yes", correct:"yes"}]

function startGame(){
    //user clicks on start game and questions appear
    //use document.QuerySelector to change the text of questions and answers


}

function midGame(){}
//for questions changing, etc.

function endGame(){
    //Game ends, score is displayed;
    //user submits initials and score is compared to high score
}

function timer(){
    // when games starts, begin decrementing by 1 second,
    // use setInterval 
    // display timer
    // subtract time when question is wrong
    //use Query Selector for time remaining


} 