var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var next,play;
var database;

var form, player, game;
var  cw, cwImage, paperImg, roadImg, chest, c1, c1Img, c2, c2Img, c3, c3Img, c4, c4Img;

function preload(){
  c1Img = loadAnimation("c1/c1.0.png", "c1/c1.1.png", "c1/c1.2.png", "c1/c1.3.png", "c1/c1.4.png", "c1/c1.5.png");
  c2Img = loadAnimation("c2/c2.0.png", "c2/c2.1.png", "c2/c2.2.png", "c2/c2.3.png", "c2/c2.4.png", "c2/c2.5.png");
  c3Img = loadAnimation("c3/c3.0.png", "c3/c3.1.png", "c3/c3.2.png", "c3/c3.3.png", "c3/c3.4.png", "c3/c3.5.png");
  c4Img = loadAnimation("c4/c4.0.png", "c4/c4.1.png", "c4/c4.2.png", "c4/c4.3.png", "c4/c4.4.png", "c4/c4.5.png");
}
function setup(){
  canvas = createCanvas(1515,715);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
if(gameState===0){
  game.start();
}


if(gameState === 1){
  game.play();
}



//if (gameState === 0){
  /*cw = createSprite(400, 400);
  cw.addAnimation("a",cwImage);
  
drawSprites();
}*/

}
