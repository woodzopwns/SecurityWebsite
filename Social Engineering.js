//Set a variable to see which fact the user is on.
count = 0;

function setup() {
  //Create a canvas for the fact to appear on.
  var canvas = createCanvas(200,230);
  canvas.parent('funfact');
  //Create a button to run a function when clicked.
  var yeet = createButton('Fact');

  setTimeout(rfact, 10000);
}

  function timer(){
      setTimeout(rfact, 10000);
  }

function draw() {
  let c = color(170,170,170);
  fill(c);
  noStroke();
  rect(0,0,200,230);
  c = color(209,209,209)
  fill(c);
  noStroke();
  rect(10,10,180,165);
  //For increasing values of count change the text in the box.
  if (count == 0){
    c = color(0,0,0);
    fill(c);
    textSize(16);
    text('Did you know\nthat emails made\nup 68% of\nphishing scams\nin 2015.', 25, 40);
    c = color(0,0,0);
    fill(c);
    textSize(8);
    text('https://www.actionfraud.police.uk/news/action-fraud-\nreveals-that-it-receives-8000-reports-of-phishing-\nscams-every-month', 10, 205)
  }
  else if (count == 1){
    c = color(0,0,0);
    fill(c);
    textSize(16);
    text('The number of new\ntypes of malware has\ndecreased over the\npast 9 years however,\nthe total number of\nviruses has increased\nto 900 million in 2019.', 25, 40);
    c = color(0,0,0);
    fill(c);
    textSize(8);
    text('https://www.av-test.org/en/statistics/malware/', 10, 205)
  }
  else if (count >= 2){
    c = color(0,0,0);
    fill(c);
    textSize(16);
    text('Hacking and\nmisusing data\nin the UK\ncould result\nin a ten year\nprison sentence\nfor extreme cases.', 25, 40);
    c = color(0,0,0);
    fill(c);
    textSize(8);
    text('https://en.wikipedia.org/wiki/Computer\n_Misuse_Act_1990#The_Computer_Misuse_Act', 10, 205)
  }

}
function rfact(){
  //Increase values of count for each button press.
  count = count+1;
  //Set counts value to 1 again once all the facts have been cycled through.
  if (count == 3){
    count = 0;
  }
  timer();
}
