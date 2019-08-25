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
  const sections =
    document.querySelectorAll("section");
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
