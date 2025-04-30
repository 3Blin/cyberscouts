/**
 * CyberScouts Website - Main JavaScript
 */

document.addEventListener("DOMContentLoaded", function() {
  console.log("CyberScouts Website vollständig geladen");
  
  // Initialisierung aller Komponenten
  initNavbar();
  initTestimonials();
  initStats();
  initScrollAnimation();
  setupNetlifyIdentity();
});

/**
 * Navbar Scroll-Effekt und Mobile-Menü
 */
function initNavbar() {
  const navbar = document.querySelector(".navbar");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  
  // Scroll-Effekt
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  
  // Mobile-Menü
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.querySelector("i").classList.toggle("fa-bars");
      menuToggle.querySelector("i").classList.toggle("fa-times");
    });
  }
}

/**
 * Testimonial Slider
 */
function initTestimonials() {
  const testimonials = document.querySelectorAll(".testimonial");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;
  
  // Setze anfangs das erste Testimonial als aktiv
  if (testimonials.length > 0) {
    testimonials[0].classList.add("active");
  }
}

/**
 * Animierter Statistik-Zähler
 */
function initStats() {
  const stats = document.querySelectorAll(".stat-number");
  
  // Wenn Statistiken vorhanden sind, Observer initialisieren
  if (stats.length > 0) {
    const statsSection = document.querySelector(".stats");
    
    // IntersectionObserver für Scroll-Trigger
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Starte Zähler-Animation für alle Statistiken
          stats.forEach(stat => {
            const target = parseInt(stat.getAttribute("data-count"), 10);
            animateCounter(stat, target);
          });
        }
      });
    }, { threshold: 0.5 });
  }
}

/**
 * Scroll-Animationen für Elemente
 */
function initScrollAnimation() {
  // CSS für die Animation hinzufügen
  const style = document.createElement("style");
  style.textContent = `
    .section-header, .about-content, .module-card, .gallery-item, .contact-form, .info-item {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);
}

/**
 * Netlify Identity Setup
 */
function setupNetlifyIdentity() {
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
}
