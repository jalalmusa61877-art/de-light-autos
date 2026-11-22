
// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuToggle.textContent =
    navMenu.classList.contains("open") ? "✕" : "☰";
});

navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

// CAR DETAILS AND WHATSAPP ENQUIRIES
const modal = document.getElementById("carModal");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalPrice = document.getElementById("modalPrice");
const modalWhatsApp = document.getElementById("modalWhatsApp");

document.querySelectorAll(".car-card").forEach(card => {
  const button = card.querySelector(".enquire-btn");

  button.addEventListener("click", () => {
    const car = card.dataset.car;
    const price = card.dataset.price;
    const image = card.dataset.image;

    modalName.textContent = car;
    modalPrice.textContent = price;
    modalImage.src = image;

    const message =
      `Hello De-Light Auto's, I'm interested in the ${car} priced at ${price}. Can I get more information about this car?`;

    modalWhatsApp.href =
      "https://wa.me/2347075355597?text=" +
      encodeURIComponent(message);

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

// CLOSE CAR POPUP
document.getElementById("modalClose").addEventListener("click", closeModal);

modal.addEventListener("click", event => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// FLOATING SCROLL ANIMATIONS
const revealElements = document.querySelectorAll(
  ".car-card, .about-content, .about-image, .service-grid div, .section-heading, .contact-details"
);

revealElements.forEach(element => {
  element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealElements.forEach(element => {
  revealObserver.observe(element);
});
