let fish_img;
let fish_img_flipped;
let fish_render_img;
let fist_x;

const canvas_dim = 400;

function preload() {
  fish_img = loadImage('fish.png');
  fish_img_flipped = loadImage('fish_flipped.png')
  fish_render_img = fish_img
  fish_x = 10;
  step = 4;
}

function setup() {
  //frameRate(40)
  createCanvas(canvas_dim, canvas_dim);
}

function draw() {
  background(0, 150, 255);
  image(fish_render_img, fish_x, 200, 80, 80);
  fish_x += step;
  if(fish_x+80 > canvas_dim){
    fish_render_img = fish_img_flipped
    step = -4;
  }
  if(fish_x<=0){
    fish_render_img = fish_img
    step = 4;
  }
}
