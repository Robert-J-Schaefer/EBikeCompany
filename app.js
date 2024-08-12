const child = document.querySelector(".child");

child.addEventListener('click', e => {
    
});

function showSideBar(){
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.display = 'flex';
}

function hideSideBar(){
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.display = 'none';
}