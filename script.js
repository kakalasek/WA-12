const canvas = document.getElementById("cnv");
const ctx = canvas.getContext("2d");
let coord = { x: 0, y: 0 };

function draw() {
  ctx.beginPath();
  ctx.lineWidth = document.getElementById("stroke-width").value;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#ACD3ED";
  ctx.moveTo(coord.x, coord.y);
  reposition(event);
  ctx.lineTo(coord.x, coord.y);
  ctx.stroke();
}

function start(event) {
  document.addEventListener("mousemove", draw);
  reposition(event);
}

function stop() {
  document.removeEventListener("mousemove", draw);
}

function reposition(event) {
  coord.x = event.clientX - canvas.offsetLeft;
  coord.y = event.clientY - canvas.offsetTop;
}

document.addEventListener("mousedown", start);
document.addEventListener("mouseup", stop);
