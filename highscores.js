function highScoreShow() {
    
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  
    highscores.sort(function(a, b) {
      return b.score - a.score;
    });
  
    highscores.forEach(function(score) {
      
      var tag = document.createElement("li");
      tag.textContent = score.initials + " - " + score.score;
  
      
      var olEl = document.getElementById("highscores");
      olEl.appendChild(tag);
    });
  }
  
  function highScoreEmpty() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
  }
  
  document.getElementById("clear").onclick = highScoreEmpty;
  
  
  highScoreShow();
  