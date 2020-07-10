gsap.registerPlugin(ScrollTrigger);

function init() {
  gsap.to(".services__header", {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".services",
      start: "top top",
      end: "center center",
    },
  });
  gsap.to("footer", {
    opacity: 1,
    duration: 1.5,
    scrollTrigger: {
      trigger: "footer",
      start: "center bottom",
      end: "center center",
    },
  });
  gsap.to(".services__icon", {
    opacity: 1,
    y: "0",
    ease: "sine.out",

    scrollTrigger: {
      trigger: ".services",
      start: "top+=100 top",
      end: "center center",
    },
  });
  gsap.to(".services__name", {
    opacity: 1,
    y: "0",
    ease: "sine.out",

    scrollTrigger: {
      trigger: ".services",
      start: "top+=100 top",
      end: "center center",
    },
  });
  gsap.to(".services__description", {
    opacity: 1,
    y: "0",
    ease: "sine.out",

    scrollTrigger: {
      trigger: ".services",
      start: "top+=100 top",
      end: "center center",
    },
  });
  gsap.to(".document__container", {
    opacity: 1,
    y: "0",
    ease: "sine.out",

    scrollTrigger: {
      trigger: ".document",
      start: "top-=150 center",
      end: "bottom center+=150",
    },
  });

  gsap.to(".document", {
    x: -135,
    scrollTrigger: {
      trigger: ".document",
      start: "top bottom",
      end: "bottom center+=150",
      scrub: true,
      repeat: false,
    },
  });
}
window.addEventListener("load", function () {
  init();
});
