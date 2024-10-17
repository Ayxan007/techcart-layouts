// advice sections
const cards = document.querySelectorAll(".card");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

function showCards(index) {
  cards.forEach((card, el) => {
    if (el >= index * 4 && el < (index + 1) * 4) {
      card.style.display = "flex";
      setTimeout(() => {
        card.classList.add("show");
      }, 50);
    } else {
      card.classList.remove("show");
      card.style.display = "none";
    }
  });

  dots.forEach((dot, el) => {
    dot.classList.toggle("active", el === index);
  });
}

showCards(currentIndex);

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    cards.forEach((card) => {
      card.classList.remove("show");
    });
    currentIndex = parseInt(dot.dataset.index);
    showCards(currentIndex);
  });
});

// brands page
const dataElfhabet = document.querySelectorAll('.brands-head a');

dataElfhabet.forEach(data => {
    data.addEventListener('click', (event) => {
        event.preventDefault();
        const target = data.getAttribute('data-target'); 
        const targetEl = document.getElementById(target);
        targetEl.scrollIntoView({ behavior: 'smooth' }); 
    });
});
