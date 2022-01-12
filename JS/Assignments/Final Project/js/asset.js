
const LIFE_SPRITE_WIDTH = 254;
const LIFE_SPRITE_HEIGHT = 254;

const FUEL_SPRITE_WIDTH = 512;  
const FUEL_SPRITE_HEIGHT = 512; 

const HEALTH_SPRITE_WIDTH = 943;  
const HEALTH_SPRITE_HEIGHT = 777;

const COIN_SPRITE_WIDTH = 504;  
const COIN_SPRITE_HEIGHT = 84;
const COIN_FRAME_X = 6;

const COIN_WIDTH = COIN_SPRITE_WIDTH / COIN_FRAME_X;
const COIN_HEIGHT = COIN_SPRITE_HEIGHT;


class Coin{
    constructor(height, width, xPosition, yPosition){
        this.height = height;
        this.width = width;
        this.frameX = 0; 
        this.xPosition = xPosition;
        this.yPosition = yPosition;        
    }

    drawCoin(image){
        ctx.drawImage(image, this.frameX * this.width, 0, this.width, this.height, this.xPosition, this.yPosition, TILES_WIDTH, TILES_HEIGHT )
    }

    animateCoin(){
        if(this.frameX < COIN_FRAME_X - 1){
            this.frameX ++
        }else{
            this.frameX = 0
        }
    }

    getTop(){
        return this.yPosition;
    }

    getBottom(){
        return this.yPosition + TILES_HEIGHT;
    }

    getRight(){
        return this.xPosition + TILES_WIDTH;
    }

    getLeft(){
        return this.xPosition;
    }
}

class Life{
    constructor(height, width, xPosition, yPosition){
        this.height = height;
        this.width =  width;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.bottom = yPosition + TILES_HEIGHT;
        this.right = xPosition + TILES_WIDTH;
    }

    drawLife(image){
        ctx.drawImage(image, 0, 0, this.width, this.height, this.xPosition, this.yPosition, TILES_WIDTH, TILES_HEIGHT )
    }

    getPosition(){
        return [this.xPosition, this.yPosition, this.bottom, this.right]
    }
}

class Health{
    constructor(height, width, xPosition, yPosition){
        this.height = height;
        this.width =  width;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.bottom = this.yPosition + TILES_HEIGHT;
        this.right=  this.xPosition + TILES_WIDTH;
    }

    drawHealth(image){
        ctx.drawImage(image, 0, 0, this.width, this.height, this.xPosition, this.yPosition, TILES_WIDTH, TILES_HEIGHT )
    }

    getPosition(){
        return [this.xPosition, this.yPosition, this.bottom, this.right]
    }
}

class Fuel{
    constructor(height, width, xPosition, yPosition){
        this.height = height;
        this.width =  width;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.bottom = this.yPosition + TILES_HEIGHT;
        this.right =  this.xPosition + TILES_WIDTH;
    }

    drawFuel(image){
        ctx.drawImage(image, 0, 0, FUEL_SPRITE_WIDTH, FUEL_SPRITE_HEIGHT, this.xPosition, this.yPosition, TILES_WIDTH, TILES_HEIGHT )
    }

    getPosition(){
        return [this.xPosition, this.yPosition,this.bottom, this.right]
    }
    

}

class StatusBar{

    constructor(img, spriteWidth, spriteHeight, logoXPosition, color, xPosition, yPosition, width, height){
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

    drawStatusBar(status){
        ctx.drawImage(this.image, 0, 0, this.spriteWidth, this.spriteHeight, this.logoXPosition, this.yPosition, TILES_WIDTH, TILES_HEIGHT )
        ctx.beginPath();
        ctx.strokeStyle = '#222222';
        ctx.lineWidth = 2 ;
        ctx.rect(this.xPosition, this.yPosition, this.width, this.height)
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = `${this.color}`;
        ctx.rect(this.xPosition, this.yPosition, status * 2, this.height);
        ctx.fill()
    }

}

