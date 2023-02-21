const timeLine = new gsap.timeline();

timeLine
    .from('.logo', {
        autoAlpha: 0,
        x: -10
    }, 0)
    .from('.menu-links li', {
        autoAlpha: 0,
        x: -10,
        stagger: 0.1
    }, 0)
    .from('.title', {
        autoAlpha: 0,
        y: 20,
    }, 1)
    .from('.tagline', {
        autoAlpha: 0,
        y: 10,
    }, 2)
    .from('.desc', {
        autoAlpha: 0,
        y: 10,
    }, "-=0.45", 3)
    .fromTo('.beer', {
        autoAlpha: 0,
        y: "-50vh",
        duration: 1
    },
    {
        autoAlpha: 1,
        y: -30,
        ease: "back.out(1.7)",
        duration: 1
    },
     4)
    .to('.beer', {
        y: "3vh",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    })