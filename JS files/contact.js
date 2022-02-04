    window.addEventListener("scroll" , function(){
    let nav = document.getElementById("navbar");
    nav.classList.toggle("sticky" , window.scrollY > 1);
})
const hamburger = document.getElementById("hamburger");
const hamburgerClose = document.getElementById("hamburger-close");
const nav = document.getElementById("menu-items");  
hamburger.addEventListener('click', () => {
  nav.style.display = 'flex';
  nav.style.top = '0';  
})
hamburgerClose.addEventListener('click', () => {
  nav.style.top = '-100%';
})
document.querySelectorAll('.accordion-button').forEach(button=>{
    button.addEventListener('click', ()=>{
        button.classList.toggle("accordion-button--active");   
    })
})
