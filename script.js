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
var questionArray = [
    {q: "What?", a:"yes", b: "no" , correct:"yes" ,
    q: "Why?" , a: "yes" , b: "no" , correct: "no" ,
    q: "How" , a: "yes" , b: "no" , correct: "no" ,
    q: "When" , a: "now" , b: "later" , correct: "now"}
]
var button = document.getElementById("questionArray")
var i = 0
button.addEventListener("click", function(){
​
var question = document.getElementById("question")
question.innerText = questionArray[i].q
​
​
var label = document.getElementById("label1")
label.innerText = questionArray[i].a
​
var label = document.getElementById("label2")
label.innerText = questionArray[i].b
​
var label = document.getElementById("label3")
label.innerText = questionArray[i].c
​
var label = document.getElementById("label4")
label.innerText = questionArray[i].d
​
i++
var answer = document.getElementById("answer1")
answer.value = label.innerText = questionArray[2].a
​
answer.addEventListener("click", function(){
    console.log(event)
    var chosenAnswer = event.target.value
​
    if(chosenAnswer == true){
        //do something
    } else {
        // do something else
    }
})
})

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