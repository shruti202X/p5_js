const canvas_width = 500;
const canvas_height = 500;
const resolution = 10;

let cols;
let rows;
let grid;
let red_color_val;
let green_color_val;
let blue_color_val;
let sand_color;
let step = 0;

function setup() {
  createCanvas(canvas_width, canvas_height);
  frameRate(30);
  cols = floor(canvas_width/resolution);
  rows = floor(canvas_height/resolution);
  grid = make_2d_array(rows, cols);
  red_color_val = 249;
  green_color_val = 180;
  blue_color_val = 135;
  sand_color = color(red_color_val, green_color_val, blue_color_val)
}

function draw() {
  let i = rows-1;
  for(let j=0; j<cols; j++){
    fill(grid[i][j])
    noStroke();
    square(j*resolution, i*resolution, resolution);
  }
  i--;
  for(;i>=0; i--){
    for(let j=0; j<cols; j++){
      fill(grid[i][j])
      noStroke()
      square(j*resolution, i*resolution, resolution);
      if(grid[i+1][j]==0){
        grid[i+1][j] = grid[i][j];
        grid[i][j] = 0;
      }else if(grid[i+1][j+1]!=0){
        if(grid[i+1][j-1]==0){
          grid[i+1][j-1] = grid[i][j];
          grid[i][j] = 0;
        }
      }else if(grid[i+1][j-1]!=0){
        if(grid[i+1][j+1]==0){
          grid[i+1][j+1] = grid[i][j];
          grid[i][j] = 0;
        }
      }else{
        if(random()<0.5){
          grid[i+1][j+1] = grid[i][j];
        }else{
          grid[i+1][j-1] = grid[i][j];
        }
        grid[i][j] = 0;
      }
    }
  }
}

function make_2d_array(rows, cols){
  let arr = new Array(rows);
  for(let i=0; i<rows; i++){
    arr[i] = new Array(cols);
    for(let j=0; j<cols; j++){
      arr[i][j] = 0;
    }
  }
  return arr;
}

function mouseMoved(){
  let x = floor(mouseX/resolution);
  let y = floor(mouseY/resolution);
  if(x>=0 && y>=0 && x<cols && y<rows){
    grid[y][x] = sand_color;
    step++;
    if(step>8){
      step = 0;
      red_color_val = (red_color_val+11)%256;
      green_color_val = (green_color_val+11)%256;
      blue_color_val = (blue_color_val+11)%256;
      sand_color = color(red_color_val, green_color_val, blue_color_val);
    }
  }
}