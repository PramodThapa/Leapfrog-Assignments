let wrapper = document.createElement("div");
document.body.appendChild(wrapper);
wrapper.setAttribute("id", "wrapper");
wrapper.style.width = "500px";
wrapper.style.height = "500px";
wrapper.style.border = "1px solid black";
wrapper.style.position = "relative";

//Ball
let ball = document.createElement("div");
wrapper.appendChild(ball);
ball.style.width = "50px";
ball.style.height = "50px";
ball.style.backgroundColor = "black";
ball.style.borderRadius = "50%";
ball.style.position = "absolute";
ball.style.left = "50%";
ball.style.transform = "translate(-50%, 0)";

let y = 0;
let speed = 2;
let wrapperHeight = wrapper.clientHeight;
let ballHeight = ball.clientHeight;

// Collison mechanism
setInterval(() => {
  y = y + speed;
  const topValue = y + "px";
  ball.style.top = topValue;
  if (y <= 0 || y > wrapperHeight - ballHeight) {
    speed = -speed;
  }
}, 10);