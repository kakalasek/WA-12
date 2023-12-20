const canvas = document.getElementById("cnv");
const ctx = canvas.getContext("2d");
let coord = { x: 0, y: 0 };

function draw(event) {
  ctx.beginPath();
  ctx.lineWidth = document.getElementById("stroke-width").value;
  ctx.lineCap = "round";
  ctx.strokeStyle = document.getElementById("color-type").value;
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

clearAll = () => {
  ctx.save();

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.restore();
};

importImage = () => {
  let img = new Image();
  img.src = document.getElementById("img-url").value;
  ctx.drawImage(img, 0, 0);
};

function resizeCanvasToDisplaySize() {
  const width = ctx.canvas.clientWidth;
  const height = ctx.canvas.clientHeight;

  if (ctx.canvas.width !== width || ctx.canvas.height !== height) {
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    return true;
  }

  return false;
}

resizeCanvasToDisplaySize();

document.addEventListener("mousedown", start);
document.addEventListener("mouseup", stop);
document.getElementById("clear-all").addEventListener("click", clearAll);
document
  .getElementById("img-url-button")
  .addEventListener("click", importImage);
