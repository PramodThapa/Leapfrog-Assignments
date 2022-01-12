const ROW = 24;
const COLUMN = 32;

canvas.width = 960;
canvas.height = 720;

let WIDTH = canvas.width;
let HEIGHT = canvas.height;

const TILES_WIDTH = 30
const TILES_HEIGHT = 30

const MAP_STAGE_1 = [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 5,
    2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 7,
    2, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 8, 1, 3, 2,
    2, 1, 1, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 2,
    2, 0, 0, 8, 0, 0, 0, 8, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 2,
    2, 1, 1, 1, 1, 1, 1, 8, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 2,
    2, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 2,
    2, 1, 1, 1, 0, 0, 0, 1, 1, 8, 1, 1, 2, 0, 0, 0, 0, 0, 2, 1, 1, 8, 1, 1, 0, 0, 0, 0, 1, 1, 1, 2,
    2, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 2, 2, 2, 0, 2, 2, 2, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
    2, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
    2, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 8, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 2,
    2, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 2,
    2, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
    2, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
    2, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
    2, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 2,
    2, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 2,
    2, 1, 1, 1, 0, 0, 8, 0, 0, 1, 1, 1, 2, 2, 2, 0, 2, 2, 2, 1, 1, 1, 0, 0, 8, 0, 0, 0, 1, 1, 1, 2,
    2, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 2,
    2, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 2, 2, 2, 8, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 2,
    2, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 2,
    2, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 2,
    2, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 
]

const MAP_STAGE_2 = [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 5,
    2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 7,
    2, 2, 2, 2, 2, 2, 1, 1, 8, 1, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 1, 8, 1, 1, 2, 2, 2, 2, 2, 2,
    2, 2, 0, 0, 0, 2, 0, 0, 8, 0, 2, 0, 0, 0, 2, 1, 1, 2, 0, 0, 0, 2, 0, 8, 0, 0, 2, 0, 0, 0, 2, 2,
    2, 2, 2, 8, 2, 2, 0, 8, 1, 1, 2, 2, 8, 2, 2, 0, 0, 2, 2, 8, 2, 2, 1, 1, 8, 0, 2, 2, 8, 2, 2, 2,
    2, 0, 0, 8, 0, 0, 0, 8, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 8, 0, 0, 0, 8, 0, 0, 2,
    2, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 2,
    2, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 2,
    2, 0, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 0, 2,
    2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2,
    2, 1, 1, 8, 1, 2, 2, 2, 0, 2, 2, 2, 1, 1, 8, 1, 1, 8, 1, 1, 2, 2, 2, 0, 2, 2, 2, 1, 8, 1, 1, 2,
    2, 0, 0, 8, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 8, 0, 0, 8, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 8, 0, 0, 2,
    2, 0, 0, 8, 0, 2, 2, 2, 8, 2, 2, 2, 0, 0, 8, 0, 0, 8, 0, 0, 2, 2, 2, 8, 2, 2, 2, 0, 8, 0, 0, 2,
    2, 0, 0, 8, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 8, 0, 0, 8, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 8, 0, 0, 2,
    2, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 2,
    2, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 2,
    2, 0, 0, 0, 0, 8, 1, 1, 1, 1, 1, 8, 0, 0, 0, 0, 0, 0, 0, 0, 8, 1, 1, 1, 1, 1, 8, 0, 0, 0, 0, 2,
    2, 1, 1, 8, 1, 1, 0, 0, 0, 0, 0, 1, 8, 1, 1, 1, 1, 1, 1, 8, 1, 0, 0, 0, 0, 0, 1, 1, 8, 1, 1, 2,
    2, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 2,
    2, 2, 2, 8, 2, 2, 2, 0, 0, 0, 2, 2, 8, 2, 2, 0, 0, 2, 2, 8, 2, 2, 0, 0, 0, 2, 2, 2, 8, 2, 2, 2,
    2, 2, 0, 8, 0, 2, 2, 1, 1, 0, 2, 0, 8, 0, 2, 1, 1, 2, 0, 8, 0, 2, 0, 1, 1, 2, 2, 0, 8, 0, 2, 2,
    2, 2, 0, 8, 0, 2, 2, 0, 0, 0, 2, 0, 8, 0, 2, 0, 0, 2, 0, 8, 0, 2, 0, 0, 0, 2, 2, 0, 8, 0, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
]

const MAP_STAGE_3 = [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 5,
    2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 7,
    2, 1, 1, 8, 0, 1, 1, 1, 0, 1, 1, 1, 0, 8, 1, 1, 1, 1, 8, 0, 1, 1, 1, 0, 1, 1, 1, 0, 8, 1, 1, 2,
    2, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 2,
    2, 0, 8, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 8, 0, 0, 8, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 8, 0, 2,
    2, 0, 8, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 8, 0, 0, 8, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 8, 0, 2,
    2, 1, 8, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 8, 1, 1, 8, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 8, 1, 2,
    2, 0, 8, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 8, 0, 0, 8, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 8, 0, 2,
    2, 0, 8, 2, 2, 2, 2, 2, 8, 2, 2, 2, 2, 2, 8, 0, 0, 8, 2, 2, 2, 2, 2, 8, 2, 2, 2, 2, 2, 8, 0, 2,
    2, 1, 8, 2, 0, 0, 0, 0, 8, 0, 0, 0, 0, 2, 8, 1, 1, 8, 2, 0, 0, 0, 0, 8, 0, 0, 0, 0, 2, 8, 1, 2,
    2, 0, 8, 2, 2, 2, 2, 2, 8, 2, 2, 2, 2, 2, 8, 0, 0, 8, 2, 2, 2, 2, 2, 8, 2, 2, 2, 2, 2, 8, 0, 2,
    2, 0, 8, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 8, 0, 0, 8, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 8, 0, 2, 
    2, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 2,
    2, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 2,
    2, 1, 8, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 8, 1, 1, 8, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 8, 1, 2,
    2, 0, 8, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 8, 0, 0, 8, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 8, 0, 2,
    2, 0, 8, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 8, 0, 0, 8, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 8, 0, 2,
    2, 1, 8, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 8, 1, 1, 8, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 8, 1, 2,
    2, 0, 8, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 8, 0, 0, 8, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 8, 0, 2,
    2, 0, 8, 2, 2, 2, 2, 2, 8, 2, 2, 2, 2, 2, 8, 0, 0, 8, 2, 2, 2, 2, 2, 8, 2, 2, 2, 2, 2, 8, 0, 2,
    2, 1, 8, 2, 0, 0, 0, 0, 8, 0, 0, 0, 0, 2, 8, 1, 1, 8, 2, 0, 0, 0, 0, 8, 0, 0, 0, 0, 2, 8, 1, 2,
    2, 0, 8, 2, 2, 2, 2, 2, 8, 2, 2, 2, 2, 2, 8, 0, 0, 8, 2, 2, 2, 2, 2, 8, 2, 2, 2, 2, 2, 8, 0, 2,
    2, 0, 8, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 8, 0, 0, 8, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 8, 0, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
]  

const COLLISION_ARRAY_STAGE_1 = [

    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 5],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 7],
    [2, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 8, 1, 3, 2],
    [2, 1, 1, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 2],
    [2, 0, 0, 8, 0, 0, 0, 8, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 8, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 1, 1, 1, 0, 0, 0, 1, 1, 8, 1, 1, 2, 0, 0, 0, 0, 0, 2, 1, 1, 8, 1, 1, 0, 0, 0, 0, 1, 1, 1, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 2, 2, 2, 0, 2, 2, 2, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 8, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 2],
    [2, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 2],
    [2, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 2],
    [2, 1, 1, 1, 0, 0, 8, 0, 0, 1, 1, 1, 2, 2, 2, 0, 2, 2, 2, 1, 1, 1, 0, 0, 8, 0, 0, 0, 1, 1, 1, 2],
    [2, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 2, 2, 2, 8, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 2],
    [2, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
]

const COLLISION_ARRAY_STAGE_2 = [

    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 5],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 7],
    [2, 2, 2, 2, 2, 2, 1, 1, 8, 1, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 1, 8, 1, 1, 2, 2, 2, 2, 2, 2],
    [2, 2, 0, 0, 0, 2, 0, 0, 8, 0, 2, 0, 0, 0, 2, 1, 1, 2, 0, 0, 0, 2, 0, 8, 0, 0, 2, 0, 0, 0, 2, 2],
    [2, 2, 2, 8, 2, 2, 0, 8, 1, 1, 2, 2, 8, 2, 2, 0, 0, 2, 2, 8, 2, 2, 1, 1, 8, 0, 2, 2, 8, 2, 2, 2],
    [2, 0, 0, 8, 0, 0, 0, 8, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 8, 0, 0, 0, 8, 0, 0, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 0, 2],
    [2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2],
    [2, 1, 1, 8, 1, 2, 2, 2, 0, 2, 2, 2, 1, 1, 8, 1, 1, 8, 1, 1, 2, 2, 2, 0, 2, 2, 2, 1, 8, 1, 1, 2],
    [2, 0, 0, 8, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 8, 0, 0, 8, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 8, 0, 0, 2],
    [2, 0, 0, 8, 0, 2, 2, 2, 8, 2, 2, 2, 0, 0, 8, 0, 0, 8, 0, 0, 2, 2, 2, 8, 2, 2, 2, 0, 8, 0, 0, 2],
    [2, 0, 0, 8, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 8, 0, 0, 8, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 8, 0, 0, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 8, 1, 1, 1, 1, 1, 8, 0, 0, 0, 0, 0, 0, 0, 0, 8, 1, 1, 1, 1, 1, 8, 0, 0, 0, 0, 2],
    [2, 1, 1, 8, 1, 1, 0, 0, 0, 0, 0, 1, 8, 1, 1, 1, 1, 1, 1, 8, 1, 0, 0, 0, 0, 0, 1, 1, 8, 1, 1, 2],
    [2, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 2],
    [2, 2, 2, 8, 2, 2, 2, 0, 0, 0, 2, 2, 8, 2, 2, 0, 0, 2, 2, 8, 2, 2, 0, 0, 0, 2, 2, 2, 8, 2, 2, 2],
    [2, 2, 0, 8, 0, 2, 2, 1, 1, 0, 2, 0, 8, 0, 2, 1, 1, 2, 0, 8, 0, 2, 0, 1, 1, 2, 2, 0, 8, 0, 2, 2],
    [2, 2, 0, 8, 0, 2, 2, 0, 0, 0, 2, 0, 8, 0, 2, 0, 0, 2, 0, 8, 0, 2, 0, 0, 0, 2, 2, 0, 8, 0, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
]

const COLLISION_ARRAY_STAGE_3 = [

    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 5],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 7],
    [2, 1, 1, 8, 0, 1, 1, 1, 0, 1, 1, 1, 0, 8, 1, 1, 1, 1, 8, 0, 1, 1, 1, 0, 1, 1, 1, 0, 8, 1, 1, 2],
    [2, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 2],
    [2, 0, 8, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 8, 0, 0, 8, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 8, 0, 2],
    [2, 0, 8, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 8, 0, 0, 8, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 8, 0, 2],
    [2, 1, 8, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 8, 1, 1, 8, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 8, 1, 2],
    [2, 0, 8, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 8, 0, 0, 8, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 8, 0, 2],
    [2, 0, 8, 2, 2, 2, 2, 2, 8, 2, 2, 2, 2, 2, 8, 0, 0, 8, 2, 2, 2, 2, 2, 8, 2, 2, 2, 2, 2, 8, 0, 2],
    [2, 1, 8, 2, 0, 0, 0, 0, 8, 0, 0, 0, 0, 2, 8, 1, 1, 8, 2, 0, 0, 0, 0, 8, 0, 0, 0, 0, 2, 8, 1, 2],
    [2, 0, 8, 2, 2, 2, 2, 2, 8, 2, 2, 2, 2, 2, 8, 0, 0, 8, 2, 2, 2, 2, 2, 8, 2, 2, 2, 2, 2, 8, 0, 2],
    [2, 0, 8, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 8, 0, 0, 8, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 8, 0, 2], 
    [2, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 1, 8, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 8, 1, 1, 8, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 8, 1, 2],
    [2, 0, 8, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 8, 0, 0, 8, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 8, 0, 2],
    [2, 0, 8, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 8, 0, 0, 8, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 8, 0, 2],
    [2, 1, 8, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 8, 1, 1, 8, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 8, 1, 2],
    [2, 0, 8, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 8, 0, 0, 8, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 8, 0, 2],
    [2, 0, 8, 2, 2, 2, 2, 2, 8, 2, 2, 2, 2, 2, 8, 0, 0, 8, 2, 2, 2, 2, 2, 8, 2, 2, 2, 2, 2, 8, 0, 2],
    [2, 1, 8, 2, 0, 0, 0, 0, 8, 0, 0, 0, 0, 2, 8, 1, 1, 8, 2, 0, 0, 0, 0, 8, 0, 0, 0, 0, 2, 8, 1, 2],
    [2, 0, 8, 2, 2, 2, 2, 2, 8, 2, 2, 2, 2, 2, 8, 0, 0, 8, 2, 2, 2, 2, 2, 8, 2, 2, 2, 2, 2, 8, 0, 2],
    [2, 0, 8, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 8, 0, 0, 8, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 8, 0, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
]
class Map{
    constructor(){

    }

    drawMap(img){
        for(let index = 0 ; index < MAP.length; index++){
            let value = MAP[index];
            let sourceX = value * 60;
            let sourceY = 0;
            let destinationX = (index % COLUMN) * TILES_WIDTH;
            let destinationY = Math.floor(index / COLUMN) * TILES_HEIGHT;
            ctx.drawImage(img, sourceX, sourceY, 60, 64, destinationX, destinationY, TILES_WIDTH, TILES_HEIGHT)       
        }
    }
}