window.addEventListener('scroll', checkCardPosition);
window.addEventListener('resize', checkCardPosition);

function checkCardPosition() {
    const cards = document.querySelectorAll('.card');
    const windowHeight = window.innerHeight;

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();

        // Check if the card is in the top or bottom half
        if (rect.top >= 0 && rect.bottom <= windowHeight / 2) {
            card.classList.add('top-half');
            card.classList.remove('bottom-half');
        } else if (rect.top > windowHeight / 2 && rect.bottom <= windowHeight) {
            card.classList.add('bottom-half');
            card.classList.remove('top-half');
        } else {
            // card.classList.add('top-half');
            // card.classList.remove('bottom-half');
        }
    });
}

// Run once on load
checkCardPosition();

// cartUtility.js
document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();
});

function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    let totalQuantity = 0;

    cartItems.forEach(item => {
        totalQuantity += item.quantity;
    });

    // Get or create the red circle for the cart count
    let cartIcon = document.querySelector(".shoplink");
    if (!cartIcon) return;

    let countCircle = document.querySelector(".cartCountCircle");
    if (!countCircle) {
        countCircle = document.createElement("div");
        countCircle.classList.add("cartCountCircle");
        cartIcon.appendChild(countCircle);
    }

    // Update the count or hide it if zero
    if (totalQuantity > 0) {
        countCircle.innerText = totalQuantity;
        countCircle.style.display = "flex";
        cartIcon.classList.add("stuff")
    } else {
        countCircle.style.display = "none";
        cartIcon.classList.remove("stuff")
    }
}
