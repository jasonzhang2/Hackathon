//Setting the variable draw play field equal to a function taking in the parmeters
// l1Top - lane 1 top y coordinate
// l2Top - lane 2 top y coordinate
// lw - lane width
// thL - target low threshold
// thH - target high threshold
// r - red component of lane colour
// g - green component of lane colour
// b - blue component of lane colour

var drawPlayField = function(l1Top, l2Top, lw, thL, thH, r, g, b) {
  //setting the strokeweight to 5
  strokeWeight(5);
  
  //Setting the text size to 25
  textSize(25);

  //Filling the note lanes with white
  fill(r, g, b);
  //Drawing the first note lane
  rect(0, l1Top, width, lw);
  //Drawing the second note lane
  rect(0, l2Top, width, lw);

  //Setting the strokeweigth to 2
  strokeWeight(2);
  //Adding a black fill
  fill(0, 0, 0);
  //Setting up the first line of the strike zone
  line(thH, l1Top, thH, l2Top + lw);
  //Setting up the second line of teh strike zone
  line(thL, l1Top, thL, l2Top + lw);
};

