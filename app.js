// const child = document.querySelector(".child");

// child.addEventListener('click', e => {

// });

const canvas = document.getElementById('whiteboard');
const canvasCtx = canvas.getContext('2d');

//Defines line color
canvasCtx.strokeStyle = '#000';
//Defines drawing line width
canvasCtx.linewidth = 10;
// defines line shape
canvasCtx.lineCap = 'round';

//keeps track if user is drawing or not
let isDraw = false;
// store the beginning of the line
let lastX = 0;
let lastY = 0;

//is run when user clicks inside of canvas
canvas.addEventListener('mousedown', (event) => {
    init(event);
    isDraw = true;
    console.log("True");
})
//run when user stops moving inside of canvas
canvas.addEventListener('mouseup', (event) => {
    isDraw = false;
})
//is run when the user moves mouse inside of canvas 
canvas.addEventListener('mousemove', (event) => {
    draw(event);  
})

//run when users mouse leaves canvas
canvas.addEventListener('mouseleave', (event) => {
    isDraw = false;
})

function init(event) {
    lastX = event.offsetX;
    lastY = event.offsetY;
}
function draw(event) {
    if (isDraw) {
        canvasCtx.beginPath();
        canvasCtx.moveTo(lastX, lastY);
        canvasCtx.lineTo(event.offsetX, event.offsetY);
        canvasCtx.stroke();
        canvasCtx.closeParg();
        lastX = event.offsetX;
        lastY = event.offsetY;
    }
   
}

function showSideBar() {
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.display = 'flex';
}

function hideSideBar() {
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.display = 'none';
}