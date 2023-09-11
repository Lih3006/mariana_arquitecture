let ScrollContainer = document.querySelector('.container__principal--customers')
let backBtn = document.getElementById('backBtn')
let nextBtn = document.getElementById('nextBtn')

nextBtn.addEventListener('click', ()=>{
const windowWidth = window.innerWidth;
ScrollContainer.scrollLeft += windowWidth;
})

backBtn.addEventListener('click', ()=>{

const windowWidth = window.innerWidth;
ScrollContainer.scrollLeft -= windowWidth;
})