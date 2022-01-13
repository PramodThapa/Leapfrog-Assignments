
class Enemy{
    /**
     * 
     * @param {*} xPosition || xPosition of the the enemy
     * @param {*} yPosition || yPosition of the the enemy
     * @param {*} xEnd || End position of the enemy in X direction 
     * @param {*} yEnd  || End position of the enemy in Y direction
     * @param {*} height ||  Height of the enemy in spritesheet
     * @param {*} width ||  Width of the enemy in spritesheet
     * @param {*} direction || Direction of the enemy
     * @param {*} health || Health of the enemy
     */
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
}
