
let bg;
//Sets variables for the positions of the enemy sprite and the player sprite.
var x = 182;
var y = 192;
var xb = 182;
var yb = 125;
//Sets a blank array for the last direction input by the player.
var lastD = [];
//A function to create and have all the images loaded into.
function setup(){
  var canvas = createCanvas(700,400);
  canvas.parent('game');
  //Due to p5 not allowing local images, the images being loaded are uploaded to a website and taken from there.
  bg = loadImage("https://i.imgur.com/3ne1f9o.png?1");
  good = loadImage("https://i.imgur.com/rOG7b2N.png");
  bad = loadImage("https://i.imgur.com/ERIoXxs.png");
}
//Sets two variables so they can change as questions are answered correctly.
score = 0;
once = 1;
function draw() {
  //Draws a background.
  background(bg);
  //Sets a colour for a rectangle as an answer box.
  let c = color(255,40,40);
  fill(c);
  //Creates said rectangle.
  rect(30, 32, 45, 45);
  //Sets a colour for the text in the answer box.
  c = color(255,255,255)
  fill(c);
  textSize(36);
  //Sets the letter in the answer box.
  text('A',40,68);
  //Repeats the process for each answer box.
  c =  color(255,40,40);
  fill(c);
  rect(305, 32, 45, 45);
  c =  color(255,255,255)
  fill(c);
  textSize(36);
  text('B',315,68);
  c =  color(255,40,40);
  fill(c);
  rect(30,322,45,45);
  c =  color(255,255,255)
  fill(c);
  textSize(36);
  text('C',40,357);
  c =  color(255,40,40);
  fill(c);
  rect(305,322,45,45);
  c =  color(255,255,255)
  fill(c);
  textSize(36);
  text('D',315,357);

  //Sets distance between the player and the answer boxes to a variable.
  let distance = int(dist(x, y, 50, 40));
  let distance2 = int(dist(x, y, 50, 320));
  let distance3 = int(dist(x, y, 320, 320));
  //Sets a particular answer to the question and checks what question the user is on.
  if (distance < 25 && once == 1) {
    //changes the question the user is on and resets the user position.
    score = score + 1;
    once = 2;
    x = 182;
    y = 192;
  }
  //Repeats the process for multiple questions.
  if (distance2 < 25 && once == 2){
    score = score + 1;
    once = 3;
    x = 182;
    y = 192;
  }
  if (distance3 < 25 && once == 3){
    score = score + 1;
    once = 4;
    x = 182;
    y = 192;
  }
  if (distance < 25 && once == 4){
    score = score + 1;
    once = 4;
    x = 182;
    y = 192;
  }
  //Puts a particular question into the question box.
  if (score == 0){
    c =  color(0,0,0);
    fill(c);
    question = 'Which of these is not a type of \nmalware?';
    textSize(18);
    text(question, 400, 60);
    a = 'A. Phonyware';
    textSize(18);
    text(a, 400, 110);
    b = 'B. Adware';
    textSize(18);
    text(b, 400, 130);
    cee = 'C. Ransomware';
    textSize(18);
    text(cee, 400, 150);
    d = 'D. Worms';
    textSize(18);
    text(d, 400, 170);
  }
  //Repeats for each question.
  else if (score == 1){
    c =  color(0,0,0);
    fill(c);
    question = 'Where is a virus most likely to \ncome from?';
    textSize(18);
    text(question, 400, 60);
    a = 'A. An Email sent by your brother';
    textSize(18);
    text(a, 400, 110);
    b = 'B. A USB stick used for work';
    textSize(18);
    text(b, 400, 130);
    cee = 'C. www.notavirus.com';
    textSize(18);
    text(cee, 400, 150);
    d = 'D. Editting .BAT files';
    textSize(18);
    text(d, 400, 170);
  }

  else if (score == 2){
    c =  color(0,0,0);
    fill(c);
    question = 'What sofware automatically stops \nharmful data entering a device or \nnetwork?';
    textSize(18);
    text(question, 400, 60);
    a = 'A. Phishing';
    textSize(18);
    text(a, 400, 140);
    b = 'B. A strong password';
    textSize(18);
    text(b, 400, 160);
    cee = 'C. A harmful link';
    textSize(18);
    text(cee, 400, 180);
    d = 'D. A firewall';
    textSize(18);
    text(d, 400, 200);
  }
  else if (score == 3){
    c =  color(0,0,0);
    fill(c);
    question = 'What does not help make a strong \npassword?';
    textSize(18);
    text(question, 400, 60);
    a = 'A. Using names or dates of birth';
    textSize(18);
    text(a, 400, 110);
    b = 'B. Having more than 12 characters';
    textSize(18);
    text(b, 400, 130);
    cee = 'C. Using different letters';
    textSize(18);
    text(cee, 400, 150);
    d = 'D. Using special characters';
    textSize(18);
    text(d, 400, 170);
  }

  else if (score == 4){
    c =  color(0,0,0);
    fill(c);
    textSize(36)
    text('YOU WIN!', 450,200);
    //Once all the questions have been answered set the player position to the start so the user cant move.
    x = 182;
    y = 192;
    xb = 182;
    yb = 125;
  }

  //Draws the player in the x and y positions.
  image(good, x, y);
  //Stops the player moving out of the canvas.
  x = constrain(x, 5, 375 - good.width);
  y = constrain(y, 5, 395 - good.height);
  //Draws the enemy in the xb and yb positions.
  image(bad, xb, yb);
  //Creates walls that are black in a particular size and place.
  c = color (0,0,0);
  fill(c);
  r = rect(24,24,5,35);
  // If the player tries to move into the wall counteract the movement.
  if (x >= 24-good.width && x <= 29 && y >= 24-good.height && y <= 59){
    //Find the last user input.
    let size = lastD.length;
    if (lastD[size-1] == "left"){
      x = x+5;
    }
    else if (lastD[size-1] == "right"){
      x = x-5;
    }
    else if (lastD[size-1] == "up"){
      y = y+5;
    }
    else if (lastD[size-1] == "down"){
      y = y-5;
    }
  }
  //Repeats for each wall.
  c = color (0,0,0);
  fill(c);
  r = rect(52,24,55,5);

  if (x >= 52-good.width && x <= 107 && y >= 24-good.height && y <= 29){
    let size = lastD.length;
    if (lastD[size-1] == "left"){
      x = x+5;
    }
    else if (lastD[size-1] == "right"){
      x = x-5;
    }
    else if (lastD[size-1] == "up"){
      y = y+5;
    }
    else if (lastD[size-1] == "down"){
      y = y-5;
    }
  }

  c = color (0,0,0);
  fill(c);
  r = rect(102,26,5,35);

  if (x >= 102-good.width && x <= 107 && y >= 26-good.height && y <= 61){
    let size = lastD.length;
    if (lastD[size-1] == "left"){
      x = x+5;
    }
    else if (lastD[size-1] == "right"){
      x = x-5;
    }
    else if (lastD[size-1] == "up"){
      y = y+5;
    }
    else if (lastD[size-1] == "down"){
      y = y-5;
    }
  }

  c = color (0,0,0);
  fill(c);
  r = rect(75,52,5,55);

  if (x >= 75-good.width && x <= 80 && y >= 52-good.height && y <= 107){
    let size = lastD.length;
    if (lastD[size-1] == "left"){
      x = x+5;
    }
    else if (lastD[size-1] == "right"){
      x = x-5;
    }
    else if (lastD[size-1] == "up"){
      y = y+5;
    }
    else if (lastD[size-1] == "down"){
      y = y-5;
    }
  }

  c = color (0,0,0);
  fill(c);
  r = rect(24,79,30,5);

  if (x >= 24-good.width && x <= 54 && y >= 79-good.height && y <= 84){
    let size = lastD.length;
    if (lastD[size-1] == "left"){
      x = x+5;
    }
    else if (lastD[size-1] == "right"){
      x = x-5;
    }
    else if (lastD[size-1] == "up"){
      y = y+5;
    }
    else if (lastD[size-1] == "down"){
      y = y-5;
    }
  }

  c = color (0,0,0);
  fill(c);
  r = rect(49,79,5,30);

  if (x >= 49-good.width && x <= 54 && y >= 79-good.height && y <= 109){
    let size = lastD.length;
    if (lastD[size-1] == "left"){
      x = x+5;
    }
    else if (lastD[size-1] == "right"){
      x = x-5;
    }
    else if (lastD[size-1] == "up"){
      y = y+5;
    }
    else if (lastD[size-1] == "down"){
      y = y-5;
    }
  }

  c = color (0,0,0);
  fill(c);
  r = rect(49,104,31,5);

  if (x >= 49-good.width && x <= 80 && y >= 104-good.height && y <= 109){
    let size = lastD.length;
    if (lastD[size-1] == "left"){
      x = x+5;
    }
    else if (lastD[size-1] == "right"){
      x = x-5;
    }
    else if (lastD[size-1] == "up"){
      y = y+5;
    }
    else if (lastD[size-1] == "down"){
      y = y-5;
    }
  }

  c = color (0,0,0);
  fill(c);
  r = rect(5,104,24,5);

  if (x >= 5-good.width && x <= 29 && y >= 104-good.height && y <= 109){
    let size = lastD.length;
    if (lastD[size-1] == "left"){
      x = x+5;
    }
    else if (lastD[size-1] == "right"){
      x = x-5;
    }
    else if (lastD[size-1] == "up"){
      y = y+5;
    }
    else if (lastD[size-1] == "down"){
      y = y-5;
    }
  }

  c = color (0,0,0);
  fill(c);
  r = rect(24,131,55,5);

  if (x >= 24-good.width && x <= 79 && y >= 131-good.height && y <= 136){
    let size = lastD.length;
    if (lastD[size-1] == "left"){
      x = x+5;
    }
    else if (lastD[size-1] == "right"){
      x = x-5;
    }
    else if (lastD[size-1] == "up"){
      y = y+5;
    }
    else if (lastD[size-1] == "down"){
      y = y-5;
    }
  }

  c = color (0,0,0);
  fill(c);
  r = rect(24,131,5,30);

  if (x >= 24-good.width && x <= 29 && y >= 131-good.height && y <= 161){
    let size = lastD.length;
    if (lastD[size-1] == "left"){
      x = x+5;
    }
    else if (lastD[size-1] == "right"){
      x = x-5;
    }
    else if (lastD[size-1] == "up"){
      y = y+5;
    }
    else if (lastD[size-1] == "down"){
      y = y-5;
    }
  }

  c = color (0,0,0);
  fill(c);
  r = rect(49,157,30,5);

  if (x >= 49-good.width && x <= 79 && y >= 157-good.height && y <= 162){
    let size = lastD.length;
    if (lastD[size-1] == "left"){
      x = x+5;
    }
    else if (lastD[size-1] == "right"){
      x = x-5;
    }
    else if (lastD[size-1] == "up"){
      y = y+5;
    }
    else if (lastD[size-1] == "down"){
      y = y-5;
    }
  }

  c = color (0,0,0);
  fill(c);
  r = rect(5,184,24,5);

  if (x >= 5-good.width && x <= 29 && y >= 184-good.height && y <= 189){
    let size = lastD.length;
    if (lastD[size-1] == "left"){
      x = x+5;
    }
    else if (lastD[size-1] == "right"){
      x = x-5;
    }
    else if (lastD[size-1] == "up"){
      y = y+5;
    }
    else if (lastD[size-1] == "down"){
      y = y-5;
    }
  }

  c = color (0,0,0);
  fill(c);
  r = rect(5,289,25,5);

  if (x >= 5-good.width && x <= 30 && y >= 289-good.height && y <= 294){
    let size = lastD.length;
    if (lastD[size-1] == "left"){
      x = x+5;
    }
    else if (lastD[size-1] == "right"){
      x = x-5;
    }
    else if (lastD[size-1] == "up"){
      y = y+5;
    }
    else if (lastD[size-1] == "down"){
      y = y-5;
    }
  }

  c = color (0,0,0);
  fill(c);
  r = rect(350,104,24,5);

  if (x >= 350-good.width && x <= 374 && y >= 104-good.height && y <= 109){
    let size = lastD.length;
    if (lastD[size-1] == "left"){
      x = x+5;
    }
    else if (lastD[size-1] == "right"){
      x = x-5;
    }
    else if (lastD[size-1] == "up"){
      y = y+5;
    }
    else if (lastD[size-1] == "down"){
      y = y-5;
    }
  }

  c = color (0,0,0);
  fill(c);
  r = rect(350,184,25,5);

  if (x >= 350-good.width && x <= 375 && y >= 184-good.height && y <= 189){
    let size = lastD.length;
    if (lastD[size-1] == "left"){
      x = x+5;
    }
    else if (lastD[size-1] == "right"){
      x = x-5;
    }
    else if (lastD[size-1] == "up"){
      y = y+5;
    }
    else if (lastD[size-1] == "down"){
      y = y-5;
    }
  }

  c = color (0,0,0);
  fill(c);
  r = rect(350,289,25,5);

  if (x >= 350-good.width && x <= 375 && y >= 289-good.height && y <= 294){
    let size = lastD.length;
    if (lastD[size-1] == "left"){
      x = x+5;
    }
    else if (lastD[size-1] == "right"){
      x = x-5;
    }
    else if (lastD[size-1] == "up"){
      y = y+5;
    }
    else if (lastD[size-1] == "down"){
      y = y-5;
    }
  }

  c = color (0,0,0);
  fill(c);
  r = rect(51,184,30,5);

  if (x >= 51-good.width && x <= 81 && y >= 184-good.height && y <= 189){
    let size = lastD.length;
    if (lastD[size-1] == "left"){
      x = x+5;
    }
    else if (lastD[size-1] == "right"){
      x = x-5;
    }
    else if (lastD[size-1] == "up"){
      y = y+5;
    }
    else if (lastD[size-1] == "down"){
      y = y-5;
    }
  }

  c = color (0,0,0);
  fill(c);
  r = rect(74,184,5,30);

  if (x >= 74-good.width && x <= 79 && y >= 184-good.height && y <= 214){
    let size = lastD.length;
    if (lastD[size-1] == "left"){
      x = x+5;
    }
    else if (lastD[size-1] == "right"){
      x = x-5;
    }
    else if (lastD[size-1] == "up"){
      y = y+5;
    }
    else if (lastD[size-1] == "down"){
      y = y-5;
    }
  }

  c = color (0,0,0);
  fill(c);
  r = rect(24,209,25,5);

  if (x >= 24-good.width && x <= 49 && y >= 209-good.height && y <= 214){
    let size = lastD.length;
    if (lastD[size-1] == "left"){
      x = x+5;
    }
    else if (lastD[size-1] == "right"){
      x = x-5;
    }
    else if (lastD[size-1] == "up"){
      y = y+5;
    }
    else if (lastD[size-1] == "down"){
      y = y-5;
    }
  }

  //If the player and the enemy are on the same position, make the player lose.
  let distance4 = int(dist(x, y, xb, yb));
  if (distance4 < 10){
    score = 12;
    c =  color(0,0,0);
    fill(c);
    textSize(36)
    text('YOU LOSE :(', 450,200);
    //Set the player positions to the same point so you cant play anymore.
    x = 182;
    y = 125;
    bx = 182;
    by = 125;
  }

}


// Add an event listener to listen to the key presses.
document.addEventListener('keydown',function(go){
       var keycode = go.keycode? go.keycode : go.which;
    //For each keypress perform the appropriate function.
     if (keycode == 37||keycode == 61){

       left();
     }
     else if (keycode == 38||keycode == 77){

       up();
     }
     else if (keycode == 39||keycode == 64){

       right();
     }
     else if (keycode == 40||keycode == 73){

       down();
     }
 });

 function left(){
   //Move the player in a particular direction.
   x = x-5;
   //Try and predict the user position in the neural net.
   let ys = model.predict(xs);
   draw();
   //Input the last player position into the array.
   lastD.push("left");

 }
 //Repeat for each direction.
 function up(){
   y = y-5;
   let ys = model.predict(xs);
   draw();
   lastD.push("up");
 }
 function right(){
   x = x+5;
   let ys = model.predict(xs);
   draw();
   lastD.push("right");
 }
 function down(){
   y = y+5;
   let ys = model.predict(xs);
   draw();
   lastD.push("down");
 }
 //Create neural network.
 const model = tf.sequential();
 //Add input layer
 model.add(tf.layers.dense({inputShape: [2], activation:"sigmoid", units: 16}));
 //Add hidden layer
 model.add(tf.layers.dense({inputShape: [16], activation:"sigmoid", units: 2}));
 //Add output layer.
 model.add(tf.layers.dense({activation:"sigmoid", units: 2}));
 //Recieve the loss from the data in the neural net and train.
 model.compile({loss:tf.losses.absoluteDifference, optimizer: tf.train.adam(.06)});
 //Create and array of tensors of the player position.
 const xs = tf.tensor2d([[x, y]]);
 //Make it so the tensor can be changed.
 const vxs = tf.variable(xs);
//Predict the output of the model.
let ys = model.predict(vxs);
//Fit all the tensors to the model and run 500 times.
model.fit(vxs, ys, {epochs:500}).then((fitten) => console.log(fitten));
//Print the model.
 console.log(model);
