const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,rain,hail
var ice = [];
var maxDrops = 100;
var drops = [];
var engine, world;
var sunrise,night,sunset,day
var security,system

function preload()
{
 
  sunrise = loadImage("Sunrise.png")
  day = loadImage("Day.png")
  sunset = loadImage("Sunset.png")
  night = loadImage("Night.png")
}

function setup() 
{
  engine = Engine.create();
  world = engine.world;

  rain = createSprite(700,120,50,50)

  hail = createSprite(700,400,50,50)

  createCanvas(800,1000);
  security = new Security();
  system = new System();
 
 Engine.run(engine);
}

function draw() {
 
 
 
 
  
  security.display()
  

  drawSprites();
}