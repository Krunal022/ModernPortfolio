Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier( 0.59, 0.51, 0.18, 0.45 )",
    duration: .7,
  });

  gsap.from(".nlink",{
    stagger:.1,
    y:10,
    duration:1,
    ease:Power2,
    opacity:0
});

  Shery.textAnimate("#herotext h1", {
    style: 1,
    y: 10,
    delay: 0.1,
    duration: .5,
  });
  
  Shery.makeMagnet(".nlink" ,{
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });