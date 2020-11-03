const canvas = document.getElementById("mainCanvas");
const ctx = canvas.getContext("2d");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const brushSize = document.getElementById("sizeBrush");
const clearBtn = document.getElementById("clearCanvasPlz");


let size = 30;
let x = 50;
let y = 50;


var isPressed = false;


canvas.addEventListener("mousedown", () => {
    isPressed = true;
});

canvas.addEventListener("mouseup", () => {
    isPressed = false;
});

canvas.addEventListener("mousemove", (e) => {
    x = e.offsetX;
    y = e.offsetY;

    if (isPressed == true) {
        drawCircle(x, y);
    }
});

clearBtn.addEventListener("click", () => {
    clearCanvas();
});

function updateSizeOnScreen() {
    brushSize.innerText = size;
}

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

function decreaseSz() {
    if (size >= 50) {
        size -= 5;
    }
}

function drawCircle(x, y) {
    ctx.beginPath(); 
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
}

// drawCircle(x, y);