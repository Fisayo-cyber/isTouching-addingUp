var fixedRect,
  movingRect;
var box
var box_2
var box_3
var result
function setup() {
  createCanvas(800, 400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(100, 100, 30, 70);
  movingRect.shapeColor = "red"
  fixedRect.shapeColor = "red"

  box = createSprite(200, 300, 60, 80)
  box_2 = createSprite(100, 300, 50, 60)
  box_3 = createSprite(179, 385, 45, 23)
}

function draw() {
  background(255, 255, 255);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  //console.log(fixedRect.x-movingRect.x)

  if (isTouching(movingRect, box)) {
    box.shapeColor = "yellow"
  } else {
    box.shapeColor = "blue"
  }

  if (isTouching(movingRect, box_2)) {
    box_2.height = box_2.height + 40
  } else {
    box_2.height = 60;
  }

  result = addingUp(20, 40);
  console.log(result);
  drawSprites();
}
