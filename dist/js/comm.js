gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

/* Main navigation */
let panelsSection = document.querySelector("#panels"),
  panelsContainer = document.querySelector("#panels-container"),
  tween;
document.querySelectorAll(".anchor").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    let targetElem = document.querySelector(e.target.getAttribute("href")),
      y = targetElem;
    if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
      let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
        totalMovement = (panels.length - 1) * targetElem.offsetWidth;
      y = Math.round(
        tween.scrollTrigger.start +
          (targetElem.offsetLeft / totalMovement) * totalScroll
      );
    }
    gsap.to(window, {
      scrollTo: {
        y: y,
        autoKill: false,
      },
      duration: 1,
    });
  });
});

/* Panels */
const panels = gsap.utils.toArray("#panels-container .panel");
tween = gsap.to(panels, {
  xPercent: -100 * (panels.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#panels-container",
    pin: true,
    start: "top",
    scrub: 1,
    // 드래그시 옆으로 강제이동할때 사용
    // snap: {
    //   snapTo: 1 / (panels.length - 1),
    //   inertia: false,
    //   duration: { min: 0.1, max: 0.1 },
    // },
    end: () => "+=" + (panelsContainer.offsetWidth - innerWidth),
  },
});
//
//
//
//
//
//intro matter.js
$(".cta").click(function () {
  $(".first-box").addClass("circlebye");
  $(".name").css("visibility", "hidden");
  $(".desc").css("visibility", "hidden");
  $(".cta").css("visibility", "hidden");
  $(".words__play").addClass("opacityzero");
  $(".words__design").addClass("opacityzero");
  $(".words__code").addClass("opacityzero");
  $(".words__draw").addClass("opacityzero");

  $(".top").addClass("top-back");
  $(".bottom").addClass("bottom-back");
  $(".left").addClass("left-back");
  $(".right").addClass("right-back");
});
