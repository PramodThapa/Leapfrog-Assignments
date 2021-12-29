let canvas = document.querySelector('#game-environment')
let ctx = canvas.getContext('2d')

let GROUND_POSITION = 500

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}


class Bird{
    constructor(){
        this.sWidth = 34
        this.sHeight = 26
        this.width = 30
        this.height = 30
        this.xPosition = 50
        this.yPosition = (canvas.height/2 + this.height)
        this.jump = 20
        this.gravity = 0.8
        this.birdIndex = 0
    }
    
    drawBird(){
        if ( frame % 15 === 0 ){
            this.birdIndex ++
            if(this.birdIndex > 3) this.birdIndex = 0
        }
        let img = new Image()
        img.src = './img/sprite.png'
        img.onload = (()=>{
            ctx.drawImage(img, birdSprite[this.birdIndex].sX, birdSprite[this.birdIndex].sY, this.sWidth, this.sHeight, this.xPosition, this.yPosition, this.width,this.height)            
        })
    }

    checkGroundCollision(){
        if((this.yPosition + this.height) >= GROUND_POSITION){
            CURRENT_SCORE =SCORE
            SCORE = 0
            bird.yPosition = (canvas.height/2 + this.height)
            pipeArray = []
            GAME_OVER = true
        }
    }

    checkTopCollision(){
        if(this.yPosition <= 0){
            CURRENT_SCORE =SCORE
            SCORE = 0
            bird.yPosition = (canvas.height/2 + this.height)
            pipeArray = []
            GAME_OVER = true
        }
    }

    flap(){
        this.yPosition -= this.jump
    }

    updateBird(){
        this.yPosition += this.gravity
    }
}

let birdSprite = [
    {sX:276, sY:114},
    {sX:276, sY:138},
    {sX:276, sY:164},
    {sX:276, sY:138},
]