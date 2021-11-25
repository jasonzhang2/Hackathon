//API for note
// Properties
// x - x position of the note
// y - y position of the note
// width - width of the note
// velocity - velocity of the note from right to left
// thresholdLow - low x position of the hit target
// thresholdHigh - high x position of the hit target
// sound - sound to be played for the note
//
// Methods
// constructor(nx, ny, w, v, thL, thH, sound) - create a note object
// parameters
// nx - x position of the note
// ny - y position of the note
// w - width of the note
// v - velocity of the note from right to left
// thL - low x position of the hit target
// thH - high x position of the hit target
// sound - sound to be played for the note
//
// show() - display a note on a canvas
// parameters - none
// return - void
//
// update() - update x position of a note based on its velocity
// parameters - none
// return - void
//
// isHit() - hit check for a note based on threshold values
// parameters - none
// return - true if note x position is betveen thresholds, false otherwise

//Adding a class called note that takes in the parameters 
class note {
  constructor(nx, ny, w, v, thL, thH, sound) {
    this.x = nx;
    this.y = ny;
    this.width = w;
    this.velocity = v;
    this.thresholdLow = thL;
    this.thresholdHigh = thH;
    this.sound = sound;
  }

  //Showing the note
  show() {
    //Setting the strokeweigth to 0
    strokeWeight(0);
    //If statement for if the note width is less than 11
    if (this.width < 11) {
      //Filling the note with the colour blue
      fill(67, 97, 238);
    //Else if statement 
    } else {
      //Filling the note with the colour red
      fill(230, 57, 70);
    }
    //Creating teh note
    rect(this.x, this.y + 3, this.width, 71);
  }
  //Updating the position of the note
  update() {
    //updating the x position of the note
    this.x -= this.velocity / 2.5;
  }

  //Checking if the note is hit in the strike zone
  isHit() {
    //Return true if it is in strike zone, false otherwise
    return this.x < this.thresholdHigh && this.x > this.thresholdLow;
  }
}

