class Player {
  constructor(height, width, xPosition, yPosition) {
    this.height = height;
    this.width = width;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.playerDirection = "right";
    this.velocityX = 5;
    this.velocityY = 5;
    this.gravity = 1;
    this.mapX = 1;
    this.mapY = 22;
    this.frameX = 3;
    this.frameY = 1;
    this.frameDirection = 1;
    this.moving = false;
    this.jumping = false;
  }

  drawPlayer() {
    ctx.drawImage(
      characterImg,
      this.frameX * this.width,
      this.frameY * this.height,
      this.width,
      this.height,
      this.xPosition,
      this.yPosition,
      TILES_WIDTH,
      TILES_HEIGHT
    );
  }

  updatePlayer() {
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowDown":
          if (this.yPosition < HEIGHT - TILES_HEIGHT) {
            if (COLLISION_ARRAY[this.mapY + 1][this.mapX] === 8) {
              this.playerDirection = "up";
              this.frameDirection = 1;
              this.moving = true;
              this.frameY = 3;
              this.yPosition += this.velocityY;
              this.mapY = Math.floor(this.yPosition / TILES_HEIGHT);
            } else {
              this.yPosition = this.mapY * 30;
            }
          }
          break;

        case "ArrowUp":
          if (this.yPosition > 0) {
            if (COLLISION_ARRAY[this.mapY][this.mapX] === 8) {
              this.frameDirection = 1;
              this.playerDirection = "down";
              this.moving = true;
              this.frameY = 3;
              this.yPosition -= this.velocityY;
              this.mapY = Math.floor(this.yPosition / TILES_HEIGHT);
              //console.log(this.mapY);
            } else {
              this.yPosition = (this.mapY - 1) * TILES_HEIGHT + TILES_HEIGHT;
            }
          }
          //console.log(COLLISION_ARRAY[this.mapY][this.mapX] + 'Up')
          break;

        case "ArrowLeft":
          if (this.xPosition > 0) {
            if (
              COLLISION_ARRAY[this.mapY][this.mapX - 1] != 1 &&
              COLLISION_ARRAY[this.mapY][this.mapX - 1] != 2
            ) {
              this.mapX = Math.floor(this.xPosition / TILES_WIDTH);
              this.frameDirection = -1;
              this.playerDirection = "left";
              this.moving = true;
              this.frameY = 2;
              this.xPosition -= this.velocityX;
              //console.log(this.mapX);
            } else {
              this.xPosition = (this.mapX - 1) * TILES_WIDTH + TILES_WIDTH;
            }
          }

          break;
        case "ArrowRight":
          if (this.xPosition < WIDTH - TILES_WIDTH) {
            if (
              COLLISION_ARRAY[this.mapY][this.mapX + 1] != 1 &&
              COLLISION_ARRAY[this.mapY][this.mapX + 1] != 2
            ) {
              this.frameDirection = 1;
              this.playerDirection = "right";
              this.moving = true;
              this.frameY = 1;
              this.xPosition += this.velocityX;
              if (Math.floor(this.xPosition % TILES_WIDTH) === 0) {
                this.mapX += 1;
              }
              //console.log(this.xPosition,this.mapX + 'Right')
            }
          }
          //console.log(this.mapX);
          break;
      }
    });
    addEventListener("keyup", (e) => {
      this.moving = false;
    });
  }

  jumpPlayer() {
    let keyPressed = {};
    addEventListener("keydown", (e) => {
      keyPressed[e.key] = true;
      if (keyPressed[" "]) {
        if (
          COLLISION_ARRAY[this.mapY - 1][this.mapX] != 1 &&
          COLLISION_ARRAY[this.mapY - 1][this.mapX] != 2 &&
          FUEL != 0
        ) {
          this.jumping = true;
          this.yPosition -= 5;
          FUEL -= 2;
          this.mapY = Math.floor(this.yPosition / TILES_HEIGHT);
          //console.log(this.mapY);
        } else {
          this.yPosition = (this.mapY - 1) * TILES_HEIGHT + TILES_HEIGHT;
        }
      }

      if (keyPressed[" "] && keyPressed["ArrowRight"]) {
        if (
          COLLISION_ARRAY[this.mapY - 1][this.mapX] != 1 &&
          COLLISION_ARRAY[this.mapY - 1][this.mapX] != 2 &&
          COLLISION_ARRAY[this.mapY][this.mapX + 1] != 1 &&
          COLLISION_ARRAY[this.mapY][this.mapX + 1] != 2
        ) {
          this.jumping = true;
          this.yPosition -= 2;
          this.xPosition += 2;
          if (Math.floor(this.yPosition % TILES_HEIGHT) === 0) {
            this.mapY -= 1;
          }
          if (Math.floor(this.xPosition % TILES_WIDTH) === 0) {
            this.mapX += 1;
          }
          //console.log(this.mapY, this.mapY)
        }
      }

    //   if (keyPressed[" "] && keyPressed["ArrowLeft"]) {
    //     if (
    //       COLLISION_ARRAY[this.mapY - 1][this.mapX] != 1 &&
    //       COLLISION_ARRAY[this.mapY - 1][this.mapX] != 2 &&
    //       COLLISION_ARRAY[this.mapY][this.mapX - 1] != 1 &&
    //       COLLISION_ARRAY[this.mapY][this.mapX - 1] != 2
    //     ) {
    //       this.jump = true;
    //       this.yPosition -= 2;
    //       this.xPosition -= 2;
    //       if (Math.floor(this.yPosition % TILES_HEIGHT) === 0) {
    //         this.mapY -= 1;
    //       }
    //       if (Math.floor(this.xPosition % TILES_WIDTH) === 0) {
    //         this.mapX -= 1;
    //       }
    //       //console.log(this.mapY, this.mapY)
    //     }
    //     }
    });

    addEventListener("keyup", (e) => {
      this.jumping = false;
      delete keyPressed[e.key];
    });
  }

  isFalling() {
    //console.log(this.jumping)
    if (
      this.jumping === false &&
      COLLISION_ARRAY[this.mapY + 1][this.mapX] != 1 &&
      COLLISION_ARRAY[this.mapY + 1][this.mapX] != 2 &&
      COLLISION_ARRAY[this.mapY + 1][this.mapX] != 8
    ) {
      this.yPosition += this.gravity;
      HEALTH -= 0.1;
      //console.log(this.yPosition);
      if (Math.floor(this.yPosition % TILES_HEIGHT) === 0) {
        this.mapY += 1;
      }
    }
  }

  animatePlayer() {
    if (this.frameDirection === 1) {
      if (this.frameX > 0 && this.moving == true) {
        this.frameX -= 1;
      } else {
        this.frameX = 3;
      }
    } else if (this.frameDirection === -1) {
      if (this.frameX < 3 && this.moving == true) {
        this.frameX += 1;
      } else {
        this.frameX = 0;
      }
    }
  }

  getTop() {
    return this.yPosition;
  }

  getBottom() {
    return this.yPosition + TILES_HEIGHT;
  }

  getRight() {
    return this.xPosition + TILES_WIDTH;
  }

  getLeft() {
    return this.xPosition;
  }

  getDirection() {
    return this.playerDirection;
  }
}
