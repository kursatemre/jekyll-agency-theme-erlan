// Main JavaScript for Erlan Theme

(function() {
  'use strict';
  
  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all features
    initDarkMode();
    initMobileMenu();
    initLazyLoading();
    initFormValidation();
    initScrollEffects();
    
  });
  
  // Dark Mode with localStorage persistence
  function initDarkMode() {
    // Already handled by Alpine.js in the HTML
    console.log('Dark mode initialized via Alpine.js');
  }
  
  // Mobile Menu Toggle
  function initMobileMenu() {
    // Already handled by Alpine.js in header
    console.log('Mobile menu initialized via Alpine.js');
  }
  
  // Lazy Loading Images
  function initLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              img.classList.add('loaded');
              imageObserver.unobserve(img);
            }
          }
        });
      });
      
      const images = document.querySelectorAll('img[data-src]');
      images.forEach(function(img) {
        imageObserver.observe(img);
      });
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      const images = document.querySelectorAll('img[data-src]');
      images.forEach(function(img) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      });
    }
  }
  
  // Form Validation
  function initFormValidation() {
    const forms = document.querySelectorAll('form[data-validate]');
    
    forms.forEach(function(form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        
        inputs.forEach(function(input) {
          if (!input.value.trim()) {
            isValid = false;
            showError(input, 'Bu alan zorunludur');
          } else if (input.type === 'email' && !isValidEmail(input.value)) {
            isValid = false;
            showError(input, 'Geçerli bir e-posta adresi giriniz');
          } else {
            clearError(input);
          }
        });
        
        if (isValid) {
          // Submit form or handle with AJAX
          console.log('Form is valid, submitting...');
          showSuccess('Mesajınız başarıyla gönderildi!');
          form.reset();
        }
      });
      
      // Real-time validation
      const inputs = form.querySelectorAll('input, textarea');
      inputs.forEach(function(input) {
        input.addEventListener('blur', function() {
          if (this.hasAttribute('required') && !this.value.trim()) {
            showError(this, 'Bu alan zorunludur');
          } else if (this.type === 'email' && this.value && !isValidEmail(this.value)) {
            showError(this, 'Geçerli bir e-posta adresi giriniz');
          } else {
            clearError(this);
          }
        });
        
        input.addEventListener('input', function() {
          if (this.classList.contains('error')) {
            clearError(this);
          }
        });
      });
    });
  }
  
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  function showError(input, message) {
    clearError(input);
    input.classList.add('error', 'border-red-500');
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message text-red-500 text-sm mt-1';
    errorDiv.textContent = message;
    
    input.parentNode.appendChild(errorDiv);
  }
  
  function clearError(input) {
    input.classList.remove('error', 'border-red-500');
    const errorMsg = input.parentNode.querySelector('.error-message');
    if (errorMsg) {
      errorMsg.remove();
    }
  }
  
  function showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'fixed top-20 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-50 animate-fade-in';
    successDiv.textContent = message;
    
    document.body.appendChild(successDiv);
    
    setTimeout(function() {
      successDiv.remove();
    }, 3000);
  }
  
  // Scroll Effects
  function initScrollEffects() {
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Add/remove shadow on scroll
      if (scrollTop > 50) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
      
      lastScrollTop = scrollTop;
    }, { passive: true });
  }
  
  // Utility: Debounce function
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  
  // Utility: Throttle function
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  
  // Add active class to current nav item
  function setActiveNavItem() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(function(link) {
      const linkPath = new URL(link.href).pathname;
      if (currentPath === linkPath || (linkPath !== '/' && currentPath.startsWith(linkPath))) {
        link.classList.add('active', 'text-primary');
      }
    });
  }
  
  // Initialize on load
  window.addEventListener('load', function() {
    setActiveNavItem();
  });
  
  // Export utilities to global scope if needed
  window.ErlanTheme = {
    debounce: debounce,
    throttle: throttle,
    showSuccess: showSuccess,
    showError: showError,
    clearError: clearError
  };
  
})();
