var Ball, database;
var position;
var myballPosition


function setup() {

  //console.log(database);
  createCanvas(500, 500);

  Ball = createSprite(250, 250, 10, 10);
  Ball.shapeColor = "red";

  //initianlissing database
  database = firebase.database()
  //console.log(database)


  myballPosition = database.ref("ball/position")
  myballPosition.on("value", readPosition, showError)
  
  console.log(myballPosition)


}

function draw() {
  background("white");

  if (keyDown(LEFT_ARROW)) {
    writePosition(-1, 0);
  }
  else if (keyDown(RIGHT_ARROW)) {
    writePosition(1, 0);
  }
  else if (keyDown(UP_ARROW)) {
    writePosition(0, -1);
  }
  else if (keyDown(DOWN_ARROW)) {
    writePosition(0, +1);
  }
  drawSprites();

}

function writePosition(x, y) {
  database.ref("ball/position").set({
    x: Ball.x + x,
    y: Ball.y + y

  })
}

function readPosition(data) {
  position = data.val()
  console.log(position)
  Ball.x = position.x
  Ball.y = position.y
}

function showError() {
console.log("Error Occured")

}
