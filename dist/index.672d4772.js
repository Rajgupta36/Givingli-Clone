let tl = gsap.timeline();
tl.from("#section-1,nav,#section-2", {
    yoyo: true,
    backgroundColor: "#ffffff",
    color: "#333333",
    scrollTrigger: {
        duration: 3,
        trigger: ".image5",
        scroller: "body",
        start: "top 13%",
        end: "top 13%",
        scrub: 5,
        pin: true,
        once: true
    }
});
ScrollTrigger.refresh();
tl.from("h1,p", {
    yoyo: true,
    color: "#333333",
    scrollTrigger: {
        duration: 3,
        trigger: ".image5",
        scroller: "body",
        start: "top 13%",
        end: "top 13%",
        scrub: 5,
        pin: true,
        once: true
    }
});
ScrollTrigger.refresh();
tl.from("button", {
    yoyo: true,
    backgroundColor: "#333333",
    color: "#ffffff",
    scrollTrigger: {
        duration: 3,
        trigger: ".image5",
        scroller: "body",
        start: "top 13%",
        end: "top 13%",
        scrub: 5,
        pin: true,
        once: true
    }
});
ScrollTrigger.refresh();
tl.to("#section-1 .gsap0", {
    opacity: 0,
    scale: 0.8,
    yoyo: true,
    scrollTrigger: {
        duration: 3,
        trigger: ".image5",
        scroller: "body",
        start: "top 13%",
        end: "top 13%",
        scrub: 5,
        pin: true
    }
});
tl.to(".image1", {
    y: -200,
    x: -150,
    yoyo: true,
    scrollTrigger: {
        duration: 3,
        trigger: ".image5",
        scroller: "body",
        start: "top 13%",
        end: "top 13%",
        scrub: 5,
        pin: true
    }
});
tl.to(".image2", {
    x: 290,
    height: 150,
    width: 100,
    transform: "rotate(0deg)",
    yoyo: true,
    scrollTrigger: {
        duration: 3,
        trigger: ".image5",
        scroller: "body",
        start: "top 13%",
        end: "top 13%",
        scrub: 5,
        pin: true
    }
});
tl.to(".part2", {
    height: 75,
    width: 75,
    x: 280,
    y: 50,
    yoyo: true,
    transform: "rotate(0deg)",
    scrollTrigger: {
        duration: 3,
        trigger: ".image5",
        scroller: "body",
        start: "top 13%",
        end: "top 13%",
        scrub: 5,
        pin: true
    }
});
tl.to(".part4", {
    height: 120,
    width: 100,
    x: -300,
    y: 100,
    transform: "rotate(15deg)",
    scrollTrigger: {
        duration: 3,
        trigger: ".image5",
        scroller: "body",
        start: "top 13%",
        end: "top 13%",
        scrub: 5,
        pin: true
    }
});
ScrollTrigger.refresh();
tl.to(".image3", {
    y: -100,
    x: -150,
    yoyo: true,
    scrollTrigger: {
        duration: 3,
        trigger: ".image5",
        scroller: "body",
        start: "top 13%",
        end: "top 13%",
        scrub: 5,
        pin: true
    }
});
tl.to(".image4", {
    y: 200,
    x: -500,
    yoyo: true,
    scrollTrigger: {
        duration: 3,
        trigger: ".image5",
        scroller: "body",
        start: "top 13%",
        end: "top 13%",
        scrub: 5,
        pin: true
    }
});
tl.to(".image5", {
    y: -100,
    x: 40,
    yoyo: true,
    scrollTrigger: {
        duration: 3,
        trigger: ".image5",
        scroller: "body",
        start: "top 13%",
        end: "top 13%",
        scrub: 5,
        pin: true
    },
    scale: 0
});
tl.to(".image6", {
    y: -100,
    x: 0,
    yoyo: true,
    scrollTrigger: {
        duration: 3,
        trigger: ".image5",
        scroller: "body",
        start: "top 13%",
        end: "top 13%",
        scrub: 5,
        pin: true
    },
    scale: 0
});
tl.to(".image7", {
    y: 150,
    x: 50,
    yoyo: true,
    scrollTrigger: {
        duration: 3,
        trigger: ".image5",
        scroller: "body",
        start: "top 13%",
        end: "top 13%",
        scrub: 5,
        pin: true
    },
    scale: 0
});
tl.to(".image8", {
    x: -370,
    y: 80,
    transform: "rotate(0deg)",
    height: 80,
    width: 220,
    yoyo: true,
    scrollTrigger: {
        duration: 3,
        trigger: ".image5",
        scroller: "body",
        start: "top 13%",
        end: "top 13%",
        scrub: 5,
        pin: true
    }
});
tl.to(".image9", {
    y: -300,
    x: -100,
    yoyo: true,
    scrollTrigger: {
        duration: 3,
        trigger: ".image5",
        scroller: "body",
        start: "top 13%",
        end: "top 13%",
        scrub: 5,
        pin: true
    }
});
tl.to("#aftergsap #iphone", {
    opacity: 1,
    scale: 1,
    y: -600,
    yoyo: true,
    scrollTrigger: {
        duration: 3,
        trigger: ".image5",
        scroller: "body",
        start: "top 13%",
        end: "top 13%",
        scrub: 5,
        pin: true
    }
});
tl.to("#aftergsap h1, #aftergsap p", {
    opacity: 1,
    scale: 1,
    y: -400,
    yoyo: true,
    scrollTrigger: {
        duration: 3,
        trigger: ".image5",
        scroller: "body",
        start: "top 13%",
        end: "top 13%",
        scrub: 5,
        pin: true
    }
});
ScrollTrigger.refresh();
let a = 320;
ScrollTrigger.refresh();
document.querySelector("#congratsbtn i").addEventListener("click", function() {
    a = -a;
    if (a < 0) {
        tl.to(".part1,.part3", {
            scale: 0,
            duration: 0.3
        });
        ScrollTrigger.refresh();
        tl.to(".message img", {
            opacity: 0,
            duration: 0.5,
            onComplete: function() {
                document.querySelector(".message img").src = "https://assets-global.website-files.com/65240dac30f703b7a711b7c2/652da615099e3f13d0fd5aae_phone-bg-holiday.webp";
            }
        });
        ScrollTrigger.refresh();
        tl.to(".message img", {
            opacity: 1
        });
        ScrollTrigger.refresh();
        tl.to(".background", {
            opacity: 1,
            scale: 1,
            x: a,
            yoyo: true
        });
        ScrollTrigger.refresh();
        tl.to(".part2 ,.part4", {
            opacity: 1,
            scale: 1
        });
        ScrollTrigger.refresh();
        tl.to(".part1,.part3", {
            opacity: 0
        });
        ScrollTrigger.refresh();
        tl.to("nav,#section-1,#section-2", {
            backgroundColor: "#C9DA8F",
            scrollTrigger: {
                duration: 3,
                trigger: ".image5",
                scroller: "body",
                start: "top 13%",
                end: "top 13%",
                scrub: 5,
                pin: true,
                once: true
            }
        });
        ScrollTrigger.refresh();
        tl.to("#section-1,nav,#section-2", {
            color: "#1C471F",
            scrollTrigger: {
                duration: 3,
                trigger: ".image5",
                scroller: "body",
                start: "top 13%",
                end: "top 13%",
                scrub: 5,
                pin: true,
                once: true
            }
        });
        ScrollTrigger.refresh();
        tl.to("h1,p", {
            color: "#1C471F",
            scrollTrigger: {
                duration: 3,
                trigger: ".image5",
                scroller: "body",
                start: "top 13%",
                end: "top 13%",
                scrub: 5,
                pin: true,
                once: true
            }
        });
        ScrollTrigger.refresh();
        tl.to("button", {
            backgroundColor: "#1C471F",
            color: "#C9DA8F",
            scrollTrigger: {
                duration: 3,
                trigger: ".image5",
                scroller: "body",
                start: "top 13%",
                end: "top 13%",
                scrub: 5,
                pin: true,
                once: true
            }
        });
        ScrollTrigger.refresh();
        tl.to("i", {
            color: "#1C471F",
            scrollTrigger: {
                duration: 3,
                trigger: ".image5",
                scroller: "body",
                start: "top 13%",
                end: "top 13%",
                scrub: 5,
                pin: true,
                once: true
            }
        });
        ScrollTrigger.refresh();
    } else {
        tl.to(".part2 ,.part4", {
            scale: 0,
            duration: 0.3
        }).to(".message img", {
            opacity: 0,
            onComplete: function() {
                document.querySelector(".message img").src = "https://assets-global.website-files.com/65240dac30f703b7a711b7c2/65245a0ecc54c058b62e52d9_phone-bg-birthday.webp";
            }
        });
        ScrollTrigger.refresh();
        tl.to(".message img", {
            opacity: 1
        });
        ScrollTrigger.refresh();
        tl.to(".background", {
            opacity: 1,
            scale: 1,
            x: 0,
            yoyo: true
        });
        ScrollTrigger.refresh();
        tl.to(".part2 ,.part4", {
            opacity: 0
        });
        ScrollTrigger.refresh();
        tl.to(".part1,.part3", {
            opacity: 1,
            scale: 1
        });
        ScrollTrigger.refresh();
        tl.to("nav,#section-1,#section-2", {
            backgroundColor: "#B8CEDC",
            scrollTrigger: {
                duration: 3,
                trigger: ".image5",
                scroller: "body",
                start: "top 13%",
                end: "top 13%",
                scrub: 5,
                pin: true,
                once: true
            }
        });
        ScrollTrigger.refresh();
        tl.to("#section-1,nav,#section-2", {
            backgroundcolor: "#184363",
            scrollTrigger: {
                duration: 3,
                trigger: ".image5",
                scroller: "body",
                start: "top 13%",
                end: "top 13%",
                scrub: 5,
                pin: true,
                once: true
            }
        });
        ScrollTrigger.refresh();
        tl.to("h1,p", {
            color: "#184363",
            scrollTrigger: {
                duration: 3,
                trigger: ".image5",
                scroller: "body",
                start: "top 13%",
                end: "top 13%",
                scrub: 5,
                pin: true,
                once: true
            }
        });
        ScrollTrigger.refresh();
        tl.to("button", {
            backgroundColor: "#184363",
            scrollTrigger: {
                duration: 3,
                trigger: ".image5",
                scroller: "body",
                start: "top 13%",
                end: "top 13%",
                scrub: 5,
                pin: true,
                once: true
            }
        });
        ScrollTrigger.refresh();
        tl.to("i", {
            color: "#184363",
            scrollTrigger: {
                duration: 3,
                trigger: ".image5",
                scroller: "body",
                start: "top 13%",
                end: "top 13%",
                scrub: 5,
                pin: true,
                once: true
            }
        });
        ScrollTrigger.refresh();
    }
});
ScrollTrigger.refresh();
tl.to("#section-2,#section-1,nav", {
    delay: 3,
    backgroundColor: "#D6CAEB",
    color: "#47284F",
    yoyo: true,
    scrollTrigger: {
        yoyo: true,
        duration: 3,
        trigger: "#section-2 ",
        scroller: "body",
        start: "top 60%",
        end: "top 60%",
        scrub: 5,
        pin: true
    }
});
tl.to("button,i", {
    delay: 3,
    color: "#D6CAEB",
    backgroundColor: "#47284F",
    yoyo: true,
    scrollTrigger: {
        yoyo: true,
        duration: 3,
        trigger: "#section-2",
        scroller: "body",
        start: "top 60%",
        end: "top 60%",
        scrub: 5,
        pin: true
    }
});
tl.to("#img1", {
    top: "2%",
    left: "14%",
    scrollTrigger: {
        yoyo: true,
        duration: 3,
        trigger: "#section-2 h1",
        scroller: "body",
        start: "top 60%",
        end: "top 60%",
        scrub: 5,
        pin: true
    }
});
tl.to("#img2", {
    top: "30%",
    left: "-2%",
    scrollTrigger: {
        yoyo: true,
        duration: 3,
        trigger: "#section-2 h1",
        scroller: "body",
        start: "top 60%",
        end: "top 60%",
        scrub: 5,
        pin: true
    }
});
tl.to("#img3", {
    top: "60%",
    left: "2%",
    scrollTrigger: {
        yoyo: true,
        duration: 3,
        trigger: "#section-2 h1",
        scroller: "body",
        start: "top 60%",
        end: "top 60%",
        scrub: 5,
        pin: true
    }
});
tl.to("#img4", {
    top: "72%",
    left: "35%",
    scrollTrigger: {
        yoyo: true,
        duration: 3,
        trigger: "#section-2 h1",
        scroller: "body",
        start: "top 60%",
        end: "top 60%",
        scrub: 5,
        pin: true
    }
});
tl.to("#img5", {
    top: "-8%",
    left: "60%",
    scrollTrigger: {
        yoyo: true,
        duration: 3,
        trigger: "#section-2 h1",
        scroller: "body",
        start: "top 60%",
        end: "top 60%",
        scrub: 5,
        pin: true
    }
});
tl.to("#img6", {
    top: "16%",
    left: "80%",
    scrollTrigger: {
        yoyo: true,
        duration: 3,
        trigger: "#section-2 h1",
        scroller: "body",
        start: "top 60%",
        end: "top 60%",
        scrub: 5,
        pin: true
    }
});
tl.to("#img7", {
    top: "52%",
    left: "70%",
    scrollTrigger: {
        yoyo: true,
        duration: 3,
        trigger: "#section-2 h1",
        scroller: "body",
        start: "top 60%",
        end: "top 60%",
        scrub: 5,
        pin: true
    }
});
tl.to("#img8", {
    top: "70%",
    left: "86%",
    scrollTrigger: {
        yoyo: true,
        duration: 3,
        trigger: "#section-2 h1",
        scroller: "body",
        start: "top 60%",
        end: "top 60%",
        scrub: 5,
        pin: true
    }
});
tl.from("#section-2 h1", {
    scale: 0,
    scrollTrigger: {
        yoyo: true,
        duration: 3,
        trigger: "#section-2 h1",
        scroller: "body",
        start: "top 60%",
        end: "top 60%",
        scrub: 5,
        pin: true
    }
});

//# sourceMappingURL=index.672d4772.js.map
