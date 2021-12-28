let canvas = document.querySelector('#ant-smasher')
let ctx = canvas.getContext("2d")

let canvasWidth = canvas.clientWidth
let canvasHeight = canvas.clientHeight

class Ant{
    /**
     * 
     * @param {*} xPosition || x position of the ant
     * @param {*} yPosition || y position of the ant
     * @param {*} width || width of the ant 
     * @param {*} height || height of the ant
     */
    constructor(xPosition, yPosition, width, height){
        this.xPosition = xPosition
        this.yPosition = yPosition
        this.width = width
        this.height = height

        this.speed = 2
        this.xDirection =  Math.random() < 0.5 ? 1 : -1
        this.yDirection =  Math.random() < 0.5 ? 1 : -1

    }

    drawAnt(){
        let img = new Image()
        img.src = './img/ant.png'
        ctx.drawImage(img, this.xPosition, this.yPosition, this.width, this.height);
    }
    
    updateAnt(){
        this.checkWallCollision()
        this.checkAntCollision()
        this.xPosition += this.speed * this.xDirection
        this.yPosition += this.speed * this.yDirection
    }
    
    checkWallCollision(){
       if(this.xPosition < 0 || this.xPosition + this.width >= canvasWidth){
           this.xDirection *= -1
    
           
       }
       if(this.yPosition < 0 || this.yPosition + this.height >= canvasHeight){
           this.yDirection *=  -1
       }
    }

    checkAntCollision(){       
        for (let i = 0; i < antArray.length; i++){

            if(antArray[i] === this) continue;

            if (this.xPosition < antArray[i].xPosition + antArray[i].width &&
                this.xPosition + this.width > antArray[i].xPosition &&
                this.yPosition < antArray[i].yPosition + antArray[i].height &&
                this.yPosition + this.height > antArray[i].yPosition){

                antArray[i].xDirection *= -this.xDirection
                antArray [i].yDirection *= this.yDirection              
            }
        }
    }
}

const antCount = 10

let antArray = []

maxAntWidth = 45
minAntWidth = 35


function generateAttribute(){
    let width = Math.floor(Math.random() * maxAntWidth) + minAntWidth
    let height = width
    let xPosition = Math.floor(Math.random() * (canvasWidth - maxAntWidth)) 
    let yPosition = Math.floor(Math.random() * (canvasHeight - minAntWidth)) 
    return [xPosition, yPosition, width, height]
}

for (i = 0; i < antCount ; i++){
    let [xPosition, yPosition, width, height] = generateAttribute()
    const ant = new Ant(xPosition, yPosition, width, height) 
    antArray.push(ant)
}

function animate() {
    ctx.beginPath()
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    ctx.closePath()

    for (let i= 0; i < antArray.length; i++){
        antArray[i].updateAnt()
        antArray[i].drawAnt()
        showScore()
    }
    requestAnimationFrame(animate)
}

requestAnimationFrame(animate)

let gameScore = 0

function showScore(){
    ctx.font = 'bold 16px Italic'
    ctx.fillText (`SCORE: ${gameScore}`,20,50)
}

canvas.addEventListener('click',(e)=>{
    let x = e.clientX
    let y = e.clientY
    for(let i = 0; i < antArray.length; i++){
        if(x >= antArray[i].xPosition && x <= antArray[i].xPosition + antArray[i].width && y >= antArray[i].yPosition && y <= antArray[i].yPosition + antArray[i].height){
            antArray.splice(i,1)
            gameScore++
        }
    }
})


