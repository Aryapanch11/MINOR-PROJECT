document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted! Thank you for contacting us.');
    });
});

window.addEventListener('load', () => {
    document.body.classList.add('animate');
});

document.body.addEventListener('click', () => {
    if (!document.body.classList.contains('animate')) {
        document.body.classList.add('animate');
    }
});
