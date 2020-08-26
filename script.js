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

// quiz variables
var thisQuestionSpot = 0;
var time = questions.length * 15;
var timerId;

// variables for getting by id
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

function startQuiz() {
  // start screen hide
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");

  // reveal question class
  questionsEl.removeAttribute("class");

  // start timer
  timerId = setInterval(clockTick, 1000);

  // show starting time
  timerEl.textContent = time;

  fetchQuestion();
}

function fetchQuestion() {
  // get current question from array
  var thisQuestion = questions[currentQuestionSpot];

  // update title with current question
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = thisQuestion.title;

  // empty old question choices
  choicesEl.innerHTML = "";

  // loop through questions
  thisQuestion.choices.forEach(function(choice, x) {
    // create new buttons for choices
    var buttonMake = document.createElement("button");
    buttonMake.setAttribute("class", "choice");
    buttonMake.setAttribute("value", choice);

    choiceNode.textContent = x + 1 + ". " + choice;

    // make choices clickable
    ButtonMake.onclick = questionClick;

    // display choice buttons
    choicesEl.appendChild(buttonMake);
  });
}
function questionClick() {
    // check if user guessed wrong
    if (this.value !== questions[currentQuestionSpot].answer) {
      // penalize time
      time -= 15;
  
      if (time < 0) {
        time = 0;
      }
  
      // display new time 
      timerEl.textContent = time;
  
      feedbackEl.textContent = "Wrong!";
    } else {
  
      feedbackEl.textContent = "Correct!";
    }
  
    // flash right/wrong feedback on page for half a second
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
      feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);
  
    // move to next question
    currentQuestionSpot++;
  
    // check if we've run out of questions
    if (currentQuestionSpot === questions.length) {
      quizEnd();
    } else {
      fetchQuestion();
    }
  }
  