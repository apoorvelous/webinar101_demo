const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  var canvas = createCanvas(800, 600);
  engine = Engine.create();
  world = engine.world;

  wall1 = new Wall(400, 0, 800, 1); //top wall
  wall2 = new Wall(400, 600, 800, 1); //bottom wall
  wall3 = new Wall(0, 300, 1, 800); //left wall
  wall4 = new Wall(800, 300, 1, 800); //right wall

  box1 = new Box(100, 100, 100, 20, "red");
  box2 = new Box(300, 100, 100, 20, "blue");
  box3 = new Box(500, 100, 100, 20, "yellow");
  box4 = new Box(700, 100, 100, 20, "green");
}

function draw() {
  background("white");
  Engine.update(engine);
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
}

function mousePressed() {
  var box_list = [box1, box2, box3, box4]
  for (let i = 0; i < box_list.length; i++) {
    Matter.Body.setPosition(box_list[i].body, {x: box_list[i].body.position.x + Math.floor(Math.random() + 50), y: box_list[i].body.position.y - Math.floor(Math.random() + 50)})
  }
}
