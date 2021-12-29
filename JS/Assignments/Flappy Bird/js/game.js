let SCORE = 0
let GAME_OVER = false
let INITIAL_STATE = true
let CURRENT_SCORE = 0

let frame = 0
let pipeArray = []
let pipeWidth = 48

canvas.height = 600
canvas.width = 300

let highscore = localStorage.getItem("highscore")


let background = new Background()
let ground = new Ground()
let bird = new Bird()

let startState = new Start()
let gameEnd = new GameOver()

function gameLoop(){

    if (INITIAL_STATE === true){
        background.drawBackground()
        ground.drawGround()
        startState.drawBackground()
        canvas.addEventListener('click',()=>{
            INITIAL_STATE = false
        })

    }else if(GAME_OVER == true){
        gameOver()
        canvas.addEventListener('click',()=>{
            GAME_OVER = false
    
        })

    }else{

        frame ++
        background.drawBackground()

        bird.drawBird()
        bird.checkGroundCollision()
        bird.checkTopCollision()
        bird.updateBird()
        displayScore()

        if (frame % 200 === 0){
            let pipeTopPosition = getRandomInt(-300,-40)
            let pipeXPosition = canvas.width - pipeWidth
            let pipe = new Pipe(pipeXPosition, pipeTopPosition)
            pipeArray.push(pipe)
        }
        
        for (let i = 0; i < pipeArray.length; i++){
            let p = pipeArray[i]
            let pipeBottomYPosition = p.yPosition + p.pipeGap + p.height
            if (p.getXPosition() < (-pipeWidth)){
                SCORE++
                pipeArray.shift()    
            }

            //FOR TOP PIPE

            if(bird.xPosition + bird.width > p.xPosition &&
                bird.xPosition < p.xPosition + p.width &&
                bird.yPosition + bird.height > p.yPosition &&
                bird.yPosition < p.yPosition + p.height
                ){  
                    CURRENT_SCORE =SCORE
                    SCORE = 0
                    p.xDirection = 0
                    bird.yPosition = (canvas.height/2 + bird.height)
                    pipeArray = []
                    GAME_OVER = true
            }

            //FOR BUTTOM PIPE

            if(bird.xPosition + bird.width > p.xPosition &&
                bird.xPosition< p.xPosition + p.width &&
                bird.yPosition + bird.height > pipeBottomYPosition &&
                bird.yPosition < pipeBottomYPosition + p.height){
                    CURRENT_SCORE =SCORE
                    SCORE = 0
                    p.xDirection = 0
                    bird.yPosition = (canvas.height/2 + bird.height)
                    pipeArray = []
                    GAME_OVER = true
            }

            p.drawPipe()
            p.movePipe()
        }
        ground.drawGround()

        if(highscore !== null){
            if (CURRENT_SCORE > highscore) {
                localStorage.setItem("highscore", CURRENT_SCORE)     
            }
        }
        else{
            localStorage.setItem("highscore", CURRENT_SCORE)
        }
        
    }
    requestAnimationFrame(gameLoop)
    
}

function gameController(){
    canvas.addEventListener('click',()=>{
        bird.flap()
    })
}

function gameOver(){
    background.drawBackground()
    ground.drawGround()
    gameEnd.drawBackground()

}

function displayScore(){
    ctx.font = '16px Ubuntu'
    ctx.strokeText(`SCORE : ${SCORE}`, 5, 20)
}

gameController()
gameLoop()
