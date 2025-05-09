// Cart counter logic
let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById('cart-count').textContent = cartCount;
  alert('Item added to cart!');
}

// Handle contact form submission
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact form');
  
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        form.reset();
      } else {
        alert('Please fill out all fields.');
      }
    });
  }
});

// Optional: Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});