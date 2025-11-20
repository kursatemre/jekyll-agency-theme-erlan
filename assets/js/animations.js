// GSAP Animations for Erlan Theme - Minimal

(function() {
  'use strict';
  
  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
    
    // Make all hero elements visible immediately
    makeAllVisible();
    
    // Only animate counters if GSAP is available
    if (typeof gsap !== 'undefined') {
      setTimeout(animateCounters, 500);
    }
    
  });
  
  // Make all elements visible immediately
  function makeAllVisible() {
    const hiddenElements = document.querySelectorAll('.hero-subtitle, .hero-cta, .hero-stats');
    hiddenElements.forEach(function(el) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }
  
  // Counter Animation - Simple version
  function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    if (!counters.length) return;
    
    counters.forEach(function(counter) {
      const target = parseInt(counter.getAttribute('data-target'));
      if (!target) return;
      
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(function() {
        current += increment;
        if (current >= target) {
          counter.innerText = target;
          clearInterval(timer);
        } else {
          counter.innerText = Math.ceil(current);
        }
      }, 30);
    });
  }
  
})();
