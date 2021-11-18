const up = document.querySelector('#up')
const down = document.querySelector('#down')
const left = document.querySelector('#left')
const right = document.querySelector('#right')
const center = document.querySelector('#center')

const screen = document.querySelector(".screen")
const cat = document.querySelector(".cat")

setInterval(() => {cat.classList.toggle('movement')}, 200);

right.addEventListener("click", () =>{
    screen.style.backgroundPositionX = `right`;
})

left.addEventListener("click", () =>{
    screen.style.backgroundPositionX = `left`; 
})

up.addEventListener("click", () =>{
    cat.style.position = "absolute"; 
    cat.style.top = "110px"; 
})

down.addEventListener("click", () =>{
    cat.style.position = "absolute"; 
    cat.style.top = "370px"; 
})

center.addEventListener("click", () =>{
    cat.style.position = "absolute"; 
    cat.style.top = "250px"; 
})