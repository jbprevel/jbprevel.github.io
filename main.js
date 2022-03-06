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

// animation du texte dans le header

const txtAnim = document.querySelector("h1"); //on cible notre element h1

new Typewriter(txtAnim, {
  //on appelle la fonction que l'on a importé dans le script en html
  //loop: true, a mettre a mettre pour boucler a l'infini
  deleteSpeed: 25, // modifie la vitesse d'effacement
})
  .changeDelay(50) //on peut changer la vitesse d'ecriture
  .typeString("Moi c' est Jean-Baptiste") // on ecrit ce que l'on souhaite
  .pauseFor(1000) // on fait une pause entre deux "phrases"
  .typeString(", Passionné de Développement WEB") //on ajoute une balise span pour pouvoir y injecter du style
  .pauseFor(1000)
  .deleteChars(17) //on supprime les lettres voulues en comptant les espaces
  .typeString('<span style="color: #8a307f;"> Design</span>')
  .pauseFor(1000)
  .deleteChars(6)
  .typeString('<span style="color: #12a4d9;"> CSS</span>')
  .pauseFor(1000)
  .deleteChars(3)
  .typeString('<span style="color: yellow;"> JavaScript</span>')
  .pauseFor(1000)
  .deleteChars(11)
  .typeString(" Développement WEB")
  .start(); // on lance la fonction;

// revelation des elements à leur apparition au scroll

const sr = ScrollReveal(); //on initialise la constante sr avec la fonction ScrollReveal du script importé

// on appelle la fonction avec en paramètre l'élement ciblé et dans un objet les caracteristiques voulues
sr.reveal(".presentation-container", {
  delay: 500,
  easing: "ease-out",
});

sr.reveal(".presentation-container h2", {
  delay: 700,
  origin: "top",
  distance: "2rem",
  easing: "ease-out",
  opacity: "0",
});

sr.reveal(".presentation-container p", {
  delay: 700,
  easing: "ease-out",
  scale: 0.5,
});
sr.reveal(".nationality", {
  delay: 900,
  duration: 500,
  distance: "2rem",
  easing: "ease-out",
  origin: "left",
});

sr.reveal(".town", {
  delay: 900,
  duration: 500,
  distance: "2rem",
  easing: "ease-out",
  origin: "right",
});

sr.reveal(".cv", {
  delay: 1000,
  duration: 500,
  distance: "2rem",
  easing: "ease-out",
  origin: "bottom",
});

sr.reveal(".skills-container", {
  delay: 500,
  easing: "ease-out",
});

sr.reveal(".skills-container h2", {
  delay: 700,
  origin: "top",
  distance: "2rem",
  easing: "ease-out",
  opacity: "0",
});

sr.reveal(".skills-container div", {
  delay: 300,
  easing: "ease-out",
  interval: 1000,
});
