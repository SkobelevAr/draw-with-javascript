const canvas = document.getElementById("mainCanvas");
const ctx = canvas.getContext("2d");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const brushSize = document.getElementById("sizeBrush");
const clearBtn = document.getElementById("clearCanvasPlz");
const colorEl = document.getElementById("color");

let size = 30;
let color = 'black';
let x = undefined;
let y = undefined;

var isPressed = false;


canvas.addEventListener("mousedown", (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener("mouseup", () => {
    isPressed = false;

    x = undefined;
    y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});

clearBtn.addEventListener("click", () => {
    clearCanvas();
});

function updateSizeOnScreen() {
    brushSize.innerText = size;
}

colorEl.addEventListener("change", (e) => {
    color = e.target.value;
});

increaseBtn.addEventListener("click", () => {
    if (size < 50) {
        size += 5;
    } else {
        size = 50;
    }

    updateSizeOnScreen();
});

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

decreaseBtn.addEventListener("click", () => {
    if (size > 5) {
        size -= 5;
    } else {
        size = 5;
    }

    updateSizeOnScreen();
});

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath(); 
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

function decreaseSz() {
    if (size >= 50) {
        size -= 5;
    }
}

function drawCircle(x, y) {
    ctx.beginPath(); 
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();

    requestAnimationFrame(drawCircle);
}

drawCircle();