let canvas = /** @type {HTMLCanvasElement} */ (
  document.querySelector("#canvas")
);
let ctx = canvas.getContext("2d");

let MAP = [];
let COLLISION_ARRAY = [];
let COIN_COUNT;
let STAGE = 1;

let getReady = true;
let playing = false;
let gameOver = false;
let play = false;
let playAudio = false;
let stageState;

//LOCAL STORAGE
let BEST_SCORE;
if (localStorage.getItem("best") === null) {
  BEST_SCORE = 0;
} else {
  BEST_SCORE = localStorage.getItem("best");
}

if (localStorage.getItem("stage") === null) {
  stageState = ["unlocked", "locked", "locked"];
  localStorage.setItem("stage", JSON.stringify(stageState));
} else {
  stageState = JSON.parse(localStorage.getItem("stage"));
}

// RUN FUNCTION ONY ONCE IN REQUEST ANIMATION FRAME
let COIN_INITILIZE = false;
let ENEMY_INITILIZE = false;

//COUNTER

let COUNTER = 0;
let LIFE_DISPLAY_COUNT = 0;
let FUEL_DISPLAY_COUNT = 0;
let HEALTH_DISPLAY_COUNT = 0;
let BULLET_COUNT = 3;
let BULLET_FIRED = false;

//HEALTH FUEL LIFE COUNT SCORE

let SCORE = 0;
let FUEL = 100;
let HEALTH = 100;
let LIFE = 02;

//PLAYER
let user = new Player(CHARACTER_HEIGHT, CHARACTER_WIDTH, 30, 660);

//BULLET ARRAY

let bulletArray = [];

//ENEMY

let groundEnemyArray = [];
let spaceEnemyArray = [];

//MAP
let map = new Map();

//STATUS BAR

let healthStatus = new StatusBar(
  healthImage,
  HEALTH_SPRITE_WIDTH,
  HEALTH_SPRITE_HEIGHT,
  30,
  "#a82b18",
  60,
  690,
  200,
  30
);
let fuelStatus = new StatusBar(
  fuelImage,
  FUEL_SPRITE_WIDTH,
  FUEL_SPRITE_HEIGHT,
  300,
  "#f0e9e9",
  330,
  690,
  200,
  30
);

//COIN
let coinArray = [];

//LIFE
let lifeArray = [];

//HEALTH
let healthArray = [];

// FUEL
let fuelArray = [];

//FPS CONTROL
let fpsInterval, then, now, startTime, elapsed;

function startGameLoop(fps) {
  fpsInterval = 1000 / fps;
  then = Date.now();
  startTime = then;
  gameLoop();
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (playAudio === true) {
    GAME_AUDIO.play();
  } else {
    GAME_AUDIO.pause();
  }

  if (getReady === true) {
    ctx.drawImage(
      backgroundImg,
      0,
      0,
      BACKGROUND_WIDTH,
      BACKGROUND_HEIGHT,
      0,
      0,
      canvas.width,
      canvas.height
    );
    ctx.drawImage(
      logoImg,
      0,
      0,
      LOGO_WIDTH,
      LOGO_HEIGHT,
      canvas.width / 2 - 100,
      canvas.height / 2 - 125,
      200,
      50
    );
    for (let index = 0; index < 32; index++) {
      ctx.drawImage(startImg, 436, 368, 100, 104, index * 30, 680, 30, 40);
    }
    ctx.drawImage(startImg, 358, 180, 177, 154, 0, 530, 150, 150);
    ctx.drawImage(
      startImg,
      0,
      11,
      146,
      53,
      canvas.width / 2 - 100,
      canvas.height / 2 - 20,
      200,
      50
    );
    ctx.font = "12px Ubuntu";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.strokeText("HOW TO PLAY?", 35, 570);
    ctx.font = "9px Ubuntu";
    ctx.lineWidth = 1;
    ctx.strokeText("ARROW LEFT : LEFT", 35, 590);
    ctx.strokeText("ARROW RIGHT : RIGHT", 30, 600);
    ctx.strokeText("ARROW DOWN : DOWN", 30, 610);
    ctx.strokeText("ARROW UP : CLIMB", 35, 620);
    ctx.strokeText("SPACE : FLY", 60, 630);
    ctx.strokeText("F : FIRE", 60, 640);
    if (playAudio === false) {
      ctx.drawImage(audioOFFImg, 0, 112, 980, 870, 0, 0, 30, 30);
    } else if (playAudio === true) {
      ctx.drawImage(audioONImg, 0, 0, 980, 870, 0, 0, 30, 30);
    }
    ctx.drawImage(startImg, 358, 180, 177, 154, 800, 530, 150, 150);
    ctx.font = "15px Ubuntu";
    ctx.lineWidth = 2;
    ctx.strokeText(`BEST SCORE: ${BEST_SCORE}`, 825, 590);
    ctx.fill();
    addEventListener("click", (e) => {
      let rect = canvas.getBoundingClientRect();
      let xPosition = e.clientX - rect.left;
      let yPosition = e.clientY - rect.top;
      if (
        detectMouseCollision(
          xPosition,
          yPosition,
          200,
          50,
          canvas.width / 2 - 100,
          canvas.height / 2 - 20
        )
      ) {
        play = true;
        getReady = false;
      }
      if (detectMouseCollision(xPosition, yPosition, 30, 30, 0, 0)) {
        playAudio = !playAudio;
      }
    });
  } else if (play === true) {
    ctx.drawImage(
      backgroundImg,
      0,
      0,
      BACKGROUND_WIDTH,
      BACKGROUND_HEIGHT,
      0,
      0,
      canvas.width,
      canvas.height
    );
    ctx.drawImage(
      logoImg,
      0,
      0,
      LOGO_WIDTH,
      LOGO_HEIGHT,
      canvas.width / 2 - 100,
      canvas.height / 2 - 125,
      200,
      50
    );
    for (let index = 0; index < 32; index++) {
      ctx.drawImage(startImg, 436, 368, 100, 104, index * 30, 680, 30, 40);
    }
    ctx.drawImage(startImg, 358, 180, 177, 154, 0, 530, 150, 150);

    if (playAudio === false) {
      ctx.drawImage(audioOFFImg, 0, 112, 980, 870, 0, 0, 30, 30);
    } else if (playAudio === true) {
      ctx.drawImage(audioONImg, 0, 0, 980, 870, 0, 0, 30, 30);
    }
    ctx.drawImage(cancelImg, 0, 0, 258, 258, 930, 0, 30, 30);
    ctx.drawImage(startImg, 182, 0, 144, 162, 400, 530, 150, 150);
    ctx.drawImage(startImg, 358, 180, 177, 154, 800, 530, 150, 150);
    ctx.font = "25px Ubuntu";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.strokeText("STAGE 1", 430, 570);
    ctx.strokeText("STAGE 2", 430, 610);
    ctx.strokeText("STAGE 3", 430, 650);
    ctx.font = "12px Ubuntu";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.strokeText("HOW TO PLAY?", 35, 570);
    ctx.font = "9px Ubuntu";
    ctx.lineWidth = 1;
    ctx.strokeText("ARROW LEFT : LEFT", 35, 590);
    ctx.strokeText("ARROW RIGHT : RIGHT", 30, 600);
    ctx.strokeText("ARROW DOWN : DOWN", 30, 610);
    ctx.strokeText("ARROW UP : CLIMB", 35, 620);
    ctx.strokeText("SPACE : FLY", 60, 630);
    ctx.strokeText("F : FIRE", 60, 640);
    ctx.font = "15px Ubuntu";
    ctx.lineWidth = 2;
    ctx.strokeText(`BEST SCORE: ${BEST_SCORE}`, 825, 590);
    if (stageState[1] === "locked") {
      ctx.drawImage(levelLockedImg, 0, 0, 512, 512, 410, 590, 20, 20);
    }

    if (stageState[2] === "locked") {
      ctx.drawImage(levelLockedImg, 0, 0, 512, 512, 410, 630, 20, 20);
    }

    addEventListener("click", (e) => {
      let rect = canvas.getBoundingClientRect();
      let xPosition = e.clientX - rect.left;
      let yPosition = e.clientY - rect.top;
      if (detectMouseCollision(xPosition, yPosition, 120, 40, 410, 542)) {
        STAGE = 1;
        play = false;
        playing = true;
      }
      if (
        detectMouseCollision(xPosition, yPosition, 120, 40, 410, 582) &&
        stageState[1] === "unlocked"
      ) {
        STAGE = 2;
        play = false;
        playing = true;
      }
      if (
        detectMouseCollision(xPosition, yPosition, 120, 40, 410, 622) &&
        stageState[2] === "unlocked"
      ) {
        STAGE = 3;
        play = false;
        playing = true;
      }
      if (detectMouseCollision(xPosition, yPosition, 30, 30, 0, 0)) {
        playAudio = !playAudio;
      }
      if (detectMouseCollision(xPosition, yPosition, 30, 30, 930, 0)) {
        play = false;
        getReady = true;
      }
    });
  } else if (playing === true) {
    COUNTER++;
    if (STAGE === 1) {
      MAP = MAP_STAGE_1;
      COLLISION_ARRAY = COLLISION_ARRAY_STAGE_1;
      coinPosition = COIN_POSITION_STAGE_1;
      if (COIN_INITILIZE === false) {
        initilizeCoin();
      }
      groundEnemy = GROUND_ENEMY_STAGE_1;
      spaceEnemy = SPACE_ENEMY_STAGE_1;
      if (ENEMY_INITILIZE === false) {
        initilizeEnemy();
      }
      getVaccantPosition(COLLISION_ARRAY_STAGE_1);
    } else if (STAGE === 2) {
      stageState[1] = "unlocked";
      localStorage.setItem("stage", JSON.stringify(stageState));
      MAP = MAP_STAGE_2;
      COLLISION_ARRAY = COLLISION_ARRAY_STAGE_2;
      coinPosition = COIN_POSITION_STAGE_2;
      if (COIN_INITILIZE === false) {
        initilizeCoin();
      }
      groundEnemy = GROUND_ENEMY_STAGE_2;
      spaceEnemy = SPACE_ENEMY_STAGE_2;
      if (ENEMY_INITILIZE === false) {
        initilizeEnemy();
        ENEMY_INITILIZE = true;
      }
      getVaccantPosition(COLLISION_ARRAY_STAGE_2);
    } else if (STAGE === 3) {
      stageState[2] = "unlocked";
      localStorage.setItem("stage", JSON.stringify(stageState));
      MAP = MAP_STAGE_3;
      COLLISION_ARRAY = COLLISION_ARRAY_STAGE_3;
      coinPosition = COIN_POSITION_STAGE_3;
      if (COIN_INITILIZE === false) {
        initilizeCoin();
      }
      groundEnemy = GROUND_ENEMY_STAGE_3;
      spaceEnemy = SPACE_ENEMY_STAGE_3;
      if (ENEMY_INITILIZE === false) {
        initilizeEnemy();
        ENEMY_INITILIZE = true;
      }
      getVaccantPosition(COLLISION_ARRAY_STAGE_3);
    }
    generateAsset();

    map.drawMap(tilesImg);
    showStatusBar();

    collectCoins();
    user.drawPlayer(characterImg);
    drawEnemy();
    enemyPlayerCollision();
    bulletEnemyCollision();
    updateLife();
    updateFuel();
    updateHealth();
    user.isFalling();

    coinArray.forEach((coin) => {
      coin.drawCoin(coinImage);
    });

    lifeArray.forEach((life) => {
      life.drawLife(lifeImage);
    });

    healthArray.forEach((health) => {
      health.drawHealth(healthImage);
    });

    fuelArray.forEach((fuel) => {
      fuel.drawFuel(fuelImage);
    });

    bulletArray.forEach((bullet) => {
      bullet.drawBullet(bulletFireImage);
      bullet.updateBullet();
    });
  } else if (gameOver === true) {
    ctx.drawImage(
      backgroundImg,
      0,
      0,
      BACKGROUND_WIDTH,
      BACKGROUND_HEIGHT,
      0,
      0,
      canvas.width,
      canvas.height
    );
    ctx.drawImage(
      logoImg,
      0,
      0,
      LOGO_WIDTH,
      LOGO_HEIGHT,
      canvas.width / 2 - 100,
      canvas.height / 2 - 125,
      200,
      50
    );
    for (let index = 0; index < 32; index++) {
      ctx.drawImage(startImg, 436, 368, 100, 104, index * 30, 680, 30, 40);
    }
    ctx.drawImage(
      startImg,
      358,
      180,
      177,
      154,
      canvas.width / 2 - 150,
      canvas.height / 2 + 20,
      300,
      300
    );
    ctx.font = "30px Ubuntu";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.strokeText("GAME OVER !", 400, 460);
    ctx.font = "15px Ubuntu";
    ctx.strokeText(`SCORE : ${SCORE * 5}`, 450, 490);
    ctx.strokeText(`BEST SCORE : ${BEST_SCORE}`, 430, 510);
    ctx.strokeText("YES", 410, 590);
    ctx.strokeText("NO", 530, 590);
    ctx.font = "30px Ubuntu";
    ctx.strokeText("PLAY AGAIN ?", 395, 560);
    ctx.fill();

    addEventListener("click", (e) => {
      let rect = canvas.getBoundingClientRect();
      let xPosition = e.clientX - rect.left;
      let yPosition = e.clientY - rect.top;
      if (detectMouseCollision(xPosition, yPosition, 15, 28, 410, 577)) {
        reset();
        gameOver = false;
        play = true;
      } else if (detectMouseCollision(xPosition, yPosition, 15, 28, 530, 577)) {
        reset();
        gameOver = false;
        getReady = true;
      }
    });
  }

  COIN_COUNT = coinArray.length;
  if (COIN_COUNT === 0) {
    coinArray = [];
    groundEnemyArray = [];
    COLLISION_ARRAY = [];
    spaceEnemyArray = [];
    COIN_INITILIZE = false;
    ENEMY_INITILIZE = false;
    user.xPosition = 30;
    user.yPosition = 30;
    user.mapX = 1;
    user.mapY = 1;
    if (STAGE != 3) {
      STAGE++;
    } else {
      playing = true;
    }
  }
  if (SCORE * 5 > BEST_SCORE) {
    localStorage.setItem("best", SCORE * 5);
    BEST_SCORE = localStorage.getItem("best");
  }

  if (user.jumping === true && user.playerDirection === "right") {
    ctx.drawImage(
      fireImg,
      222,
      94,
      141,
      337,
      user.getLeft() + 4,
      user.getBottom(),
      10,
      10
    );
  } else if (user.jumping === true && user.playerDirection === "left") {
    ctx.drawImage(
      fireImg,
      222,
      94,
      141,
      337,
      user.getLeft() + 12,
      user.getBottom(),
      10,
      10
    );
  }
  requestAnimationFrame(gameLoop);

  if (playing === true) {
    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);
      user.animatePlayer();
      coinArray.forEach((coin) => {
        coin.animateCoin();
      });
      groundEnemyArray.forEach((enemy) => {
        enemy.updateEnemy();
        enemy.animateEnemy();
      });
      spaceEnemyArray.forEach((enemy) => {
        enemy.updateEnemy();
        enemy.animateEnemy();
      });

      if (BULLET_FIRED === true && BULLET_COUNT != 0) {
        let bullet = new Bullet(
          BULLET_FIRE_WIDTH,
          BULLET_FIRE_HEIGHT,
          user.getLeft(),
          user.getTop(),
          user.getDirection()
        );
        BULLET_COUNT -= 1;
        bulletArray.push(bullet);
      }
    }
  }
}

//function show the content of the status bar
function showStatusBar() {
  healthStatus.drawStatusBar(HEALTH);
  fuelStatus.drawStatusBar(FUEL);
  fuelStatus.drawStatusBar();
  ctx.drawImage(
    lifeImage,
    0,
    0,
    LIFE_SPRITE_WIDTH,
    LIFE_SPRITE_HEIGHT,
    570,
    690,
    TILES_WIDTH,
    TILES_HEIGHT
  );
  ctx.font = "30px Ubuntu";
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.strokeText(`*0${LIFE}`, 600, 715);
  ctx.strokeText(`SCORE : ${SCORE * 5}`, 800, 715);
  ctx.strokeText(`STAGE : ${STAGE}`, 400, 26);
  for (let index = 0; index < BULLET_COUNT; index++) {
    let bulletWidth = index * 10;
    ctx.drawImage(
      bullet,
      0,
      0,
      BULLET_WIDTH,
      BULLET_HEIGHT,
      710 + bulletWidth,
      690,
      10,
      30
    );
  }
  ctx.drawImage(cancelImg, 0, 0, 258, 258, 930, 0, 30, 30);
  if (playAudio === false) {
    ctx.drawImage(audioOFFImg, 0, 112, 980, 870, 0, 0, 30, 30);
  } else if (playAudio === true) {
    ctx.drawImage(audioONImg, 0, 0, 980, 870, 0, 0, 30, 30);
  }
  addEventListener("click", (e) => {
    let rect = canvas.getBoundingClientRect();
    let xPosition = e.clientX - rect.left;
    let yPosition = e.clientY - rect.top;
    if (detectMouseCollision(xPosition, yPosition, 30, 30, 930, 0)) {
      reset();
      playing = false;
      play = true;
    }
    if (detectMouseCollision(xPosition, yPosition, 30, 30, 0, 0)) {
      playAudio = !playAudio;
    }
  });
}

// function to draw enemy in the map from array containing enemy instances
function drawEnemy() {
  for (let i = 0; i < groundEnemyArray.length; i++) {
    let enemy = groundEnemyArray[i];
    enemy.drawEnemy(enemyGroundImg);
    enemy.drawHealthBar(enemy.getHealth());
  }
  for (let i = 0; i < spaceEnemyArray.length; i++) {
    let enemy = spaceEnemyArray[i];
    enemy.drawEnemy(enemySpaceImg);
    enemy.drawHealthBar(enemy.getHealth());
  }
}

// function to detect collision between enemy and player
function enemyPlayerCollision() {
  let enemyArray = [...groundEnemyArray, ...spaceEnemyArray];
  for (let index = 0; index < enemyArray.length; index++) {
    let enemyX = enemyArray[index].getLeft();
    let enemyY = enemyArray[index].getTop();
    if (detectCollision(enemyX, enemyY, TILES_HEIGHT, TILES_WIDTH)) {
      HEALTH -= 0.5;
      HURT_AUDIO.play();
    }
  }
}

// function to handle collision between bullet and enemy when user fire bullet

function bulletEnemyCollision() {
  for (let j = 0; j < bulletArray.length; j++) {
    let bulletX = bulletArray[j].getX();
    let bulletY = bulletArray[j].getY();
    for (let i = 0; i < groundEnemyArray.length; i++) {
      let enemyX = groundEnemyArray[i].getLeft();
      let enemyY = groundEnemyArray[i].getTop();

      if (
        bulletX > enemyX &&
        bulletY === enemyY &&
        user.playerDirection === "right"
      ) {
        groundEnemyArray[i].health -= 10;
        if (groundEnemyArray[i].getHealth() <= 0) {
          groundEnemyArray.splice(i, 1);
        } else {
        }
      } else if (
        bulletX < enemyX &&
        bulletY === enemyY &&
        user.playerDirection === "left"
      ) {
        groundEnemyArray[i].health -= 10;
        if (groundEnemyArray[i].getHealth() <= 0) {
          groundEnemyArray.splice(i, 1);
        } else {
        }
      }
    }
  }
}
// function bulletEnemyCollision() {
//   for (let i = 0; i < groundEnemyArray.length; i++) {
//     let enemyX = groundEnemyArray[i].getLeft();
//     let enemyY = groundEnemyArray[i].getTop();
//     for (let j = 0; j < bulletArray.length; j++) {
//       let bulletX = bulletArray[j].getX();
//       let bulletY = bulletArray[j].getY();
//       if (
//         bulletX + 30 > enemyX &&
//         bulletX < enemyX + 30 &&
//         bulletY + 30 > enemyY &&
//         bulletX < enemyY + 30
//       ) {
//         if (groundEnemyArray[i].getHealth() <= 0) {
//           groundEnemyArray.splice(i, 1);
//         } else {
//           groundEnemyArray[i].setHealth(10);
//         }
//       }
//     }
//   }
//   for (let i = 0; i < spaceEnemyArray.length; i++) {
//     let enemyX = spaceEnemyArray[i].getLeft();
//     let enemyY = spaceEnemyArray[i].getTop();
//     for (let j = 0; j < bulletArray.length; j++) {
//       let bulletX = bulletArray[j].getX();
//       let bulletY = bulletArray[j].getY();
//       if (
//         bulletX + 30 > enemyX &&
//         bulletX < enemyX + 30 &&
//         bulletY + 30 > enemyY &&
//         bulletX < enemyY + 30
//       ) {
//         spaceEnemyArray.splice(i, 1);
//       }
//     }
//   }
// }

// function to collect coins
function collectCoins() {
  for (let index = 0; index < coinArray.length; index++) {
    let coinX = coinArray[index].getLeft();
    let coinY = coinArray[index].getTop();
    if (detectCollision(coinX, coinY, TILES_HEIGHT, TILES_WIDTH)) {
      SCORE += 1;
      COIN_COLLECT.play();
      coinArray.splice(index, 1);
    }
  }
}

//function to update life
function updateLife() {
  for (let index = 0; index < lifeArray.length; index++) {
    let [left, top, ...rest] = lifeArray[index].getPosition();
    if (detectCollision(left, top, TILES_HEIGHT, TILES_WIDTH)) {
      LIFE += 1;
      lifeArray.splice(index, 1);
    }
  }
  if (LIFE != 0) {
    if (HEALTH <= 0) {
      LIFE -= 1;
      HEALTH = 100;
    }
  } else {
    LIFE = 0;
    HEALTH = 0;
    playing = false;
    gameOver = true;
  }
}

// function to update fuel
function updateFuel() {
  for (let index = 0; index < fuelArray.length; index++) {
    let [left, top, ...rest] = fuelArray[index].getPosition();
    if (detectCollision(left, top, TILES_HEIGHT, TILES_WIDTH)) {
      if (FUEL < 50) {
        FUEL += 50;
      } else {
        FUEL = 100;
      }
      fuelArray.splice(index, 1);
    }
  }
}

// function to update health when user collects health or gets damage
function updateHealth() {
  for (let index = 0; index < healthArray.length; index++) {
    let [left, top, ...rest] = healthArray[index].getPosition();
    if (detectCollision(left, top, TILES_HEIGHT, TILES_WIDTH)) {
      if (HEALTH < 50) {
        HEALTH += 50;
      } else {
        HEALTH = 100;
      }
      healthArray.splice(index, 1);
    }
  }
}

// function to generate game assest like bullet, health, life, fuel in certain time interval
function generateAsset() {
  if (COUNTER % 1200 === 0) {
    for (let index = 0; index < 1; index++) {
      let randomPositionIndex = getRandomIntInclusive(0, 383);
      let xPosition = vaccantPosition[randomPositionIndex].X * TILES_WIDTH;
      let yPosition = vaccantPosition[randomPositionIndex].Y * TILES_HEIGHT;
      let life = new Life(
        LIFE_SPRITE_HEIGHT,
        LIFE_SPRITE_WIDTH,
        xPosition,
        yPosition
      );
      lifeArray.push(life);
    }
  }

  if (lifeArray.length > 0) {
    LIFE_DISPLAY_COUNT++;
    if (LIFE_DISPLAY_COUNT % 900 === 0) {
      lifeArray = [];
      LIFE_DISPLAY_COUNT = 0;
    }
  }

  if (COUNTER % 2700 === 0) {
    for (let index = 0; index < 2; index++) {
      let randomPositionIndex = getRandomIntInclusive(0, 383);
      let xPosition = vaccantPosition[randomPositionIndex].X * TILES_WIDTH;
      let yPosition = vaccantPosition[randomPositionIndex].Y * TILES_HEIGHT;
      let health = new Health(
        HEALTH_SPRITE_HEIGHT,
        HEALTH_SPRITE_WIDTH,
        xPosition,
        yPosition
      );
      healthArray.push(health);
    }
  }

  if (healthArray.length > 0) {
    HEALTH_DISPLAY_COUNT++;
    if (HEALTH_DISPLAY_COUNT % 900 === 0) {
      healthArray = [];
      HEALTH_DISPLAY_COUNT = 0;
    }
  }

  if (COUNTER % 1800 === 0) {
    for (let index = 0; index < 1; index++) {
      let randomPositionIndex = getRandomIntInclusive(0, 383);
      let xPosition = vaccantPosition[randomPositionIndex].X * TILES_WIDTH;
      let yPosition = vaccantPosition[randomPositionIndex].Y * TILES_HEIGHT;
      let fuel = new Fuel(
        FUEL_SPRITE_HEIGHT,
        FUEL_SPRITE_WIDTH,
        xPosition,
        yPosition
      );
      fuelArray.push(fuel);
    }
  }

  if (fuelArray.length > 0) {
    FUEL_DISPLAY_COUNT++;
    if (FUEL_DISPLAY_COUNT % 900 === 0) {
      fuelArray = [];
      FUEL_DISPLAY_COUNT = 0;
    }
  }
}

user.jumpPlayer();
user.updatePlayer();

startGameLoop(8);

//INITILIZE COIN
function initilizeCoin() {
  for (let index = 0; index < coinPosition.length; index++) {
    let xPosition = coinPosition[index].X * 30;
    let yPosition = coinPosition[index].Y * 30;
    let coin = new Coin(COIN_HEIGHT, COIN_WIDTH, xPosition, yPosition);
    coinArray.push(coin);
  }
  COIN_INITILIZE = true;
}

//INILITIZE ENEMY
function initilizeEnemy() {
  for (let index = 0; index < groundEnemy.length; index++) {
    let xStart = groundEnemy[index].xStart;
    let yStart = groundEnemy[index].yStart;
    let xEnd = groundEnemy[index].xEnd;
    let yEnd = groundEnemy[index].yEnd;
    let direction = groundEnemy[index].direction;
    let health = groundEnemy[index].health;
    let enemy = new Enemy(
      xStart,
      yStart,
      xEnd,
      yEnd,
      ENEMY_HEIGHT,
      ENEMY_WIDTH,
      direction,
      health
    );
    groundEnemyArray.push(enemy);
  }

  for (let index = 0; index < spaceEnemy.length; index++) {
    let xStart = spaceEnemy[index].xStart;
    let yStart = spaceEnemy[index].yStart;
    let xEnd = spaceEnemy[index].xEnd;
    let yEnd = spaceEnemy[index].yEnd;
    let direction = spaceEnemy[index].direction;
    let health = spaceEnemy[index].health;
    let enemy = new Enemy(
      xStart,
      yStart,
      xEnd,
      yEnd,
      ENEMY_HEIGHT,
      ENEMY_WIDTH,
      direction,
      health
    );
    spaceEnemyArray.push(enemy);
  }

  ENEMY_INITILIZE = true;
}
