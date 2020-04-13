const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bob, slingShot;


function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    bob= new Bird(600,400);
    string = new SlingShot(bob.body,{x:600,y:0});
}

function draw(){
    background(255);
    Engine.update(engine);
    bob.display();
    string.display();
}
function mouseDragged(){ 
Matter.Body.setPosition(bob.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  
}