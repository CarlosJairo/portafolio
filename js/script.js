const d = document;

d.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.matches(".menu-btn *")) {
    d.querySelector(".hamburger-btn").classList.toggle("ocultar");
    d.querySelector(".close-hamburger").classList.toggle("ocultar");
    d.querySelector(".menu").classList.toggle("is-active");
  }
});
