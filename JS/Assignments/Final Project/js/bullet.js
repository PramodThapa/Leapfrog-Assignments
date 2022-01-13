class Bullet {
  constructor(spriteWidth, spriteHeight, xPosition, yPosition, direction) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.direction = direction;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
    this.bulletFiredPosition = xPosition;
    this.bulletRange = 400;
  }

  drawBullet(image) {
    if (this.direction === "right") {
      ctx.drawImage(
        image,
        0,
        0,
        this.spriteWidth,
        this.spriteHeight,
        this.xPosition + TILES_WIDTH,
        this.yPosition,
        TILES_WIDTH,
        TILES_HEIGHT
      );
    } else if (this.direction === "left") {
      ctx.drawImage(
        image,
        0,
        0,
        this.spriteWidth,
        this.spriteHeight,
        this.xPosition,
        this.yPosition,
        TILES_WIDTH,
        TILES_HEIGHT
      );
    }
  }

  updateBullet() {
    if (this.direction === "left") {
      let mapX = Math.floor(this.yPosition / TILES_HEIGHT);
      let mapY = Math.floor(this.xPosition / TILES_WIDTH);
      if (
        this.xPosition < this.bulletFiredPosition - this.bulletRange ||
        COLLISION_ARRAY[mapX][mapY] === 1 ||
        COLLISION_ARRAY[mapX][mapY] === 2
      ) {
        bulletArray.shift();
      } else {
        this.xPosition -= 5;
      }
    } else if (this.direction === "right") {
      let mapX = Math.floor(this.yPosition / TILES_HEIGHT);
      let mapY = Math.floor((this.xPosition + TILES_WIDTH) / TILES_WIDTH);
      if (
        this.xPosition > this.bulletFiredPosition + this.bulletRange ||
        COLLISION_ARRAY[mapX][mapY] === 1 ||
        COLLISION_ARRAY[mapX][mapY] === 2
      ) {
        bulletArray.shift();
      } else {
        this.xPosition += 10;
      }
    }
  }

  getX() {
    return this.xPosition;
  }

  getY() {
    return this.yPosition;
  }
}

function fireBullet() {
  addEventListener("keydown", (e) => {
    if (e.key === "f") {
      BULLET_FIRED = true;
    }
  });
  addEventListener("keyup", (e) => {
    BULLET_FIRED = false;
  });
}

fireBullet();
