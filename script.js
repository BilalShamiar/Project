function loaderanimation(){
    let tl = gsap.timeline();
tl.to(".yellow1",{
top:"-100%",
delay:0.2,
duration:0.5,
ease:"ease.out"
})

tl.from(".yellow2",{
    top:"100%",
    delay:0.7,
    duration:0.5,
    ease:"ease.out"
},"sath ho tere");

tl.to(".loader h1",{
    color:"black",
    delay:0.7,
},"sath ho tere");

tl.to(".loader",{
    opacity:0,
})
tl.to(".loader",{
    display:"none",
})

}
loaderanimation();


function locomotive() {
    const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

document.querySelector("#footer h2").addEventListener("click",()=>{
    scroll.scrollTo(0);
    
})

let elems = document.querySelectorAll(".elem");
let page = document.querySelector(".page2");
elems.forEach((element)=>{
    element.addEventListener("mouseenter",()=>{
       var bgimg = element.getAttribute("data-img");
       page.style.backgroundImage = `url(${bgimg})`
    })
    element.addEventListener("mouseleave",()=>{
        page.style.backgroundImage="none";
    })
})
}

locomotive();


