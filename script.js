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
//how do i keep track of score as users answer questions and lose time
var timer
//countdown by one second but also lose a bunch of time when they chose wrong answer
var questionArray = [
    {q: "A very useful tool used during development and debugging for printing content to the debugger is?", a:"yes", correct:"yes",
    q: "Who invented JavaScript", a:"Thomas Edison", correct:"unknown",
    q: "What program is usually regarded for its aesthetic qualities?" , a: "CSS" , correct: "CSS",
    q: "Programs we used for this quiz include:" , a:"All of the Below", correct: "All of the Below"}
]

function startGame(){
    start.addEventListener("onclick", midGame);
    timer(); //make this run after the click 
    //user clicks on start game and questions appear
    

}

function midGame(){
    //Change questions
    //Check for and display correct/incorrect answers
    //Run time and subtract for incorrect answer
    //use document.QuerySelector to change the text of questions and answers
    document.querySelector(questionArray);
}


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

var randomText = (i=0, i>"questionArray", i++ );