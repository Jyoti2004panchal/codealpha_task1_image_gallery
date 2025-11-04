const galleryItems = document.querySelectorAll(".item img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const captionText = document.querySelector(".caption");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const filterBtns = document.querySelectorAll(".btn");

let currentIndex = 0;

// Open Lightbox
galleryItems.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    updateLightbox();
    lightbox.style.display = "flex";
  });
});

// Update lightbox content
function updateLightbox() {
  lightboxImg.src = galleryItems[currentIndex].src;
  captionText.innerText = galleryItems[currentIndex].alt;
}

// Close lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Next / Prev
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  updateLightbox();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  updateLightbox();
});

// Filter functionality
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".btn.active").classList.remove("active");
    btn.classList.add("active");

    const category = btn.dataset.filter;

    document.querySelectorAll(".item").forEach(item => {
      if (category === "all" || item.dataset.category === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
