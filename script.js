let menu = document.querySelector("#menu");

let menuBar = document.querySelector("#menu-bar");

menuBar.addEventListener("click", function () {
  menu.classList.toggle("menu-toggle");
});

/*======================= CAROUSEL CARDS ==========================*/

const carousel = document.querySelector(".carousel");
const prevButton = document.querySelector(".carousel-button--prev");
const nextButton = document.querySelector(".carousel-button--next");
const cards = document.querySelectorAll(".card");
let currentIndex = 0;
let cardWidth = cards[0].offsetWidth;

//Establecer el ancho del contenedor del carrusel para que se ajuste a todas las tarjetas
carousel.style.width = cardWidth * cards.length + "px";

//Manejar el clic del botón anterior
prevButton.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : cards.length - 1;
  carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
});

//Manejar el clic del botón siguiente
nextButton.addEventListener("click", () => {
  currentIndex = currentIndex < cards.length - 1 ? currentIndex + 1 : 0;
  carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

  // Verificar si se alcanzó el último índice
  if (currentIndex === cards.length - 1) {
    // Volver al primer índice
    setTimeout(() => {
      carousel.style.transition = "none";
      currentIndex = 0;
      carousel.style.transform = `translateX(0)`;
      setTimeout(() => {
        carousel.style.transition = "transform 0.5s ease";
      }, 50);
    }, 500);
  }
});