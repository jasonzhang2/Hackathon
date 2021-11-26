//t: array containing all of the notes currently displayed on the screen
//score: variable containing the score, set to 0
//maxScore: holds the high score of the user, set to 0
//combo: Holds the combo (how many notes the user hit in a row), set to 0
//sound1: Sound used when the user hits the note in the top bar whilst it is in the strike zone
//sound2: Sound used when the user hits the note in the bottom bar whilst it is in the strike zone
//miss: Holds the amount of consecutive note misses that the user has
//play: Variable that allows the song to be played
//speed: Holds the speed of the note
//missSound: Sound used when the user misses their first note or breaks their combo
//songSound: Holds whether the song will be played or not
//LANE1_Y: Setting the y value of the notes in the top bar to 100
//LANE2_Y: Setting the y value of the notes in the bottom bar to 200
//TH_LOW: The x value of the first line in the strike zone, set at 60
//TH_HIGH: The x value of the second line in the strike zone, set at 100
//HEALTH_TH: Constant used when the user misses a note three or more times ina  row
//MaxMiss: Constant that holds the max amount of misses that the user is allowed to make consecutively
//chartArrayTop: chart of notes for top row during song mode
//chartArrayBottom: chart of notes for bottom row during song mode
//chartTopIndex: used to store how many notes of chartArrayTop that have already been spawned
//chartBottomIndex: used to store how many notes of chartArrayBottom that have already been spawned
//startSong: if true, will start playing the song
//playWasPressed: becomes true when the 'play' html button is pressed.
//frameSongStart: frame that startSong should become true, based on the frame value of when playWasPressed happens
//framePlayStart: frame that play button was pressed, gets a value once playWasPressed becomes true.

//Declaring all variables
var t = [];
var score = 0;
var maxScore = 0;
var combo = 0;
var sound1;
var sound2;
var miss;
var play;
var speed;
var missSound;
var songSound;
const LANE1_Y = 100;
const TH_LOW = 60;
const TH_HIGH = 100;
const HEALTH_TH = 3;
const LANE2_Y = 200;
const MaxMiss = 5;

//Declaring all variables for song mode
var chartArrayTop =    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1];
var chartArrayBottom = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,10,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1];
var chartTopIndex = 0;
var chartBottomIndex = 0;
var startSong = false;
var playWasPressed = false;
var frameSongStart;
var framePlayStart;

//Function preload that holds all of the media needed for the project
function preload() {
  //Declaring the sound formats used
  soundFormats("mp3", "wav");
  //Sound played when the note is hit inside of the strike zone in the top bar
  sound1 = loadSound(
    "https://cdn.glitch.me/a8162db4-1055-417b-a74e-f9838fc4bd9e%2Fdrum-hitclap.wav?v=1637440385809"
  );
  //Sound played when the note is hit inside of the strike zone in the bottom bar
  sound2 = loadSound(
    "https://cdn.glitch.me/a8162db4-1055-417b-a74e-f9838fc4bd9e%2Fnormal-hitnormal.wav?v=1636837353509"
  );
  //Sound used when the user misses the note
  missSound = loadSound(
    "https://cdn.glitch.me/a8162db4-1055-417b-a74e-f9838fc4bd9e%2Fcombobreak.wav?v=1637440467886"
  );
  //The background song and the song used that is synced with the notes
  songSound = loadSound(
    "https://cdn.glitch.me/a8162db4-1055-417b-a74e-f9838fc4bd9e%2Fca6812b3-631a-45a4-8b9f-1317e15c8829_audio%200.955x?v=1637765054997"
  );
}

//Function setup that sets up the canvas for the program
function setup() {
  //Creating the canvas size 1000 pixels by 40 pixels
  createCanvas(1000, 400);
  //Giving the canvas a frame rate of 60 frames per second
  frameRate(60);
  //Registering the keypress event to the event handler function doKeyDown
  window.addEventListener("keypress", doKeyDown, false);
  
  //Setting the score to 0
  score = 0;
  //setting the max score to 0
  maxScore = 0;
  //Setting miss to the maximum amount of misses
  miss = MaxMiss;
  //Setting play equal to false, not allowing for the game to start
  play = false;
  
}

//draw function that runs every frame
function draw() {
  //checs if the mode is "song", if so play the song
  
  //If statement that checks if song mode is equal to 1
  if (songMode === 1) {
    //Nested if statement that checks if the key was pressed is true
    if (playWasPressed === true) {
      //Playing the song sound
      songSound.play();
      //Setting the song sound volume to 0.4
      songSound.setVolume(0.4);
      //setting the frame play start equal to the frame count
      framePlayStart = frameCount;
      //
      frameSongStart = round(framePlayStart + (width - 100));
      //frameSongStart = round(framePlayStart + 2450 / speed);

      //Setting play was pressed equal to false
      playWasPressed = false;
      //Setting start song equal to true
      startSong = true;
    }
  }

  //If statement for if the misses is less than 3
  if(miss < HEALTH_TH) {
    //setting teh background colour to red
    background(106, 4, 15)
  }
  //Else if statement
  else {
  //Setting the background colour to grey
  background(36, 36, 35); }

  //Drawing the score to the canvas
  drawScore();
  //Drawing the max score to the canvas
  drawMaxScore();
  //Drawing the playfield to the canvas
  drawPlayField(LANE1_Y, LANE2_Y, 77, TH_LOW, TH_HIGH, 238, 237, 255);
  //Drawing the combo to the canvas
  drawCombo();
  //drawing the health to the canvas
  drawHealth(HEALTH_TH, miss);

  //If staetement setting play equal to true
  if (play === true) {
    //For loop that sets i equal to 0, i is less than the length of t and increases the value of i by 1 each loop
    for (var i = 0; i < t.length; i++) {
      //Updating the i index of the t array
      t[i].update();
      //Showing the i index of the t array
      t[i].show();

      //If statement for if the i index in the t array is less than 0
      if (t[i].x <= 0) {
        //Subtract 10 from the score
        if(score>10) {
        score -= 10;
        }
        //Switching the i index in the t array for 1
        t.splice(i, 1);
        //Subtracting 1 from miss
        miss--;
        //If statement for if the combo is greater or equal to 5
        if (combo >= 5) {
          //Playing the miss sound
          missSound.play();
        }
        //setting the combo equal to 0
        combo = 0;

        //If miss is less than or equal to 0
        if (miss <= 0) {
          
        //If statement for if the score is greater than the max score
        if (score > maxScore) {
          //setting max score equal to the score
          maxScore = score;
        }
          //Setting the t array to an empty array
          t = [];
          //Setting miss equal to the max miss
          miss = MaxMiss;
          //Setting the score equal to 0
          score = 0;
          //Setting play equal to false
          play = false;
          //stop song
          songSound.stop();
          //drawing the max score
          drawMaxScore();
        }
      }
    }

    //Ifstatement for if the song mode is equal to 1, if true then will use certain arrays to spawn predetermined notes
    if (songMode === 1) { 
      //create new notes based on the 'chartArrayTop' and 'chartArrayBottom' arrays, using an offset of 119 frames to sync with the song
      if ((frameCount + framePlayStart + 119) % 20 === 0) {
        if (chartArrayTop[chartTopIndex] === 1) {
          t.push(new note(width, LANE1_Y, 10, speed, TH_LOW, TH_HIGH, sound1));
        }
        if (chartArrayBottom[chartBottomIndex] === 1) {
          t.push(new note(width, LANE2_Y, 12, speed, TH_LOW, TH_HIGH, sound2));
        }
      }
      
    //Else if statement, will randomly spawn notes if the game isnt in song mode
    } else {
      //If statement for if the frame count divided by 20 gives a remiander of 0 and if the random number is greater than 60
      if (frameCount % 20 == 0 && random(100) > 60) {
        //Adding a new note to the t array
        t.push(new note(width, LANE1_Y, 10, speed, TH_LOW, TH_HIGH, sound1));
      }
      //If statement for if the frame count divided by 20 gives a remiander of 0 and if the random number is greater than 60
      if (frameCount % 20 == 0 && random(100) > 60) {
        //Adding a new note to the t array
        t.push(new note(width, LANE2_Y, 12, speed * 1.2, TH_LOW, TH_HIGH, sound2));
      }
    }
    
    //If statement that checks if the framecount remainder when it is devided by 20 is 0    
    if (frameCount % 20 === 0) {
      //Adding 1 to the chart top index
      chartTopIndex++;
      //Adding 1 to the chart bottom index
      chartBottomIndex++;
    }
  }
}

//
function doKeyDown(e) {
  // check if key 'f' or 'd' is pressed
  if (e.keyCode === 102 || e.keyCode === 100) {
    // check all notes in array if 
    for (var i = 0; i < t.length; i++) {
      // there is hit and note is in upper lane
      if (t[i].isHit() && t[i].y === LANE1_Y) {
        // if both conditions are met play sound
        t[i].sound.play();
        // remove note from the array
        t.splice(i, 1);
        //increment score
        score += 100;
        // increase health up tofff MaxMiss
        if (miss < MaxMiss) {
          miss++;
        }
        // update repeated hits count
        combo++;
        // and return as we found the note in the target
        return;
      }
    }
  } 
  // check if key 'j' or 'k' is pressed
  else if (e.keyCode === 106 || e.keyCode === 107) {
    // check all notes in array if 
    for (var i = 0; i < t.length; i++) {
      // there is hit and note is in lower lane
      if (t[i].isHit() && t[i].y === LANE2_Y) {
        // if both conditions are met play sound
        t[i].sound.play();
        // remove note from the array
        t.splice(i, 1);
        //increment score
        score += 100;
        // increase health up to MaxMiss
        if (miss < MaxMiss) {
          miss++;
        }
        // update repeated hits count
        combo++;
        // and return as we found the note in the target
        return;
      }
    }
  }
  //Else if statement
  else {
  }
}


//Creating the function play to play the game
function Play() {
  //Setting teh chart top index to 0
  chartTopIndex = 0;
  //Setting the chart bottom index to 0
  chartBottomIndex = 0;
  //Making the t array empty
  t = [];
  //Stopping the song sound
  songSound.stop();
  //If statement for if song mode is equal to 1
  if (songMode === 1) {
    //Setting the speed of the notes equal to 7
    speed = 7;
  //Else if statement 
  } else {
    //Setting the value of the speed of the notes to the slider's value
    speed = slider.value;
  }
  //If statement for if the score is greater than the max score
  if (score > maxScore) {
    //setting max score equal to the score
    maxScore = score;
  }
  //setting miss equal to max miss
  miss = MaxMiss;
  //setting the score equal to 0
  score = 0;
  combo = 0;
  //setting play equal to true 
  play = true;
  //Setting play was pressed to true
  playWasPressed = true;
}
