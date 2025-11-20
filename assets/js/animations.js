// Animations temporarily disabled

(function() {
  'use strict';
  
  // Simple counter animation only
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(animateCounters, 500);
  });
  
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
