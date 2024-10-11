document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for signing up! Please check your email for further instructions.');
        form.reset(); // Reset form after submission
    });
});
