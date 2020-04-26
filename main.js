const width = 300;
const height = 300;

window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = width;
  canvas.height = height;

  let originX = width / 2;
  let originY = height / 2;
  let radian = 0;
  let radianX = 0;
  let prev = {
    x: originX + Math.cos(radianX) * 75,
    y: originY + Math.sin(radian) * 22
  };
  const update = () => {
    //ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
    ctx.fillRect(0, 0, width, height);

    let x = originX + Math.cos(radianX) * 75;
    let y = originY + Math.sin(radian) * 22;

    ctx.strokeStyle = "purple";

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.moveTo(prev.x, prev.y);
    ctx.lineTo(x, y);
    ctx.stroke();

    radian += 0.1;
    radianX += 0.05;
    prev.x = x;
    prev.y = y;
    requestAnimationFrame(update);
  };

  update();
});
