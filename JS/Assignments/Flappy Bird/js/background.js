
//GAME ENVIRONMENT BACKGROUND CLASS

class Background{
    constructor(){

    }

    drawBackground = ()=>{
        let img = new Image()
        img.src = './img/background.png'
        img.onload = (()=>{
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height) 
        })
    }
}

// FORGROUND CLASS

class Ground{
    constructor(){
        
    }

    drawGround = () =>{       
        let img = new Image()
        img.src = './img/ground.png'
        img.onload = (()=>{
            ctx.drawImage(img, 0, (canvas.height-100), canvas.width,115)
           
        })
    }
}

// START GAME SCREEN BACKGROUND CLASS

class Start{
    constructor(){
        this.sX = 0
        this.sY = 228
        this.width = 173
        this.height = 173
    }

    drawBackground = () =>{
        let img = new Image()
        img.src = './img/sprite.png'
        img.onload = (()=>{
            ctx.drawImage(img, this.sX, this.sY, this.width, this.height, canvas.width/2-this.width/2, canvas.height/2-this.height/2, this.width, this.height)
        })
    }

}

// GAMEOVER BACKGROUND CLASS

class GameOver{
    constructor(){
        this.sX = 174
        this.sY = 228
        this.width = 226
        this.height = 200
    }

    drawBackground = () =>{
        let img = new Image()
        img.src = './img/sprite.png'
        img.onload = (()=>{
            ctx.drawImage(img, this.sX, this.sY, this.width, this.height, canvas.width/2-this.width/2, canvas.height/2-this.height/2, this.width, this.height)
            if (CURRENT_SCORE <= 5){
                ctx.drawImage(img, medalSpritePosition[0].sX, medalSpritePosition[0].sY, 45, 45, canvas.width/2-90, canvas.height/2-12, 45, 45)
            }else if(CURRENT_SCORE > 5 && CURRENT_SCORE <= 10){
                ctx.drawImage(img, medalSpritePosition[1].sX, medalSpritePosition[1].sY, 45, 45, canvas.width/2-90, canvas.height/2-12, 45, 45)
            }else{
                ctx.drawImage(img, medalSpritePosition[2].sX, medalSpritePosition[2].sY, 45, 45, canvas.width/2-90, canvas.height/2-12, 45, 45)
            }
            ctx.font = '16px Ubuntu'
            ctx.strokeText(`${CURRENT_SCORE}`, this.width, this.height + 92)
            ctx.strokeText(`${localStorage.getItem('highscore')}`, this.width, this.height + 132)
        })
    }
}

let medalSpritePosition = [
    {sX: 358, sY: 112},
    {sX: 310, sY: 157},
    {sX: 358, sY: 157}
]