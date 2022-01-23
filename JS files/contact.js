    window.addEventListener("scroll" , function(){
    let nav = document.getElementById("navbar");
    nav.classList.toggle("sticky" , window.scrollY > 1);
})

document.querySelectorAll('.accordion-button').forEach(button=>{
    button.addEventListener('click', ()=>{
        button.classList.toggle("accordion-button--active");   
    })
})
