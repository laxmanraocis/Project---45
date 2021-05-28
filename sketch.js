var bg, bgImg;
var ground;
var player, playerImg;
var corona, coronaImg;
var start, startImg;
var heart;
var playButton, playImg;
var immune, imGroup;
var obstacle, obGroup;

var life = 3;
var score = 0;

var gameState = 0;

function preload(){
  bgImg = loadImage("road4.jpg");
  coronaImg = loadImage("corona.png");
  startImg = loadImage("bg1.png");
  heart = loadImage("heart.png");
  playImg = loadImage("playButon.png");
  playerImg = loadImage("man1.jpg","man2.png","man3.png","man4.png","man5.png","man6.png","man7.png","man8.png");
}

function setup(){
  createCanvas(1400,700);

  imGroup = new Group();
  obGroup = new Group();

  bg = createSprite(700,350,1400,700);
  bg.addImage("back",bgImg);
  bg.scale = 2;
  bg.velocityX = -7;
  bg.visible = false;
 
  start = createSprite(700,350,1400,700);
  start.addImage("starting",startImg);
  start.scale = 0.8;

  playButton = createSprite(700,350,200,100);
  playButton.addImage("play",playImg);
  playButton.scale = 0.6;

  ground = createSprite(700,370,1400,25);
  ground.visible = false;

  player = createSprite(250,335,30,80);
  player.addImage("Insaan",playerImg);
  player.scale = 0.8;
  player.visible = false;

   corona= createSprite(700,335,1400,700);
   corona.addImage("Covid-19",coronaImg);
   corona.scale = 0.8;
   corona.visible = false;
  
}

function draw(){
  background(0);

  drawSprites();

  fill("black");
  textSize(40);
  text("SCORE : "+score,1000,50);

if(mousePressed(playButton)){
  gameState = "play";

}
  
if(gameState === "play"){
    bg.visible = true;
    player.visible = true;
    ground.visible = true;
    corona.visible = true;
  }

  if(keyDown("space")){
    player.velocityY = -10;

  }
  player.velocityY = player.velocityY-5;

  var num = Math.round(random(1,2));

  if(num === 1){
    createImmunity();

  }

  if(num === 2){
    createObstacles;

  }

  if(player.isTouching(obGroup)){
    obGroup.destroyEach();
    life = life-1;

  }

  if(player.isTouching(imGroup)){
    imGroup.destroyEach();
    score = score+10;

  }

  if(life === 3){
    heart(50,50,70,70);
    heart(110,50,70,70);
    heart(180,50,70,70);

  }

  if(life === 2){
    heart(50,50,70,70);
    heart(110,50,70,70);

  }

  if(life === 1){
    heart(50,50,70,70);
  
  }

  if(gameState === "end"){
    fill("red");
    textSize(50);
    text("GAME OVER",700,350);

  }

}

function createObstacles(){
  var obstacle = createSprite(1400,335,30,80);
  obstacle.shapeColor = "red";
  obstacle.velocityX = -7;
  obGroup.add(obstacle);
}

function createImmunity(){
  var immune = createSprite(1400,335,30,80);
  immune.shapeColor = "green";
  immune.velocityX = -7;
  imGroup.add(immune);
}



