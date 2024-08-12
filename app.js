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
let lastY = o;

//is run when user clicks inside of canvas
canvas.addEventListener('mousedown', (event) =>{
    isDrawing = true;
    const {offsetX, offsetY} = event;
    lastX = offsetX;
    lastY= offsetY;
})
//is run when the user stops clicking inside of canvs 
canvas.addEventListener('mousemove' , (event) => {
    const{offsetX, offsetY} = event;
    if(isDrawing){
        canvasCtx.beginPath();
        canvasCtx.moveTo(lastX, lastY);
        canvasCtx.lineTo(offsetx, offsetY);
        lastX =offsetX;
        lastY = offsetY;
    }
})
//run when user starts moving inside of canvas
canvas.addEventListener('mouseup' , (event) => {
    isDrawing = false;
})
//run when users mouse leaves canvas
canvas.addEventListener('mouseleave' , (event) => {
    isDrawing = false;
})
function showSideBar() {
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.display = 'flex';
}

function hideSideBar() {
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.display = 'none';
}