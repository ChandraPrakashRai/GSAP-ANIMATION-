document.addEventListener("DOMContentLoaded", () => {
  gsap.to("#right img", {
    clipPath: "polygon(100% 0, 100% 100%, 100% 100%, 0% 100%, 0 80%, 0 0, 50% 0)",
    duration: 1.8,
    ease: "power2.inOut",
    // rotate: 360
  });

  gsap.from(".nav-bar ,.logo-name , .touch", {
    y:-100 ,
    opacity:-1,
    duration:1.6,
  })
  
  gsap.from("#left h2   ", {
    y:250 ,
    opacity:0,
    duration:1.5,
    delay:1.1,
  })
  
  gsap.from("#left p", {
    y:300 ,
    opacity:-1,
    duration:1.6,
    delay:2,
  })
  gsap.from(".btn", {
  z: 300,          // comes from the screen toward viewer
  opacity: 0,      // start invisible
  duration: 1.6,
  delay: 3,
  ease: "power3.out"
  })
});
