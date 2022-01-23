window.addEventListener("scroll" , function(){
    let nav = document.getElementById("navbar");
    nav.classList.toggle("sticky" , window.scrollY > 1);
})
const counter0 = document.querySelectorAll(".choose-counter-numbers")[0];
const counter1 = document.querySelectorAll(".choose-counter-numbers")[1];
const counter2 = document.querySelectorAll(".choose-counter-numbers")[2];
const speed0 = 250;
const speed1 = 350;
const speed2 = 100;
const update0 = () =>{
    const target0 = +counter0.getAttribute("data-target");
    const count0 = +counter0.innerHTML;
    const inc0 = target0/speed0;
    if(count0 < target0){
        counter0.innerHTML = Math.ceil(count0 +inc0);
        setTimeout(update0,1);
    }else{
        count0.innerHTML = target0;
    }
 } 
update0();
 const update1 = () =>{
    const target1 = +counter1.getAttribute("data-target");
    const count1 = +counter1.innerHTML;
    const inc1 = target1/speed1;
    if(count1 < target1){
        counter1.innerHTML = Math.ceil(count1 +inc1);
        setTimeout(update1,1);
    }else{
        count1.innerHTML = target1;
    }
 } 
 update1();
 const update2 = () =>{
    const target2 = +counter2.getAttribute("data-target");
    const count2 = +counter2.innerHTML;
    const inc2 = target2/speed2;
    if(count2 < target2){
        counter2.innerHTML = Math.ceil(count2 +inc2);
        setTimeout(update2,30);
    }else{
        count2.innerHTML = target2;
    }
 } 
 update2();
let test = document.getElementById('testimonials-area');
let control1 = document.getElementById('control1');
let control2 = document.getElementById('control2')
let control3 = document.getElementById('control3');

control1.onclick = function(){
    test.style.transform = "translateX(870px)";
    control1.classList.add("active");
    control2.classList.remove("active");
    control3.classList.remove("active");
}
control2.onclick = function(){
    test.style.transform = "translateX(0px)";
    control1.classList.remove("active");
    control2.classList.add("active");
    control3.classList.remove("active");
}
control3.onclick = function(){
    test.style.transform = "translateX(-870px)";
    control1.classList.remove("active");
    control2.classList.remove("active");
    control3.classList.add("active");
}


