document.addEventListener("DOMContentLoaded", () => {
  // Navbar scroll effect
  const nav = document.querySelector("header");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 50);
  });

  // Scroll animations
  const animatedItems = document.querySelectorAll(".fade-in, .slide-left, .slide-right");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });
  animatedItems.forEach(item => observer.observe(item));

  // Typewriter effect
 /* const nameText = "Rohan";
  const typedName = document.getElementById("typed-name");
  const tagline = document.getElementById("tagline");
  let i = 0;
  function typeWriter() {
    if (i < nameText.length) {
      typedName.textContent += nameText.charAt(i);
      i++;
      setTimeout(typeWriter, 120);
    } else {
      setTimeout(() => tagline.classList.add("visible"), 300);
    }
  }
  typeWriter();*/

  // Theme toggle
  const toggleBtn = document.getElementById("theme-toggle");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    toggleBtn.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
  });
});