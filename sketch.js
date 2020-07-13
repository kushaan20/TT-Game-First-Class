const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var table;
var player1image, player1;
var sky;

function preload(){
  player1image = loadImage("racket.png");
  tableImage = loadImage("Table.png");
  skyimage = loadImage("download.jpeg");
}

function setup() {
  createCanvas(800,800);
  table = createSprite(400,500);
  table.addImage("table1Image", tableImage);
  table.scale = 2;
  player1 = createSprite(300,600);
  player1.addImage("playerImage", player1image);
  player1.scale = 0.6;
  sky = createSprite(400,25,800,50)
  sky.addImage("skyImage", skyimage);
}

function draw() {
  background("blue");  
  drawSprites();
}

