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