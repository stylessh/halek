// scroll animation

const header = document.querySelector(".header");
const icon = document.querySelector(".sup");

window.addEventListener("scroll", () => {
  var scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  if (scrollTop > 1) {
    header.classList.add("scrolled");
    icon.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
    icon.classList.remove("scrolled");
  }
});

// dinamic navbar
const dinamicNav = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar a");

  sections.forEach(sec => {
    sec.addEventListener("mouseenter", function() {
      const id = this.getAttribute("id");

      const navActive = document.querySelector(`a[href="#${id}"]`);

      navLinks.forEach(link => link.classList.remove("active"));

      navActive.classList.add("active");
    });
  });
};

dinamicNav();

// responsive navbar

var media = window.matchMedia("(max-width: 901px)")
  
    if (media.matches) {
      var t1 = new TimelineMax({ paused: true });

      t1.to(".toggle-btn .one", 0.8, {
        y: 6,
        rotation: 45,
        ease: Expo.easeInOut
      });

      t1.to(".toggle-btn .two", 0.8, {
        y: -6,
        rotation: -45,
        ease: Expo.easeInOut,
        delay: -0.8
      });

      t1.to(".navbar", 1, {
        top: "0%",
        ease: Expo.easeInOut,
        delay: -1
      });

      t1.staggerFrom(
        ".navbar li",
        1,
        { x: -200, opacity: 0, ease: Expo.easeOut },
        0.3
      );
      t1.reverse();

    const navLinks = document.querySelectorAll(".navbar a");
    const toggleBtn = document.querySelector(".toggle-btn");

    toggleBtn.addEventListener("click", () => {
      t1.reversed(!t1.reversed());
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        t1.reversed(!t1.reversed());
      });
    });

  }

