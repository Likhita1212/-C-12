var bombImg, bomb,pathImg, path,  coinImg, coin, energyImg, energy, JakeImg, Jake,  
 left_boundary, right_boundary, coinscore,   



function preload(){
 JakeImg=loadAnimation("Jake1.png", "Jake2.png", "Jake3.png", "Jake4.png","Jake5.png");
 pathImg=loadImage("Path.png");
 coinImg=loadImage("coin.png"); 

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;
  Jake=createSprite(180,340,50,170);
  Jake.addAnimation=("running", JakeImg);
  coin=createSprite(200,200,80,90);
  coin.addImage=(coinImg);
  coin.scale=0.3;
  coin=createSprite(100,200,80,90);
  coin.addImage =(coinImg);
  coin.scale = 0.3;
  coin.createSprite(300,200,80,90);
  coin.addImage = (coinImg);
  coin.scale = 0.3;
  left_boundary = createSprite(0,300,100,600);
  right_boundary = createSprite(390,300,80,600);
  left_boundary.visible = false; 
  right_boundary.visible = false;


}

function draw() {
  background(0);
  textSize=(10);
  text("coin score", 1, 200);
  textSize=(10);
  text("0", 20,230);
  path.velocityY=5;
  Jake.x=Worlfd.mouseX;
  if(path.y > 400){
    path.y = height/2;
  }
    if(Jake.isTouching(coin)){
     coinscore= coinscore+1; 
    }
}
  Jake.collide(left_boundary);
  Jake.collide(right_boundary);
  edges=createSprite();
  Jake.collide(edges);
  drawSprite();
  



