const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100); 

    iron = new Iron(500, 100, 15, 15);
    rubber = new Rubber(100,200, 17.5);
    stone = new Stone(400, 300, 34, 34);

    hammer1 = new Hammer(200,200);


  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    iron.display();
    rubber.display();
    stone.display();
    hammer1.display();
    

    
 
}