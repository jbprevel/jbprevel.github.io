// Cursor

const mouseMove = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  mouseMove.style.left = e.pageX + "px";
  mouseMove.style.top = e.pageY + "px";
});

// navlinks hover

let navLinks = document.querySelectorAll(".nav-links li");

navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouseMove.classList.add("link-grow");
    link.classList.add("hovered-link");
  });
  link.addEventListener("mouseleave", () => {
    mouseMove.classList.remove("link-grow");
    link.classList.remove("hovered-link");
  });
});

