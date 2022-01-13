// FUNCTION TO FIND VACCANT SPACE IN MAP

let vaccantPosition = [];

function getVaccantPosition() {
  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COLUMN; j++) {
      if (COLLISION_ARRAY[i][j] === 0) {
        vaccantPosition.push({
          X: j,
          Y: i,
        });
      }
    }
  }
}

//FUNCTION TO GENERATE RANDOM INTEGER

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// FUNCTION TO DETECT COLLSION BETWEE PLAYER AND GAME ASSET OR ENEMY

function detectCollision(xPosition, yPosition, height, width) {
  let playerTop = user.getTop();
  let playerLeft = user.getLeft();
  let playerRight = user.getRight();
  let playerBottom = user.getBottom();
  if (
    playerRight > xPosition &&
    playerLeft < xPosition + width &&
    playerBottom > yPosition &&
    playerTop < yPosition + height
  ) {
    return true;
  } else {
    return false;
  }
}

// FUNCTION TO INDENTIFY WHETHER THE MOUSE POSITION IS INSIDE CANVAS ELEMENT

function detectMouseCollision(
  mouseXPosition,
  mouseYPosition,
  elementWidth,
  elementHeight,
  elementXPosition,
  elementYPosition
) {
  if (
    mouseXPosition > elementXPosition &&
    mouseXPosition < elementXPosition + elementWidth &&
    mouseYPosition > elementYPosition &&
    mouseYPosition < elementYPosition + elementHeight
  ) {
    return true;
  } else {
    return false;
  }
}

// FUNCTION TO RESET THE GAME VARIABE

function reset() {
  SCORE = 0;
  FUEL = 100;
  HEALTH = 100;
  LIFE = 02;
  coinArray = [];
  groundEnemyArray = [];
  spaceEnemyArray = [];
  user.xPosition = 30;
  user.yPosition = 30;
  user.mapX = 1;
  user.mapY = 1;
  getVaccantPosition();
}
