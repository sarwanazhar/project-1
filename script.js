function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// --- RED PANEL ---
gsap.from(".line-1", {
  scrollTrigger: {
    trigger: ".line-1",
    scroller: "#main",
    scrub: true,
    start: "top bottom",
    end: "top top",
    onUpdate: self => console.log(self.direction)
  },
  scaleX: 0,
  transformOrigin: "left center", 
  ease: "none"
});


// --- ORANGE PANEL ---
gsap.from(".line-2", {
  scrollTrigger: {
    trigger: ".orange",
    scroller: "#main",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  },
  scaleX: 0, 
  transformOrigin: "left center", 
  ease: "none"
});


// --- PURPLE/GREEN PANEL ---
var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".purple",
      scroller: "#main",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%"
    }
  });

tl.from(".purple p", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
  .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
  .to(".purple", {backgroundColor: "#28a92b"}, 0);



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

  }
  locomotiveAnimation();
  
  function navbarAnimation() {
    gsap.to("#nav-part1 svg", {
      transform: "translateY(-100%)",
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
    gsap.to("#nav-part2 #links", {
      transform: "translateY(-100%)",
      opacity: 0,
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
  }
  navbarAnimation()
  
  function videoconAnimation() {
    var videocon = document.querySelector("#video-container");
    var playbtn = document.querySelector("#play");
    videocon.addEventListener("mouseenter", function () {
      gsap.to(playbtn, {
        scale: 1,
        opacity: 1,
      });
    });
    videocon.addEventListener("mouseleave", function () {
      gsap.to(playbtn, {
        scale: 0,
        opacity: 0,
      });
    });
    document.addEventListener("mousemove", function (dets) {
      gsap.to(playbtn, {
        left: dets.x - 70,
        top: dets.y - 80,
      });
    });
  }
  videoconAnimation();
  
  function loadinganimation() {
    gsap.from("#page1 h1", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 0.9,
      stagger: 0.3,
    });
    gsap.from("#page1 #video-container", {
      scale: 0.9,
      opacity: 0,
      delay: 1.3,
      duration: 0.5,
    });
  }
  loadinganimation();
  
  function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
      gsap.to("#cursor", {
        left: dets.x,
        top: dets.y,
      });
    });

    document.querySelectorAll("#child1").forEach(function (elem) {
      elem.addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%,-50%) scale(1.6)",
          backgroundColor: '#E59CBA',
          opacity: 0.3
        });
      });
      elem.addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%,-50%) scale(0)",
        });
      });
    });
    document.querySelectorAll("#child2").forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
          gsap.to("#cursor", {
            transform: "translate(-50%,-50%) scale(1.6)",
          backgroundColor: '#E59CBA',
          opacity: 0.3


          });
        });
        elem.addEventListener("mouseleave", function () {
          gsap.to("#cursor", {
            transform: "translate(-50%,-50%) scale(0)",
          });
        });
      });
      document.querySelectorAll("#child3").forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
          gsap.to("#cursor", {
            transform: "translate(-50%,-50%) scale(1.6)",
            backgroundColor: 'grey',
            opacity: 0.3
          });
        });
        elem.addEventListener("mouseleave", function () {
            gsap.to("#cursor", {
              transform: "translate(-50%,-50%) scale(0)",
            });
          });
        });
        document.querySelectorAll("#child4").forEach(function (elem) {
            elem.addEventListener("mouseenter", function () {
              gsap.to("#cursor", {
                transform: "translate(-50%,-50%) scale(1.6)",
                backgroundColor: 'grey',
                opacity: 0.3
              });
            });
            elem.addEventListener("mouseleave", function () {
                gsap.to("#cursor", {
                  transform: "translate(-50%,-50%) scale(0)",
                });
              });
            });
            document.querySelectorAll("#child5").forEach(function (elem) {
                elem.addEventListener("mouseenter", function () {
                  gsap.to("#cursor", {
                    transform: "translate(-50%,-50%) scale(1.6)",
                    backgroundColor: 'orange',
                    opacity: 0.3
                  });
                });
                elem.addEventListener("mouseleave", function () {
                    gsap.to("#cursor", {
                      transform: "translate(-50%,-50%) scale(0)",
                    });
                  });
                });
                document.querySelectorAll("#child6").forEach(function (elem) {
                    elem.addEventListener("mouseenter", function () {
                      gsap.to("#cursor", {
                        transform: "translate(-50%,-50%) scale(1.6)",
                        backgroundColor: 'orange',
                        opacity: 0.3
                      });
                    });
                    elem.addEventListener("mouseleave", function () {
                        gsap.to("#cursor", {
                          transform: "translate(-50%,-50%) scale(0)",
                        });
                      });
                    });
  }
  cursorAnimation();
  function h1sanimation(){
    gsap.from(".h11",{
      y:250,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".h11",
        start: 'top 100%',
        end: 'bottom 90%',
        scrub: false,
        scroller: "#main"
      }
     })
     gsap.from(".h12",{
      y:250,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".h12",
        start: 'top 100%',
        end: 'bottom 90%',
        scrub: false,
        scroller: "#main"
      }
     })
     gsap.from(".h13",{
      y:250,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".h13",
        start: 'top 100%',
        end: 'bottom 90%',
        scrub: false,
        scroller: "#main"
      }
     })
     gsap.from(".h14",{
      y:250,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".h14",
        start: 'top 100%',
        end: 'bottom 90%',
        scrub: false,
        scroller: "#main"
      }
     })
     gsap.from(".h15",{
      y:250,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".h15",
        start: 'top 100%',
        end: 'bottom 90%',
        scrub: false,
        scroller: "#main"
      }
     })
     gsap.from(".h17",{
      y:250,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".h17",
        start: 'top 100%',
        end: 'bottom 90%',
        scrub: false,
        scroller: "#main"
      }
     })
     gsap.from(".h16",{
      y:250,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".h16",
        start: 'top 100%',
        end: 'bottom 90%',
        scrub: false,
        scroller: "#main"
      }
     })
     gsap.from(".p",{
      x:-250,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".p",
        scroller: "#main",
        start: "top 75%",
        scrub: false
      }
     })
     gsap.from(".we",{
      x:250,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".we",
        scroller: "#main",
        start: "top 75%",
        scrub: false
      }
     })
  } 
  h1sanimation();
  function horizontal(){
    const section_1 = document.getElementById("vertical");
const col_left = document.querySelector(".col_left");
const timeln = gsap.timeline({ paused: true });

timeln.fromTo(col_left, {y: 0}, {y: '170vh', duration: 1, ease: 'none'}, 0);

const scroll_1 = ScrollTrigger.create({
    animation: timeln,
    trigger: section_1,
    start: 'top top',
    end: 'bottom center',
    scrub: true
});

const section_2 = document.getElementById("mainpage6");
let box_items = gsap.utils.toArray("#page6");

gsap.to(box_items, {
  xPercent: -100 * (box_items.length - 1),
  ease: "sine.out",
  scrollTrigger: {
    trigger: section_2,
    scroller: "#main",
    pin: true,
    scrub: 3,
    snap: 1 / (box_items.length - 1),
    end: "+=" + section_2.offsetWidth
  }
});
  }
  horizontal();