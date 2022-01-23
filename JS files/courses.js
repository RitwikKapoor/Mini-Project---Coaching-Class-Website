    window.addEventListener("scroll" , function(){
    let nav = document.getElementById("navbar");
    nav.classList.toggle("sticky" , window.scrollY > 1);
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