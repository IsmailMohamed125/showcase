const carousel = document.querySelector(".carousel-inner");
const items = [...document.querySelectorAll(".tech-item")];
items.forEach((item) => {
  const clone = item.cloneNode(true);
  carousel.appendChild(clone);
});
