function highScoreShow() {
    
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  
    highscores.sort(function(x, y) {
      return y.score - x.score;
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

var clear = document.getElementById("clear");
if (clear){
  clear.onclick = highScoreEmpty;
};
  

highScoreShow();
  