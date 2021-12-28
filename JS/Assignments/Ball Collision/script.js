let canvas = /** @type {HTMLCanvasElement} */ (document.querySelector('canvas'))
let ctx = canvas.getContext("2d")

let canvasWidth = canvas.clientWidth
let canvasHeight = canvas.clientHeight

class Ball{
    constructor(radius, color, xPosition, yPosition){

        this.xPosition = xPosition
        this.yPosition = yPosition

        this.radius = radius
        this.color = color

        this.velocityX = 4
        this.velocityY = 2 
        this.xDirection = Math.random() < 0.5 ? 1 : -1
        this.yDirection = Math.random() < 0.5 ? 1 : -1

        this.checkWallCollision()
        this.checkBallCollision()
    }

    drawBall(){
        ctx.beginPath()
        ctx.fillStyle = `${this.color}`
        ctx.arc(this.xPosition, this.yPosition, this.radius, 0, 2 * Math.PI, false);
        ctx.fill()
        ctx.closePath()
    }
    
    updateBall(){
        this.xPosition += (this.velocityX * this.xDirection)
        this.yPosition += (this.velocityY * this.yDirection)
        this.checkWallCollision()
        this.checkBallCollision()
    }
    
    checkWallCollision(){

        if (this.xPosition < 2*this.radius || this.xPosition > canvasWidth - this.radius) {
            this.xDirection = -this.xDirection
            this.xPosition += this.velocityX * this.xDirection
        }
        if (this.yPosition < 2*this.radius || this.yPosition > canvasHeight - this.radius) {
            this.yDirection = -this.yDirection
            this.yPosition += this.velocityY * this.yDirection
        }
      
    }

    checkBallCollision(){       
        for (let i = 0; i < ballArray.length; i++){

            if(ballArray[i] === this) continue;

            let distanceX = (this.xPosition + this.radius) - (ballArray[i].xPosition + ballArray[i].radius)
            let ditanceY = (this.yPosition + this.radius) - (ballArray[i].yPosition + ballArray[i].radius)
            let distance = Math.sqrt((distanceX * distanceX) + (ditanceY * ditanceY))
            let length = this.radius + ballArray[i].radius
            if (distance <= (this.radius + ballArray[i].radius)){
                ballArray[i].xDirection = -(ballArray[i].xDirection)
                ballArray [i].yDirection = -(ballArray [i].yDirection) 
                this.xDirection = -(this.xDirection)
                this.yDirection = -(this.yDirection)  
                this.xPosition += (length-distance) *this.xDirection
                this.yPosition += (length-distance) *this.yDirection             
            }
        }
    }
}


const ballCount = 10

let ballArray = []

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function generateBall(){
    let maxRadius = 15
    let minRadius = 10
    let radius = Math.floor(Math.random() * maxRadius) + minRadius
    let xPosition = Math.floor(Math.random() * (canvasWidth - maxRadius )) + radius
    let yPosition = Math.floor(Math.random() * (canvasHeight - maxRadius)) + radius
    return [radius, xPosition, yPosition]
}

for (i = 0; i < ballCount ; i++){
    let [radius, xPosition, yPosition] = generateBall()
    let color = getRandomColor()
    const ball = new Ball(radius, color, xPosition, yPosition) 
    ballArray.push(ball)
}

function animate() {

    ctx.beginPath()
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    ctx.closePath()

    for (let i= 0; i < ballArray.length; i++){
        ballArray[i].checkBallCollision()
        ballArray[i].updateBall()
        ballArray[i].drawBall()
    }
    requestAnimationFrame(animate)
}

requestAnimationFrame(animate)