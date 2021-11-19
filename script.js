const up = document.querySelector('#up')
const down = document.querySelector('#down')
const left = document.querySelector('#left')
const right = document.querySelector('#right')
const center = document.querySelector('#center')

const screen = document.querySelector(".screen")
const cat = document.querySelector(".cat")

setInterval(() => {cat.classList.toggle('movement')}, 200);

right.addEventListener(("click"), () =>{
    cat.style.left = `200px`;
    screen.style.backgroundPositionX = `right`;
})

left.addEventListener("click", () =>{
    cat.style.left = `-10px`;
    screen.style.backgroundPositionX = `left`; 
})

up.addEventListener("click", () =>{ 
    cat.style.top = "50px"; 
})

down.addEventListener("click", () =>{
    cat.style.top = "300px"; 
})

center.addEventListener("click", () =>{
    cat.style.top = "150px";
    cat.style.left = "100px"; 
})