document.querySelector('.join-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("✅ Thank you for signing up! We’ll contact you soon.");
    this.reset();
});
