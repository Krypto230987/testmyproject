const canvas = document.getElementById("game");
const contex = canvas.getContext("2d");

// конструктор Img фон
// конструктор Img м



const bgImg = new Image();
bgImg.src="01.png";

const carrotImg = new Image();
carrotImg.src="1.png";


let box=32;
let score = 0;
contex.fillStyle = "white";


let food={
  x:Math.floor((Math.random()*17+1))*box,
  y:Math.floor((Math.random()*15+3))*box

};

let snake=[];
snake[0]={
  x:9*box,
  y:10*box
};
let dir;
document.addEventListener("keydown", derection);

function  derection(event){
  if(event.keyCode==37 && dir!='right')
  dir ='left'

  if(event.keyCode==38 && dir!='down')
  dir ='up'
  if(event.keyCode==39 && dir!='left')
  dir ='right'
  if(event.keyCode==40 && dir!='up')
  dir ='down'

}


function eatTail(head,arr){
  for(let i=0;i<arr.length;i++){
    if(head.x == arr[i].x && head.y==arr[i].y){
      clearInterval(game);
    }
  }
}




function drawGame() {
  contex.drawImage(bgImg, 0, 0);

  contex.drawImage(carrotImg, food.x, food.y);

  for(let i = 0; i < snake.length; i++) {
    contex.fillStyle = i == 0 ? "green" : "red";
    contex.fillRect(snake[i].x, snake[i].y, box, box);
  }

  contex.fillStyle = "white";
  contex.font = "50px Arial";
  contex.fillText(score, box * 2.5, box * 1.7);
  


  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if(snakeX == food.x && snakeY == food.y) {
    score++;
    food = {
      x: Math.floor((Math.random()*  17 + 1)) * box,
      y: Math.floor((Math.random()*  15 + 3)) * box
    };
  } else {
    snake.pop();
  }

  if(snakeX < box || snakeX > box * 17
    || snakeY < 3 * box || snakeY > box * 17)
      clearInterval(game);
 
    


  if(dir == "left") snakeX -= box;
  if(dir == "right") snakeX += box;
  if(dir == "up") snakeY -= box;
  if(dir == "down") snakeY += box;

  let newHead = {
    x: snakeX,
    y: snakeY
  };

  eatTail(newHead, snake);

  snake.unshift(newHead);
}

let game = setInterval(drawGame, 400);
