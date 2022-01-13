class Coin {
  /**
   * 
   * @param {*} height || Height of the coin spritesheet
   * @param {*} width || Coin of the width spritesheet
   * @param {*} xPosition || X position of the coin asset
   * @param {*} yPosition ||  Y position of the coin asset
   */
  constructor(height, width, xPosition, yPosition) {
    this.height = height;
    this.width = width;
    this.frameX = 0;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
  }

  drawCoin(image) {
    ctx.drawImage(
      image,
      this.frameX * this.width,
      0,
      this.width,
      this.height,
      this.xPosition,
      this.yPosition,
      TILES_WIDTH,
      TILES_HEIGHT
    );
  }

  animateCoin() {
    if (this.frameX < COIN_FRAME_X - 1) {
      this.frameX++;
    } else {
      this.frameX = 0;
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
}

class Life {
  /**
   * 
   * @param {*} height || Heigth of the life spritesheet
   * @param {*} width || Width of the life spritesheet
   * @param {*} xPosition || X position of the life asset
   * @param {*} yPosition ||  Y position of the life asset
   */
  constructor(height, width, xPosition, yPosition) {
    this.height = height;
    this.width = width;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.bottom = yPosition + TILES_HEIGHT;
    this.right = xPosition + TILES_WIDTH;
  }

  drawLife(image) {
    ctx.drawImage(
      image,
      0,
      0,
      this.width,
      this.height,
      this.xPosition,
      this.yPosition,
      TILES_WIDTH,
      TILES_HEIGHT
    );
  }

  getPosition() {
    return [this.xPosition, this.yPosition, this.bottom, this.right];
  }
}

class Health {
  /**
   * 
   * @param {*} height || Height of the health spritesheet
   * @param {*} width || Width of the heath spritesheet 
   * @param {*} xPosition || X position health asset
   * @param {*} yPosition  || Y position health asset
   */
  constructor(height, width, xPosition, yPosition) {
    this.height = height;
    this.width = width;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.bottom = this.yPosition + TILES_HEIGHT;
    this.right = this.xPosition + TILES_WIDTH;
  }

  drawHealth(image) {
    ctx.drawImage(
      image,
      0,
      0,
      this.width,
      this.height,
      this.xPosition,
      this.yPosition,
      TILES_WIDTH,
      TILES_HEIGHT
    );
  }

  getPosition() {
    return [this.xPosition, this.yPosition, this.bottom, this.right];
  }
}

class Fuel {
  /**
   * 
   * @param {*} height ||Height of the fuel spritesheet
   * @param {*} width || Width of the  fuel spritesheet
   * @param {*} xPosition || X position fuel asset
   * @param {*} yPosition || Y position fuel asset
   */
  constructor(height, width, xPosition, yPosition) {
    this.height = height;
    this.width = width;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.bottom = this.yPosition + TILES_HEIGHT;
    this.right = this.xPosition + TILES_WIDTH;
  }

  drawFuel(image) {
    ctx.drawImage(
      image,
      0,
      0,
      FUEL_SPRITE_WIDTH,
      FUEL_SPRITE_HEIGHT,
      this.xPosition,
      this.yPosition,
      TILES_WIDTH,
      TILES_HEIGHT
    );
  }

  getPosition() {
    return [this.xPosition, this.yPosition, this.bottom, this.right];
  }
}

class StatusBar {
  /**
   * 
   * @param {*} img || Image  to draw in the status bar
   * @param {*} spriteWidth || Sprite Width
   * @param {*} spriteHeight || Sprite Height
   * @param {*} logoXPosition || logo the the status bar
   * @param {*} color || Color of the status bar
   * @param {*} xPosition || X position  of the status bar 
   * @param {*} yPosition || Y position of the status bar
   * @param {*} width || Width of the status bar
   * @param {*} height || Height of the status bar
   */
  constructor(
    img,
    spriteWidth,
    spriteHeight,
    logoXPosition,
    color,
    xPosition,
    yPosition,
    width,
    height
  ) {
    this.logoXPosition = logoXPosition;
    this.color = color;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
    this.image = img;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.width = width;
    this.height = height;
  }

  drawStatusBar(status) {
    ctx.drawImage(
      this.image,
      0,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.logoXPosition,
      this.yPosition,
      TILES_WIDTH,
      TILES_HEIGHT
    );
    ctx.beginPath();
    ctx.strokeStyle = "#222222";
    ctx.lineWidth = 2;
    ctx.rect(this.xPosition, this.yPosition, this.width, this.height);
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = `${this.color}`;
    ctx.rect(this.xPosition, this.yPosition, status * 2, this.height);
    ctx.fill();
  }
}
