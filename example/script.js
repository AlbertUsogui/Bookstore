gsap.registerPlugin(ScrollTrigger);
gsap.to(".kotak",{
    x:300,
    duration:4,
    // rotation :180
    scrollTrigger:{
        trigger:".kotak",
        start: "top 70%", 
        end: "top 30%",
        scrub: true,
        markers:true
    }
})