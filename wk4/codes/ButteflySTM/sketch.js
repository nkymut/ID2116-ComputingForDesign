/*
 * @name  State Transition Example
 * @description <p>Load a video with multiple formats and toggle between playing
 * and paused with a button press.
 * <p><em><span class="small"> To run this example locally, you will need at least
 * one video file, and the
 * <a href="http://p5js.org/reference/#/libraries/p5.dom">p5.dom library</a>.</span></em></p>
 * 
 * 
 digraph G {
  rankdir=LR;
  "Hover" -> "Hover" [label="video loop"]; 
  "Hover" -> "FlyAway" [label="mouse click"];
  "FlyAway" -> "ComeBack" [label="video ends"];
  "ComeBack" -> "Hover" [label="video ends"];
}
 */
let playing = false;

let videoBackground;


let butterflyVideoFiles = {"hover":"videos/Butterfly_Hover.webm","flyaway":"videos/Butterfly_Flyaway.webm","comeback":"videos/Butterfly_ComeBack.webm"} ;

let butterflyState = "hover";// {hover:1,flyaway:2,comeback:3};

let butterfly; 
let butterflyVideos = {};

let button;

function preload(){
  videoBackground = createVideo(['videos/daisy.webm']);
  

 
}

function setup() {
  // specify multiple formats for different browsers
  createCanvas(1280,720);
  // button = createButton('play');
  // button.mousePressed(toggleVid); // attach button listener
  for(let key in butterflyVideoFiles){
    console.log(key);
    let video = createVideo(butterflyVideoFiles[key])
    butterflyVideos[key] = video;
    video.hide();
  }
  videoBackground.loop();
  videoBackground.hide();
  
  butterflyVideos["hover"].loop();
  butterflyVideos["hover"].speed(0.5);

  butterflyVideos["flyaway"].onended(flyawayEnd);
  butterflyVideos["comeback"].onended(comebackEnd);


}

function draw(){
  image(videoBackground,0,0,1280,720);
  image(butterflyVideos[butterflyState],0,0,1280,720);
  
  
}

function mousePressed(){
  butterflyState = "flyaway";
  butterflyVideos[butterflyState].play();
}

function flyawayEnd(){
  console.log("end flyaway");
  butterflyState = "comeback";
  butterflyVideos["comeback"].play();
}

function comebackEnd(){
  console.log("end comeback");
  butterflyState = "hover";
  butterflyVideos["hover"].loop();

}
