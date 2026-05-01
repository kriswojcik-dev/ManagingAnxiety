"use strict";

document.querySelectorAll('.myth-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});