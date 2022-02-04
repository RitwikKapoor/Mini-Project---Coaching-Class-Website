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

const btns = document.querySelectorAll('.btn-is');
const items = document.querySelectorAll('.card');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click' , (e)=> {
    e.preventDefault();
        const filter = e.target.dataset.filter;
        items.forEach((item) =>{
                if(filter == "all"){
                    item.style.display = "block";
                }else{
                    if(item.classList.contains(filter)){
                            item.style.display = "block";
                    }else{
                        item.style.display = "none";
                    }
                }
        })
    } )
}

