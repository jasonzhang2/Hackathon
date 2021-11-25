//Setting the variable score equal to a function
var drawScore = function() {
  //Setting the fill to white
  fill(244, 243, 238);
  //Adding the text score
  text("Score:", (width / 2) - 120, 20);
  text(score, (width / 2) - 35, 20);
};

//Setting the variable draw max score equal to a function
var drawMaxScore = function() {
  //Setting the fill to white
  fill(244, 243, 238);
  //Adding the text high score
  text("High Score:", (width / 2) + 45, 20);
  text(maxScore, (width / 2) + 185, 20);
};

//Setting the variable draw combo score equal to a function
var drawCombo = function() {
  //Setting the fill to white
  fill(244, 243, 238);
  //display vombo text
  text("Combo:", 5 , height - 5);
  text(combo, 100, height - 5);
};