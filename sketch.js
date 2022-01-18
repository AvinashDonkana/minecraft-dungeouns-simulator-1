//var WAIT = 0;
//var PLAY = 1;
//var END = 2;
////var gameState = WAIT;
var bgImg;
var alex,steve;
var alexImg,steveImg;
var zombie1,zombie2,zombie3,zombie4;
var flippedZombie,flippedZombie1,flippedZombie2,flippedZombie4;
var zombie1Img,zombie2Img,zombie3Img,zombie4Img;
var flippedZombieImg,flippedZombie1Img,flippedZombie2Img,flippedZombie4Img;
var pillager,ravager,ravger2;
var flippedPillager,flippedRavager1,flippedRavger2;
var pillagerImg,ravagerImg,ravager2Img;
var flippedPillagerImg,flippedRavager1Img,flippedRavager2Img;
var killSound,gameSound;
var EnemysGroup,zombie1,zombie2,zombie3,zombie4,pillager,ravager,ravger2;
var flippedEnemysGroup,flippedZombie,flippedZombie1,flippedZombie2,flippedZombie4,flippedPillager,flippedRavager1,flippedRavager2;
var invisibleGround;
var Arrow;
var ArrowImg;

var score = 0;

function preload(){
bgImg = loadImage("edited photos/background.jpg");
alexImg = loadImage("edited photos/alex.png");
steveImg = loadImage("edited photos/steve.png");
zombie1Img= loadImage("edited photos/zombie1.png");
flippedZombieImg= loadImage("edited photos/flippedZombie.png");
zombie2Img=loadImage("edited photos/zombie2.png");
flippedZombie1Img= loadImage("edited photos/flippedZombie1.png");
zombie3Img=loadImage("edited photos/zombie3.png");
flippedZombie2Img= loadImage("edited photos/flippedZombie2.png");
zombie4Img= loadImage("edited photos/zombie4.png");
flippedZombie4Img= loadImage("edited photos/flippedZombie4.png");
pillagerImg= loadImage("edited photos/pillager.png");
flippedPillagerImg= loadImage("edited photos/flippedPillager.png");
ravagerImg= loadImage("edited photos/ravager.png");
flippedRavager1Img= loadImage("edited photos/flippedRavager1.png");
ravager2Img=loadImage("edited photos/ravger2.png");
flippedRavager2Img= loadImage("edited photos/flippedRavger2.png");
ArrowImg= loadImage("edited photos/Arrow.png");



killSound = loadSound("edited photos/mixkit-sword-slash-swoosh-1476.mp3");
gameSound = loadSound("edited photos/hostile mobs.mp3");

}


//setup function

function setup(){
createCanvas(1500,700);

alex= createSprite(150,500,30,80);
alex.addImage(alexImg);
alex.scale=0.5;
alex.visible = true;

steve= createSprite(150,500,30,80);
steve.addImage(steveImg);
steve.scale=0.3;
steve.visible = false;

zombie1= createSprite(950,500,30,80);
zombie1.velocityX = -2;
zombie1.addImage(zombie1Img);
zombie1.scale=0.4 ;
zombie1.visible=false;

flippedZombie= createSprite(950,500,30,80);
flippedZombie.velocityX = 2;
flippedZombie.addImage(flippedZombieImg);
flippedZombie.scale=0.4 ;
flippedZombie.visible=false;

zombie2= createSprite(120,300,30,80);
zombie2.addImage(zombie2Img);
zombie2.scale=0.7;
zombie2.visible=false;

flippedZombie1= createSprite(950,500,30,80);
flippedZombie1.velocityX = 2;
flippedZombie1.addImage(flippedZombie1Img);
flippedZombie1.scale=0.4 ;
flippedZombie1.visible=false;

zombie3= createSprite(120,300,30,80);
zombie3.addImage(zombie3Img)
zombie3.scale=0.9;
zombie3.visible=false;

flippedZombie2= createSprite(950,500,30,80);
flippedZombie2.velocityX = 2;
flippedZombie2.addImage(flippedZombie2Img);
flippedZombie2.scale=0.4 ;
flippedZombie2.visible=false;

zombie4= createSprite(120,300,30,80);
zombie4.addImage(zombie4Img);
zombie4.scale=0.7;
zombie4.visible=false;


flippedZombie4= createSprite(950,500,30,80);
flippedZombie4.velocityX = 2;
flippedZombie4.addImage(flippedZombie4Img);
flippedZombie4.scale=0.4 ;
flippedZombie4.visible=false;

pillager= createSprite(120,300,30,80);
pillager.addImage(pillagerImg)    
pillager.scale=0.7;
pillager.visible=false;

flippedPillager= createSprite(120,300,30,80);
flippedPillager.addImage(flippedPillagerImg)    
flippedPillager.scale=0.7;
flippedPillager.visible=false;

ravager= createSprite(120,300,30,80);
ravager.addImage(ravagerImg);
ravager.scale=0.7;
ravager.visible=false;

flippedRavager1= createSprite(120,300,30,80);
flippedRavager1.addImage(flippedRavager1Img);
flippedRavager1.scale=0.7;
flippedRavager1.visible=false;

ravager2= createSprite(120,300,30,80);
ravager2.addImage(ravager2Img);
ravager2.scale=0.7;
ravager2.visible=false;

flippedRavager2= createSprite(120,300,30,80);
flippedRavager2.addImage(flippedRavager2Img);
flippedRavager2.scale=0.7;
flippedRavager2.visible=false;


invisibleGround = createSprite(450,650,2500,20);
invisibleGround.visible=false;

//gameSound.play();
//creating groups
EnemysGroup = createGroup();
flippedEnemysGroup = createGroup();


}

//draw function

function draw(){
background(bgImg);

//spawnEnemys();


//textSize(30);
//fill("red");
//text("Score: " + score, 400, 75);

flippedEnemysGroup.velocityX = 2 ;
//spawnZombies();

if(keyDown("RIGHT_ARROW")){
  alex.x = alex.x + 4;
}
if(keyDown("LEFT_ARROW")){
  alex.x = alex.x - 4;
}
if(keyDown("UP_ARROW") && alex.y>=450){
  alex.velocityY = alex.velocityY - 3;
}
alex.velocityY = alex.velocityY + 0.7;
if(keyDown("D")){
steve.x = steve.x+4;
}
if(keyDown("A")){
steve.x = steve.x-4;
}
if(keyDown("W") && steve.y>=450){
steve.velocityY = steve.velocityY - 3;
}
steve.velocityY = steve.velocityY + 0.7;

//console.log(alex.y);
 if(keyDown("space")){
  killSound.play();
 }

 alex.collide(invisibleGround);
 

 


 if(alex.isTouching(EnemysGroup)){
   EnemysGroup.destroyEach();
   score = score + 10;
 }


drawSprites();

}
//function spawnEnemys(){
 // if(frameCount % 200 === 0){

   /// var enemy = createSprite(1500,600,30,70);

    //enemy.velocityX = -2;

    //var randomNum = Math.round(random(1,7));

    //switch(randomNum){
      //  case 1: enemy.addImage(zombie1Img);
        //break;
        //case 2: enemy.addImage(zombie2Img);
        //break;
        //case 3: enemy.addImage(zombie3Img);        
        //break;
        //case 4: enemy.addImage(zombie4Img);
        //break;
        //case 5: enemy.addImage(pillagerImg);
        //break;
        //case 6: enemy.addImage(ravagerImg);
        //break;
        //case 7: enemy.addImage(ravager2Img);
        //break;
        //default: break;
    //}
   // 
    //enemy.scale = 0.4;
    //enemy.lifetime = 600;
    //EnemysGroup.add(enemy);
 //}
//}



 


