"use strict";

const form = document.getElementById('note-form');
const notesSection = document.getElementById('posted-notes');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const first = document.getElementById('note-first').value.trim();
    const last = document.getElementById('note-last').value.trim();
    const nick = document.getElementById('note-nick').value.trim();
    const message = document.getElementById('note-message').value.trim();

    if (message) {
        let displayName = "Anonymous";

        if (nick) {
            displayName = nick;
        } else if (first || last) {
            displayName = `${first} ${last}`.trim();
        }

        const p = document.createElement('p');
        p.innerHTML = `<strong>${displayName}:</strong> ${message}`;
        notesSection.appendChild(p);

        // Clear form
        form.reset();
    }
});

