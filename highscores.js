function highScoreShow() {
    
    var highscores = JSON.parse(window.localStorage.getItem("scores")) || [];
  
    highscores.sort(function(x, y) {
      return y.score - x.score;
    });
  
    highscores.forEach(function(score) {
      
      var tag = document.createElement("li");
      tag.textContent = score.initials + " - " + score.score;
  
      
      var olEl = document.getElementById("scores");
      olEl.appendChild(tag);
    });
}
  
function highScoreEmpty() {
    window.localStorage.removeItem("scores");
    window.location.reload();
}
  
document.getElementById("clear").onclick = highScoreEmpty;
  

highScoreShow();
  