//menu
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const menuClose = document.getElementById('menuClose');
    const mobileMenu = document.getElementById('mobileMenu');

    if (!menuToggle || !mobileMenu) return;

    // Overlay
    let overlay = document.querySelector('.menu-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        document.body.appendChild(overlay);
    }

    function openMenu() {
        mobileMenu.classList.add('active');
        overlay.classList.add('active');
        mobileMenu.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    menuToggle.addEventListener('click', openMenu);

    if (menuClose) {
        menuClose.addEventListener('click', closeMenu);
    }

    overlay.addEventListener('click', closeMenu);

    // Close menu on link click
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });
});

//carousel
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

