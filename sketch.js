const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  ground = new Ground(10,500,900,30)
  hero=new Hero(40,400,20)
  connect= new Fly(hero.body,{x:40,y:400})
}

function draw() {
  background("black");
  ground.display()
  hero.display()
  connect.display()
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX, y:mouseY})
}

