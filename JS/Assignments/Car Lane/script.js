const car = document.getElementById('car')
const road = document.getElementById('road')
  
  
const LANE_COUNT = 3
const LANE_LENGTH = 800;
const CAR_POSITION_FROM_BUTTOM = 10
const CAR_HEIGHT = car.clientHeight
let SCORE= 0    

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
} 

let index = 1
let carXPosition = 125
let carYPosition = road.clientHeight - (CAR_POSITION_FROM_BUTTOM + CAR_HEIGHT)

const laneMap = {
    0: "lane-left",
    1: "lane-middle",
    2: "lane-right"
}

const lanePosition = {
    0: '25',
    1 : '125',
    2 : '225'
}

document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft') {
        index--
        if (index < 0) index = 0
    } else if (e.code === 'ArrowRight') {
        index++
        if (index > LANE_COUNT-1){
            index = LANE_COUNT-1
        }
    }  
    const laneMapValue = laneMap[index]
  
    car.setAttribute("class", `car ${laneMapValue}`)

    if (car.classList[1] == 'lane-right'){
        carXPosition = 225
    }else if (car.classList[1] == 'lane-middle'){
        carXPosition = 125
    }else{
        carXPosition = 25
    }
    
})
  
class Obstacle {
    constructor(obsIndex) {
        this.index = obsIndex
        this.Xposition
        this.y = getRandomInt(-10, -1000)
        this.speed = 10
    }
  
    draw() {
        this.element = document.createElement('div')
  
        const laneMapValue = laneMap[this.index]
    
        this.element.setAttribute('class', `car ${laneMapValue}`)
        this.element.style.bottom = 'auto'
        this.element.style.top = `${this.y}px`
        this.element.style.transition = "none"
        this.element.style.width = '50px'
        this.element.style.background = 'url(img/obstacle.png)'
        this.element.style.backgroundSize = '98%'
        this.element.style.height = '100px'
            
        road.appendChild(this.element)
    }
  
    move() {
        this.y += this.speed;
        this.element.style.top = `${this.y}px`
    
        if (this.y > LANE_LENGTH) {
            SCORE +=5
            this.y = getRandomInt(-150, -800)
        }
    }

    getXDistance(){
        if(this.index === 0){
            return  25
        }else if(this.index === 1){
            return 125
        }else{
            return 225
        }
    }

    getYDistance(){
        return this.y
    }
}
  
const obsArray = []
let gameContainer = document.getElementById('wrapper')

for (let i = 0; i < 3; i++) {
    let obsIndex = [0, 1, 2]
    const obs = new Obstacle(i);
    obs.draw();
    obsArray.push(obs);
}
  
function moveObstacle() {
    let reqID = requestAnimationFrame(moveObstacle)
    for(let i = 0; i < obsArray.length; i++){
        if(carXPosition < obsArray[i].getXDistance() + 50 &&
         carXPosition + 50 > obsArray[i].getXDistance() &&
         carYPosition < obsArray[i].getYDistance() + 100 &&
         carYPosition + 100 > obsArray[i].getYDistance()){
            gameOver()
            window.cancelAnimationFrame(reqID)
        }

        displayScore()
        obsArray[i].move()
    }
}
function gameOver(){
    let gameOver = document.getElementsByClassName('game-over')[0];

    gameOver.style.position = 'absolute'
    gameOver.style.top = '0px'
    gameOver.style.left = '35%'
    gameOver.style.fontFamily = 'Ubuntu'


    gameOverTxt = document.createElement('h1')
    gameOverTxt.innerHTML = 'GAME OVER!'
    gameOverTxt.style.margin = '35% auto 4%'
    gameOverTxt.style.fontSize = '75px'
    gameOverTxt.style.color = '#9afffb'

    currentScoreTxt = document.createElement('h2')
    currentScoreTxt.innerHTML = `<h5>SCORE : ${SCORE}`
    currentScoreTxt.style.textAlign = 'center'
    currentScoreTxt.style.fontWeight = 'lighter'
    currentScoreTxt.style.margin = '4% auto'
    currentScoreTxt.style.color = '#9afffb'

    playAgainBtn = document.createElement('button')
    playAgainBtn.innerHTML = '<h5>PLAY AGAIN </h5>'
    playAgainBtn.style.position = 'absolute'
    playAgainBtn.style.left = '35%'
    playAgainBtn.style.borderRadius = '10px'
    playAgainBtn.style.padding = '10px'
    playAgainBtn.style.fontSize = '22px'
    playAgainBtn.style.cursor = 'pointer'
    playAgainBtn.style.background = 'linear-gradient(to right, rgba(0, 204, 102, 0.8) 0%, rgba(255, 102, 153, 0.8) 100%)'
    playAgainBtn.addEventListener('click',(e)=>{
        location.reload()
    })

    gameOver.appendChild(gameOverTxt)
    gameOver.appendChild(currentScoreTxt)
    gameOver.appendChild(playAgainBtn)
}

function init(){
    let text = document.createElement('h3')
    text.innerHTML = '<h4>PRESS &#8592; &#8593; &#8594; &#8595; TO CONTROL CAR <h4>'
    text.style.textAlign = 'center'
    text.style.fontSize = '16px'
    text.style.fontFamily = 'Ubuntu'
    text.style.position = 'absolute'
    text.style.top = '90%'
    text.style.left = '33%'
    text.style.background = 'linear-gradient(to right, rgba(0, 204, 102, 0.6) 0%, rgba(255, 102, 153, 0.6) 100%)'
    text.style.padding = '10px 175px'
    text.style.fontWeight = 'bold'
    text.style.borderRadius = '5px'

    let startBtn = document.createElement('button')
    startBtn.style.borderRadius = '10px'
    startBtn.innerHTML = ' <h5>START GAME</h5>'
    startBtn.style.padding = '10px 30px'
    startBtn.style.fontSize = '22px'
    startBtn.style.cursor = 'pointer'
    startBtn.style.position = 'absolute'
    startBtn.style.top = '44%'
    startBtn.style.left = '45%'
    startBtn.style.fontSize = '24px'
    startBtn.style.background = 'linear-gradient(to right, rgba(0, 204, 102, 0.541) 0%, rgba(255, 102, 153, 0.473) 100%)'
    startBtn.addEventListener('click',()=>{
        gameContainer.removeChild(text)
        gameContainer.removeChild(startBtn)
        moveObstacle()
    })

    let scoreTrack = document.createElement('h2')
    scoreTrack.innerHTML = `<h4>SCORE<br> ${SCORE} </h4>`
    scoreTrack.style.position = 'absolute'
    scoreTrack.style.color = '#9afffb'
    scoreTrack.style.left = '0'
    scoreTrack.style.top = '0'
    scoreTrack.style.fontFamily = 'Ubuntu'
    scoreTrack.style.fontWeight = 'Bold'
    scoreTrack.style.textAlign = 'center'

    gameContainer.appendChild(text)
    gameContainer.appendChild(startBtn)
}

function displayScore(){
    let scoreTrack = document.createElement('h2')
    scoreTrack.innerHTML = `<h4>SCORE<br> ${SCORE} </h4>`
    scoreTrack.style.position = 'absolute'
    scoreTrack.style.color = '#9afffb'
    scoreTrack.style.left = '0'
    scoreTrack.style.top = '0'
    scoreTrack.style.fontFamily = 'Ubuntu'
    scoreTrack.style.fontWeight = 'Bold'
    scoreTrack.style.textAlign = 'center'
    gameContainer.appendChild(scoreTrack)
}

init()

  
  