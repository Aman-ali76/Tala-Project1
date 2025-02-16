function inti() {
    gsap.registerPlugin(ScrollTrigger);


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
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
inti()
flag = 0

var menu = document.querySelector("#nav-prt2 i")
var full = document.querySelector("#full-scr-nav")
flag = 0
menu.addEventListener("click", function () {
    if (flag == 0) {
        full.style.top = "0"
        document.querySelector("#nav h2").style.color = "#222"
        document.querySelector("#nav h3").style.color = "#222"
        document.querySelector("#nav i").style.color = "#222"
        flag = 1
    } else {
        full.style.top = "-100vh"
        document.querySelector("#nav h2").style.color = "#dadada"
        document.querySelector("#nav h3").style.color = "#dadada"
        document.querySelector("#nav i").style.color = "#dadada"
        flag = 0
    }
})

document.querySelector("#page6 #lower #one").addEventListener("mousemove", function (dets) {
    document.querySelector("#page6 #lower #one img").style.opacity = "1"
    document.querySelector("#page6 #lower #one img").style.left = `${dets.x - 130}px`
    document.querySelector("#page6 #lower #one img").style.top = `${dets.y - 180}px`
});

document.querySelector("#page6 #lower #two").addEventListener("mousemove", function (dets) {
    document.querySelector("#page6 #lower #two img").style.opacity = "1"
    document.querySelector("#page6 #lower #two img").style.left = `${dets.x - 740}px`
    document.querySelector("#page6 #lower #two img").style.top = `${dets.y - 180}px`
});

document.querySelector("#page6 #lower #one").addEventListener("mouseleave", function () {
    document.querySelector("#page6 #lower #one img").style.opacity = "0"
    document.querySelector("#page6 #lower #one img").style.left = `50%`
    document.querySelector("#page6 #lower #one img").style.top = `50%`
});

document.querySelector("#page6 #lower #two").addEventListener("mouseleave", function () {
    document.querySelector("#page6 #lower #two img").style.opacity = "0"
    document.querySelector("#page6 #lower #two img").style.left = `50%`
    document.querySelector("#page6 #lower #two img").style.top = `50%`
});

// Add touch events for mobile devices
document.querySelector("#page6 #lower #one").addEventListener("touchmove", function (dets) {
    const touch = dets.touches[0];
    document.querySelector("#page6 #lower #one img").style.opacity = "1"
    document.querySelector("#page6 #lower #one img").style.left = `${touch.clientX - 130}px`
    document.querySelector("#page6 #lower #one img").style.top = `${touch.clientY - 180}px`
});

document.querySelector("#page6 #lower #two").addEventListener("touchmove", function (dets) {
    const touch = dets.touches[0];
    document.querySelector("#page6 #lower #two img").style.opacity = "1"
    document.querySelector("#page6 #lower #two img").style.left = `${touch.clientX - 740}px`
    document.querySelector("#page6 #lower #two img").style.top = `${touch.clientY - 180}px`
});

document.querySelector("#page6 #lower #one").addEventListener("touchend", function () {
    document.querySelector("#page6 #lower #one img").style.opacity = "0"
    document.querySelector("#page6 #lower #one img").style.left = `50%`
    document.querySelector("#page6 #lower #one img").style.top = `50%`
});

document.querySelector("#page6 #lower #two").addEventListener("touchend", function () {
    document.querySelector("#page6 #lower #two img").style.opacity = "0"
    document.querySelector("#page6 #lower #two img").style.left = `50%`
    document.querySelector("#page6 #lower #two img").style.top = `50%`
});






var slide1h1 = document.querySelectorAll("#page5 .slide1-of-h1 h1 ")

slide1h1.forEach(function (elem) {
    gsap.to(elem, {
        transform: 'translateX(-100%)',
        duration: 6,
        scrollTrigger: {
            trigger: "#page5",
            scroller: "#main",
            scrub: 5,
        }

    })
})

var slide2h1 = document.querySelectorAll("#page5 .slide2-of-h1 h1 ")

slide2h1.forEach(function (elem2) {
    gsap.to(elem2, {
        transform: 'translateX(0)',
        duration: 6,
        scrollTrigger: {
            trigger: "#page5",
            scroller: "#main",
            scrub: 5,
        }

    })
})

var joy = document.querySelector("#page4 #smili img");

gsap.to(joy, {
    rotation: 360,
    duration: 3,
    repeat: -1,
    ease: "none"
});

var tl = gsap.timeline()

tl.from("#page1 h1", {
    opacity: 0,
    duration: 2,
    y: 100,
    ease: "power4.out"

})
    .from("#page1 p", {
        opacity: 0,
        duration: 2,
        y: 70,
        ease: "power4.out"
    }, "-=1.5")
    .from("#page1 h5", {
        opacity: 0,
        duration: 2,
        y: 70,
        ease: "power4.out"
    }, "-=2")

gsap.to("#page2 img", {
    duration: 2,
    scale: 1.1,
    scrollTrigger: {
        trigger: "#page2 img",
        scroller: "#main",
        scrub: true

    }
});

gsap.from("#page2 p", {
    duration: 2,
    rotateX: 90,
    scrollTrigger: {
        trigger: "#page2 p",
        scroller: "#main",
        start: "top 70%",
        // markers : true
    }
})


gsap.to("#page2-prt2 #inner", {
    width: '100%',
    duration: 3,
    scrollTrigger: {
        trigger: "#page2-prt2 #inner",
        scroller: "#main",
        start: "top 80%",
        scrub: 3
    }
})

document.querySelector("#page2-prt2 .fruit #f-mango").addEventListener("mousemove", function (dets) {
    document.querySelector("#page2-prt2 .fruit #mango").style.opacity = "1"
    document.querySelector("#page2-prt2 .fruit #mango").style.left = `${dets.x - 100}px`
    document.querySelector("#page2-prt2 .fruit #mango").style.transform = "rotate(8deg)"
    document.querySelector("#page2-prt2 .fruit #f-mango").classList.add("act");
    document.querySelector("#page2-prt2 .fruit .arow #arrow-1").style.opacity = "1"
})
document.querySelector("#page2-prt2 .fruit #f-mango").addEventListener("mouseleave", function (dets) {
    document.querySelector("#page2-prt2 .fruit #mango").style.opacity = "0"
    document.querySelector("#page2-prt2 .fruit #mango").style.left = `7%`
    document.querySelector("#page2-prt2 .fruit #mango").style.transform = "rotate(0)"
    document.querySelector("#page2-prt2 .fruit #f-mango").classList.remove("act");
    document.querySelector("#page2-prt2 .fruit .arow #arrow-1").style.opacity = "0"


})

document.querySelector("#page2-prt2 .fruit #f-kiwi").addEventListener("mousemove", function (dets) {
    document.querySelector("#page2-prt2 .fruit #kiwi").style.opacity = "1"
    document.querySelector("#page2-prt2 .fruit #kiwi").style.left = `${dets.x - 100}px`
    document.querySelector("#page2-prt2 .fruit #kiwi").style.transform = "rotate(8deg)"
    document.querySelector("#page2-prt2 .fruit #f-kiwi").classList.add("act");
    document.querySelector("#page2-prt2 .fruit .arow #arrow-2").style.opacity = "1"

})
document.querySelector("#page2-prt2 .fruit #f-kiwi").addEventListener("mouseleave", function (dets) {
    document.querySelector("#page2-prt2 .fruit #kiwi").style.opacity = "0"
    document.querySelector("#page2-prt2 .fruit #kiwi").style.left = `7%`
    document.querySelector("#page2-prt2 .fruit #kiwi").style.transform = "rotate(0)"
    document.querySelector("#page2-prt2 .fruit #f-kiwi").classList.remove("act");
    document.querySelector("#page2-prt2 .fruit .arow #arrow-2").style.opacity = "0"


})

document.querySelector("#page2-prt2 .fruit #f-banana").addEventListener("mousemove", function (dets) {
    document.querySelector("#page2-prt2 .fruit #banana").style.opacity = "1"
    document.querySelector("#page2-prt2 .fruit #banana").style.left = `${dets.x - 100}px`
    document.querySelector("#page2-prt2 .fruit #banana").style.transform = "rotate(8deg)"
    document.querySelector("#page2-prt2 .fruit #f-banana").classList.add("act");
    document.querySelector("#page2-prt2 .fruit .arow #arrow-3").style.opacity = "1"

})
document.querySelector("#page2-prt2 .fruit #f-banana").addEventListener("mouseleave", function (dets) {
    document.querySelector("#page2-prt2 .fruit #banana").style.opacity = "0"
    document.querySelector("#page2-prt2 .fruit #banana").style.left = `7%`
    document.querySelector("#page2-prt2 .fruit #banana").style.transform = "rotate(0)"
    document.querySelector("#page2-prt2 .fruit #f-banana").classList.remove("act");
    document.querySelector("#page2-prt2 .fruit .arow #arrow-3").style.opacity = "0"


})


document.querySelector("#page2-prt2 .fruit #f-pineapple").addEventListener("mousemove", function (dets) {
    document.querySelector("#page2-prt2 .fruit #pineapple").style.opacity = "1"
    document.querySelector("#page2-prt2 .fruit #pineapple").style.left = `${dets.x - 100}px`
    document.querySelector("#page2-prt2 .fruit #pineapple").style.transform = "rotate(8deg)"
    document.querySelector("#page2-prt2 .fruit #f-pineapple").classList.add("act");
    document.querySelector("#page2-prt2 .fruit .arow #arrow-4").style.opacity = "1"

})
document.querySelector("#page2-prt2 .fruit #f-pineapple").addEventListener("mouseleave", function (dets) {
    document.querySelector("#page2-prt2 .fruit #pineapple").style.opacity = "0"
    document.querySelector("#page2-prt2 .fruit #pineapple").style.left = `7%`
    document.querySelector("#page2-prt2 .fruit #pineapple").style.transform = "rotate(0)"
    document.querySelector("#page2-prt2 .fruit #f-pineapple").classList.remove("act");
    document.querySelector("#page2-prt2 .fruit .arow #arrow-4").style.opacity = "0"


})


document.querySelector("#page2-prt2 .fruit #f-papita").addEventListener("mousemove", function (dets) {
    document.querySelector("#page2-prt2 .fruit #papita").style.opacity = "1"
    document.querySelector("#page2-prt2 .fruit #papita").style.left = `${dets.x - 100}px`
    document.querySelector("#page2-prt2 .fruit #papita").style.transform = "rotate(8deg)"
    document.querySelector("#page2-prt2 .fruit #f-papita").classList.add("act");
    document.querySelector("#page2-prt2 .fruit .arow #arrow-5").style.opacity = "1"

})
document.querySelector("#page2-prt2 .fruit #f-papita").addEventListener("mouseleave", function (dets) {
    document.querySelector("#page2-prt2 .fruit #papita").style.opacity = "0"
    document.querySelector("#page2-prt2 .fruit #papita").style.left = `7%`
    document.querySelector("#page2-prt2 .fruit #papita").style.transform = "rotate(0)"
    document.querySelector("#page2-prt2 .fruit #f-papita").classList.remove("act");
    document.querySelector("#page2-prt2 .fruit .arow #arrow-5").style.opacity = "0"


})

