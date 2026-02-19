const cards = document.querySelectorAll(".card");
const total = cards.length;
let currentIndex = 0;
function updateCarousel() {
  cards.forEach((card, i) => {
    let offset = (i - currentIndex + total) % total;
    if (offset > total / 2) offset -= total;
    const translateX = offset * 300;
    const translateZ = Math.abs(offset) * -200;
    const rotateY = offset * -12;
    card.style.transform = `
      translate(-50%, -50%)
      translateX(${translateX}px)
      translateZ(${translateZ}px)
      rotateY(${rotateY}deg)
    `;
    card.style.opacity = 1;
    card.style.zIndex = 100 - Math.abs(offset);
    card.style.filter =
      offset === 0 ? "brightness(1)" : "brightness(0.65)";
  });
}
document.querySelector(".next").onclick = () => {
  currentIndex = (currentIndex + 1) % total;
  updateCarousel();
};
document.querySelector(".prev").onclick = () => {
  currentIndex = (currentIndex - 1 + total) % total;
  updateCarousel();
};
updateCarousel();