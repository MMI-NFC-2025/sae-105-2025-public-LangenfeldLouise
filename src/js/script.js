const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");


// Largeur de défilement d’un item
if (carousel) {
    // Scroll au clic sur le bouton précédent
    prevButton.addEventListener("click", () => {
        const premierItem = document.querySelector(".carousel__item");
        const scrollAmount = premierItem.clientWidth;
        carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    // Scroll au clic sur le bouton suivant
    nextButton.addEventListener("click", () => {
        const premierItem = document.querySelector(".carousel__item");
        const scrollAmount = premierItem.clientWidth;
        carousel.scrollBy({ left: +scrollAmount, behavior: "smooth" });
    });
}
/*lightbox*/
const lightBox = document.querySelector("#lightbox");

const lightBoxImg = document.querySelector("#lightbox img");

lightBox?.addEventListener("click", () => lightBox.close());

document.body.addEventListener("click", (evt) => {
    if (!evt.target.matches("[data-full-img]")) return;
    lightBoxImg.src = evt.target.dataset.fullImg;
    lightBox.showModal();
});