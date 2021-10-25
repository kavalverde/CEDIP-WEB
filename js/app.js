const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    menu.classList.remove("menu_opened");
  });
});

window.addEventListener("load", function () {
  new Glider(document.querySelector(".Agenda_carousel_lista"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dragVelocity: 3,
    itemWidth: 0,
    dots: ".Agenda_carousel_indicadores",
    arrows: {
      prev: ".Agenda_carousel_anterior",
      next: ".Agenda_carousel_siguiente",
    },
  });

  new Glider(document.querySelector(".carousel_lista"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dragVelocity: 1,
    dots: ".carousel_indicadores",
    arrows: {
      prev: ".carousel_anterior",
      next: ".carousel_siguiente",
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 800,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: "2",
          slidesToScroll: "2",
        },
      },
      {
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  });
});
