
class Enemy{
    constructor(xPosition, yPosition, xEnd, yEnd, height, width, direction,health){
        this.direction = direction;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.xStart= xPosition;
        this.yStart = yPosition;
        this.xEnd = xEnd;
        this.yEnd = yEnd;
        this.height = height;
        this.width = width;
        this.frameX = 0;
        this.frameY;
        this.xVelocity = 5;
        this.health = health;
    }

    drawEnemy(image){
        if(this.direction === -1){
            this.frameY = 1;
        }else if(this.direction === 1){
            this.frameY = 2;
        }
        ctx.drawImage(image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.xPosition, this.yPosition, TILES_WIDTH, TILES_HEIGHT);
    }

    drawHealthBar(status){
        ctx.beginPath();
        ctx.strokeStyle = '#222222';
        ctx.lineWidth = 2 ;

        ctx.rect(this.xPosition, this.yPosition, status/3 , 5)
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = 'blue';
        ctx.rect(this.xPosition, this.yPosition, status/3  , 5);
        ctx.fill()
    }

    updateEnemy(){
        if(this.direction === -1){
            if(this.xPosition > this.xEnd){
                this.xPosition -= this.xVelocity;
            }else{
                let temp = this.xEnd;
                this.xEnd = this.xStart;
                this.xStart = this.xPosition;
                this.xPosition = temp;
                this.direction = -1*this.direction;
            }
        } else if(this.direction === 1){
            if(this.xPosition < this.xEnd){
                this.xPosition += this.xVelocity;
            }else{
                let temp = this.xEnd;
                this.xEnd = this.xStart;
                this.xStart = this.xPosition;
                this.xPosition = temp;
                this.direction = -1*this.direction;
            }
        }
    }

    animateEnemy(){
        if(this.frameX < 3){
            this.frameX ++;
        }else{
            this.frameX = 0 ;
        }
    }

    getTop(){
        return this.yPosition;
    }

    getBottom(){
        return this.xPosition + TILES_HEIGHT;
    }

    getRight(){
        return this.xPosition + TILES_WIDTH;
    }

    getLeft(){
        return this.xPosition;
    }

    getHealth(){
        return this.health;
    }
    setHealth(health){
        this.health -= health;
    }

}

class Obstacle{

    constructor(xPosition, yPosition, height, width){
        this.xPosition = xPosition
        this.yPosition = yPosition
        this.height =  height
        this.width = width
    }

    drawObstacle(Image){
        ctx.drawImage(image, 0, 0, this.height, this.width, this.xPosition, this.yPosition, TILES_WIDTH, TILES_HEIGHT)
    }

    getTop(){
        return this.yPosition;
    }

    getBottom(){
        return this.xPosition + TILES_HEIGHT;
    }

    getRight(){
        return this.xPosition + TILES_WIDTH;
    }

    getLeft(){
        return this.xPosition;
    }
}