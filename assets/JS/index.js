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
      }, 80);
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
//


// shop section
const cardShops = document.querySelectorAll(".card-shop");
const dotShops = document.querySelectorAll(".dot-shop");

let defoltShopIndex = 0;

function showShopCards(index) {
  cardShops.forEach((card, el) => {
    if (el >= index * 4 && el < (index + 1) * 4) {
      card.style.display = "flex";
      setTimeout(() => {
        card.classList.add("show");
      }, 80);
    } else {
      card.classList.remove("show");
      card.style.display = "none";
    }
  });

  dotShops.forEach((dot, el) => {
    dot.classList.toggle("active", el === index);
  });
}

window.addEventListener('load', () => {
  showShopCards(0);
});

dotShops.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showShopCards(index);
  });
});
//


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
//

// categories-img section
const img = document.querySelector("#img-set");

const images = [
  "./assets/image/Mobile-Phones.jpg",
  "./assets/image/Macbooks.jpg",
  "./assets/image/CCTV-Camera.jpg",
  "./assets/image/Laptops.jpg",
  "./assets/image/Smart-Watches.jpg",
];

let num = 0;
let interval;

const dotImgSlider = document.querySelectorAll(".dot-img");


function startInterval() {
  interval = setInterval(() => {
    num++;
    if (num >= images.length) {
      num = 0;
    }
    updateImageDots(num);
  }, 3000);
}

function updateImageDots(index) {
  img.src = images[index];
  dotImgSlider.forEach((dot, i) => {
    dot.classList.remove("active"); 
  });
  dotImgSlider[index].classList.add("active"); 
}

startInterval();

dotImgSlider.forEach((dot) => {
  dot.addEventListener("click", (el) => {
    num = parseInt(el.target.dataset.index); 
    clearInterval(interval); 
    updateImageDots(num); 
    startInterval();
  });
});

updateImageDots(num);