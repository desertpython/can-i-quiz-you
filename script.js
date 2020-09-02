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
var currentQuestionSpot=0;

function startQuiz() {
  
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");

  questionsEl.removeAttribute("class");


  timerId = setInterval(clockTick, 1000);


  timerEl.textContent = time;

  fetchQuestion();
}

function fetchQuestion() {

  var thisQuestion = questions[currentQuestionSpot];

  var titleEl = document.getElementById("question-title");
  titleEl.textContent = thisQuestion.title;

  choicesEl.innerHTML = "";


  thisQuestion.choices.forEach(function(choice, i) {
   
    var buttonMake = document.createElement("button");
    buttonMake.setAttribute("class", "choice");
    buttonMake.setAttribute("value", choice);

    buttonMake.textContent = i + 1 + ". " + choice;

  
    buttonMake.onclick = questionClick;

   
    choicesEl.appendChild(buttonMake);
  });
}
function questionClick() {
  
    if (this.value !== questions[currentQuestionSpot].answer) {
     
      time -= 15;
  
      if (time < 0) {
        time = 0;
      }
  
     
      timerEl.textContent = time;
  
      feedbackEl.textContent = "Wrong!";
    } else {
  
      feedbackEl.textContent = "Correct!";
    }
  
    
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
      feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);
  
   
    currentQuestionSpot++;
  
  
    if (currentQuestionSpot === questions.length) {
      quizEnd();
    } else {
      fetchQuestion();
    }
}
function quizEnd() {
    
    clearInterval(timerId);
  
    
    var endScreenEl = document.getElementById("end-screen");
    endScreenEl.removeAttribute("class");
  
   
    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = time;
  
    
    questionsEl.setAttribute("class", "hide");
}
function clockTick() {
    
    time--;
    timerEl.textContent = time;
  
    
    if (time <= 0) {
      quizEnd();
    }
}

function saveHighScore() {
    
    var initials = initialsEl.value.trim();
  
   
    if (initials !== "") {
      
      var highscores =
        JSON.parse(window.localStorage.getItem("highscores")) || [];
  
      
      var newScore = {
        score: time,
        initials: initials
      };
  
     
      highscores.push(newScore);
      window.localStorage.setItem("scores", JSON.stringify(highscores));
  
     
      window.location.href = "highscores.html";
    }
}
  
function checkForEnter(event) {
    
    if (event.key === "Enter") {
      saveHighScore();
    }
}
  

submitBtn.onclick = saveHighScore;
  

startBtn.onclick = startQuiz;
  
initialsEl.onkeyup = checkForEnter;
  
  