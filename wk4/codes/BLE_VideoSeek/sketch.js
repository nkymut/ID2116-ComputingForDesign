/* micro:bit -> p5*js BLE communication example. 
   Control video playback with microbit gesture input.

video ref: https://www.youtube.com/watch?v=zdR9KGCjb0w

*/


//variable to store microbit device connection
let uBitDevice;

let isPlaying = false;

let video;

let playButton;
let slider;

let gestureStatus;

function preload() {
  // specify multiple formats for different browsers
  video = createVideo('videos/jajambo.mp4', videoLoaded);

}

function setup() {
  createCanvas(800, 600);

  //define connect and disconnect buttons
  const connectButton = createButton("Connect");
  connectButton.mousePressed(connectBle);

  const disconnectButton = createButton("Disconnect");
  disconnectButton.mousePressed(disconnectBle);

  playButton = createButton('play');

  playButton.mousePressed(toggleVid); // attach button listener

  //video.showControls();
}

function draw() {
  background(0);
  image(video, 0, 0, width, height);
}

//handleBleData event function will be called 
//when the bluetooth data is received.

function handleBleData(status) {

  if (gestureStatus !== status) { //check if status is different from previous

    switch (status) {
      case "stable":
        print("Stable position to pause video.");
        video.pause();
        break;
      case "up":
        break;
      case "down":
        break;
      case "left":
        break;
      case "right":
        print("Tilt Right to play video.");
        video.play();
        break;
    }

    print("update:"+status);
    
    gestureStatus = status; //update the status
  }

}

function videoLoaded() {
  video.hide();
  slider = createSlider(0, video.duration(), 0, 0.01);
  slider.input(seekVid);
  slider.style("width","610px");
}

// plays or pauses the video depending on current state
function toggleVid() {
  if (isPlaying) {
    video.pause();
    playButton.html('play');
  } else {
    video.play();
    playButton.html('pause');
  }
  isPlaying = !isPlaying;
}


function seekVid() {
  let val = slider.value();
  print(val);
  video.time(val);
}

function keyPressed(){
  if (keyCode === 32) { //press SPACE BAR to turn on fullscreen.
    toggleFullScreen();
  }
}


function toggleFullScreen(){
    let fs = fullscreen();
    fullscreen(!fs);
}



