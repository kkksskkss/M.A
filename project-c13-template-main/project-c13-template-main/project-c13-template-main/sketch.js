var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var orange,orangeImg;
var red,redImage;
var select_sprites = Math.round(random(1,3));
  
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  

  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  
  rabbit.x  = World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);


  

  drawSprites();

  
  if  (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createapple();
    } else if (select_sprites == 2) {
      createorange();
    }else {
     createRed();
    }
  }

  
}
function createapple(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale=0.07;
  apple.velocityY = 3;
  apple.lifetime = 150


}

function createorange(){
  orange = createSprite(random(50,350),40,10,10);
  orange.addImage(orangeImg);
  orange.scale=0.08;
  orange.velocityY = 3;
  orange.lifetime = 150

}

function createRed(){
  red = createSprite(random(50,350),40,10,10);
  red.addImage(redImg);
  red.scale=0.06;
  red.velocityY = 3;
  red.lifetime = 150

}
