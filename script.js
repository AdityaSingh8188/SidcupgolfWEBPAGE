var crsr = document.querySelector("#cursor") 
 document.addEventListener("mousemove",function(dets){
    crsr.style.left = (dets.x -12) + "px"
    crsr.style.top = (dets.y -12) + "px"
})
var crsrB = document.querySelector("#cursor-blur") 
 document.addEventListener("mousemove",function(dets){
    crsrB.style.left = (dets.x - 100) + "px"
    crsrB.style.top = (dets.y - 100) + "px"
})

var h4all =document.querySelectorAll("#nav h4")
h4all.forEach(function(element){
    element.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border="1px solid #fff"
        crsr.style.backgroundColor="transparent"
        if(crsr.hover){

        }
    })
    element.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border="0px solid #95C11E"
        crsr.style.backgroundColor="#95C11E"
    })
})

gsap.to("#nav",{
    backgroundColor : "#000",
    height : "115px",
    duration :"0.7",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
       // markers:true,
        start: "top -10%",
        end:"top -11 %",
        scrub:4
    }
})
gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -1%",
        end:"top -68%",
        scrub:3,
    }
}) 
gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity: 0,
    duration: 1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:3,
    }
})
gsap.from(".card",{
    scale:0.5,
    opacity: 0,
    duration: 1,
   // stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        //markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2,
    }
})
gsap.from("#colon1",{
    x:-65,
    y:-65,
    //stagger:0.4,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        //markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2,
    }
})
gsap.from("#colon2",{
    x:65,
    y:65,
    //stagger:0.4,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        //markers:true,
        start:"top 100%",
        end:"top 60%",
        scrub:1,
    }
})
gsap.from("#page4 h1",{
    y:-65,
    x:-65,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        //markers:true,
        start:"top 100%",
        end:"top 60%",
        scrub:1,
    }
})