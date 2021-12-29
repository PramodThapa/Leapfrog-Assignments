function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}

// PIPE CLASS

class Pipe {
   /**
    * 
    * @param {*} xPosition || X POSITION OF PIPE
    * @param {*} yPosition || Y POSITION OF PIPE
    */
    constructor(xPosition,yPosition){
        this.pipeGap = 90
        this.xPosition = xPosition
        this.yPosition = yPosition
        this.width = 55
        this.height = 400
        this.Xdirection = 1
    }

    drawPipe = () =>{
        let img = new Image()
        img.src = './img/sprite.png'
        img.onload = (()=>{
            ctx.drawImage(img, pipeTop.sX, pipeTop.sY, pipeTop.sWidth, pipeTop.sHeight, this.xPosition, this.yPosition, pipeTop.sWidth, pipeTop.sHeight)
            ctx.drawImage(img, pipeButtom.sX, pipeButtom.sY, pipeButtom.sWidth, pipeButtom.sHeight, this.xPosition, (pipeTop.sHeight+this.yPosition)+this.pipeGap, pipeTop.sWidth, pipeTop.sHeight)
        })
    }

    movePipe(){
        this.xPosition -= this.Xdirection
    }

    getXPosition(){
        return this.xPosition
    }
}

let pipeButtom = {
    sX : 500,
    sY : 0,
    sWidth : 55,
    sHeight : 400
}

let pipeTop = {
    sX : 552,
    sY : 0,
    sWidth : 55, 
    sHeight : 400
}
