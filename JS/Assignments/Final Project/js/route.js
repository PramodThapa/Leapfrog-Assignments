
let coinPosition = [];
let groundEnemy = [];
let spaceEnemy = [];

//STAGE 1

//COINS POSITION
const COIN_POSITION_STAGE_1 = [
    {X:20,Y:22}, {X:6,Y:20}, {X:30,Y:20}, {X:28,Y:16}, {X:20,Y:16}, {X:23,Y:18},
    {X:17,Y:18}, {X:1,Y:16}, {X:10,Y:16},  {X:15,Y:13}, {X:26,Y:13}, {X:10,Y:11},
    {X:5,Y:9}, {X:10,Y:5}, {X:1,Y:6}, {X:1,Y:2}, {X:10,Y:1},{X:19,Y:1}, {X:29,Y:1},
    {X:13,Y:3}, {X:29,Y:6}, {X:20,Y:6}, {X:23,Y:9}, {X:13,Y:3}, {X:13,Y:9}, {X:17,Y:9},
     {X:13,Y:7},{X:17,Y:7}, {X:17,Y:16}, {X:13,Y:16},
    
]

//ENEMY ROUTE

const GROUND_ENEMY_STAGE_1 = [
    {xStart : 900, yStart : 660, xEnd : 30, yEnd : 660, direction : -1, health : 100 },
    {xStart : 30, yStart : 600, xEnd : 900, yEnd : 600, direction : 1, health : 100},
    {xStart : 900, yStart : 330, xEnd : 30, yEnd : 330, direction : -1, health :100},
    {xStart : 240, yStart : 90, xEnd : 900, yEnd : 90, direction : 1, health : 100},
]

const SPACE_ENEMY_STAGE_1 = [
    {xStart : 30, yStart : 480, xEnd : 330, yEnd : 480, direction : 1 , health : 100},
    {xStart : 900, yStart : 480, xEnd : 570, yEnd : 480, direction : -1, health : 100},
    {xStart : 30, yStart : 390, xEnd : 900, yEnd : 390, direction : 1, health : 100},
    {xStart : 30, yStart : 180, xEnd : 330, yEnd : 180, direction : 1, health : 100},
    {xStart : 900, yStart : 180, xEnd : 570, yEnd : 180, direction : -1, health : 100},    
]

// STAGE 2
const COIN_POSITION_STAGE_2 = [
    {X:20,Y:21},{X:3,Y:20}, {X:27,Y:21}, {X:28,Y:16}, {X:23,Y:15}, {X:23,Y:18}, {X:17,Y:18},
    {X:1,Y:16}, {X:11,Y:21},  {X:15,Y:13}, {X:26,Y:13},
    {X:10,Y:11}, {X:3,Y:13}, {X:10,Y:5}, {X:2,Y:7}, {X:3,Y:3}, {X:6,Y:1},
    {X:19,Y:1}, {X:29,Y:1}, {X:13,Y:3}, {X:27,Y:3}, {X:20,Y:7}, {X:23,Y:9},
    {X:20,Y:3}, {X:7,Y:9}, {X:16,Y:9}, {X:13,Y:7},{X:28,Y:7}, {X:8,Y:15}, {X:13,Y:16},
    
]
const GROUND_ENEMY_STAGE_2 = [
    {xStart : 180, yStart : 540, xEnd : 30, yEnd : 660, direction : -1, health : 100 },
    {xStart : 750, yStart : 540, xEnd : 900, yEnd : 600, direction : 1, health : 100},
    {xStart : 900, yStart : 390, xEnd : 30, yEnd : 330, direction : -1, health :100},
    {xStart : 30, yStart : 150, xEnd : 900, yEnd : 150, direction : 1, health : 100},
]

const SPACE_ENEMY_STAGE_2 = [
    {xStart : 30, yStart : 450, xEnd : 330, yEnd : 450, direction : 1 , health : 100},
    {xStart : 900, yStart : 450, xEnd : 570, yEnd : 450, direction : -1, health : 100},
    {xStart : 360, yStart : 360, xEnd : 570, yEnd : 360, direction : 1, health : 100},
    {xStart : 30, yStart : 210, xEnd : 900, yEnd : 210, direction : 1, health : 100},
    {xStart : 210, yStart : 540, xEnd : 720, yEnd : 540, direction : -1, health : 100},    
]
//STAGE 3

const COIN_POSITION_STAGE_3 = [
    {X:20,Y:20},{X:4,Y:20}, {X:30,Y:19}, {X:27,Y:16}, {X:23,Y:22}, {X:23,Y:18}, {X:17,Y:18},
    {X:1,Y:16}, {X:11,Y:18},  {X:15,Y:13}, {X:26,Y:13},
    {X:10,Y:11}, {X:3,Y:13}, {X:10,Y:5}, {X:2,Y:7}, {X:3,Y:3}, {X:6,Y:1},
    {X:19,Y:1}, {X:29,Y:1}, {X:13,Y:3}, {X:27,Y:3}, {X:20,Y:7}, {X:23,Y:9},
    {X:16,Y:5}, {X:7,Y:9}, {X:16,Y:8}, {X:12,Y:7},{X:25,Y:5}, {X:7,Y:14}, {X:10,Y:16},
    
]
const GROUND_ENEMY_STAGE_3 = [
    {xStart : 360, yStart : 540, xEnd : 120, yEnd : 660, direction : -1, health : 100 },
    {xStart : 570, yStart : 540, xEnd : 820, yEnd : 600, direction : 1, health : 100},
    {xStart : 900, yStart : 330, xEnd : 30, yEnd : 330, direction : -1, health :100},
    {xStart : 90, yStart : 90, xEnd : 390, yEnd : 90, direction : 1, health : 100},
]

const SPACE_ENEMY_STAGE_3 = [
    {xStart : 30, yStart : 30, xEnd : 870, yEnd : 30, direction : 1 , health : 100},
    {xStart : 900, yStart : 90, xEnd : 570, yEnd : 420, direction : -1, health : 100},
    {xStart : 30, yStart : 390, xEnd : 900, yEnd : 390, direction : 1, health : 100},
    {xStart : 120, yStart : 210, xEnd : 360, yEnd : 210, direction : 1, health : 100},
    {xStart : 510, yStart : 480, xEnd : 420, yEnd : 480, direction : -1, health : 100},    
]