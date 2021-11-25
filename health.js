//Setting the draw health variable to a function
// th - health threshold for background change
// value - health valu to be displayed

var drawHealth = function(th, value) {
  //If statement for if the miss is less than 3
  if (value < th) {
    //Fill the health bar red
    fill(186, 24, 27);
    //Else if statement
  } else {
    //Filling the health bar with green
    fill(6, 214, 160);
  }

  //Creating a rectangle
  rect(5, 5, value * 60, 20);
  //filling the health bar black
  fill(0);
  //Setting the text size to 15
  textSize(15);
  //Adding the HEALTH text
  text("HEALTH", 10, 20);
};
