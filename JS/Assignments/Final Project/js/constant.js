
// LOADING IMAGE

//Background and Logo Image
let backgroundImg = new Image();
backgroundImg.src = "./img/background.png";

let logoImg = new Image();
logoImg.src = "./img/logo.jpg";

let startImg = new Image();
startImg.src = "./img/gameUI.png";

let audioOFFImg = new Image();
audioOFFImg.src = "./img/audioOFF.png";

let audioONImg = new Image();
audioONImg.src = "./img/audioONN.png";

let levelLockedImg = new Image();
levelLockedImg.src = "./img/locked.png";

let cancelImg = new Image();
cancelImg.src = "./img/cancel.png";

let fireImg = new Image();
fireImg.src = "./img/fire.png";

//Enemy Image
let enemyGroundImg = new Image();
enemyGroundImg.src = "./img/enemy-ground.png";

let enemySpaceImg = new Image();
enemySpaceImg.src = "./img/enemy-space.png";

//Tiles Image

let tilesImg = new Image();
tilesImg.src = "./img/map-sprite.png";

//Charater Image

let characterImg = new Image();
characterImg.src = "./img/character.png";

//Coins Image

let coinImage = new Image();
coinImage.src = "./img/coin.png";

//Life Image

let lifeImage = new Image();
lifeImage.src = "./img/life.png";

//Health Image

let healthImage = new Image();
healthImage.src = "./img/health.png";

//Fuel Image

let fuelImage = new Image();
fuelImage.src = "./img/jetpack.png";

//Bullet Image

let bulletFireImage = new Image();
bulletFireImage.src = "./img/bullet-fire.png";

let bullet = new Image();
bullet.src = "./img/bullet.png";

//LOAD AUDIO

const HURT_AUDIO = new Audio("./audio/hurt.mp3");
const COIN_COLLECT = new Audio("./audio/coinCollect.wav");
const GAME_AUDIO = new Audio("./audio/gameAudio.mp3");

//SPRITE DIMENSION

//Character Sprite

let CHARACTER_SPRITE_WIDTH = 1570;
let CHARACTER_SPRITE_HEIGHT = 2048;
let SPRITE_COLUMN = 4;
let SPRITE_ROW = 4;
let CHARACTER_HEIGHT = CHARACTER_SPRITE_HEIGHT / SPRITE_ROW;
let CHARACTER_WIDTH = CHARACTER_SPRITE_WIDTH / SPRITE_COLUMN;

//Weapon

const BULLET_FIRE_HEIGHT = 447;
const BULLET_FIRE_WIDTH = 571;

const BULLET_HEIGHT = 513;
const BULLET_WIDTH = 173;

//Enemy Sprite

let ENEMY_SPRITE_WIDTH = 128;
let ENEMY_SPRITE_HEIGHT = 192;
let ENEMY_SPRITE_ROW = 4;
let ENEMY_SPRITE_COLUMN = 4;
let ENEMY_HEIGHT = ENEMY_SPRITE_HEIGHT / ENEMY_SPRITE_ROW;
let ENEMY_WIDTH = ENEMY_SPRITE_WIDTH / ENEMY_SPRITE_COLUMN;

//Background and Logo
const BACKGROUND_WIDTH = 621;
const BACKGROUND_HEIGHT = 333;
const LOGO_WIDTH = 180;
const LOGO_HEIGHT = 39;

//Asset 
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

