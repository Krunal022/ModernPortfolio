// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
  lerp: 0.1,
});

Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier( 0.59, 0.51, 0.18, 0.45 )",
  duration: 0.7,
});

// gsap.from(".nlink",{
//   stagger:.5,
//   y:100,
//   duration:1.2,
//   ease:Power2,
//   opacity:0
// });

// Shery.textAnimate("#heroleft h1,.hand", {
//   style: 1,
//   y: 10,
//   delay: 0.1,
//   duration: .5,
// });

Shery.makeMagnet(".nlink ", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
