// GSAP Animations for Erlan Theme

(function() {
  'use strict';
  
  // Wait for DOM and GSAP to be ready
  document.addEventListener('DOMContentLoaded', function() {
    
    // Check if GSAP is loaded
    if (typeof gsap === 'undefined') {
      console.warn('GSAP not loaded');
      return;
    }
    
    // Register plugins
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
    
    if (typeof ScrollToPlugin !== 'undefined') {
      gsap.registerPlugin(ScrollToPlugin);
    }
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      console.log('User prefers reduced motion, skipping animations');
      return;
    }
    
    // Initialize animations
    initHeroAnimations();
    initScrollAnimations();
    initCardAnimations();
    initButtonAnimations();
    
  });
  
  // Hero Section Animations
  function initHeroAnimations() {
    const hero = document.querySelector('#hero');
    if (!hero) return;
    
    // Animate hero text
    const heroHeading = hero.querySelector('.hero-text h1');
    if (heroHeading) {
      const words = heroHeading.querySelectorAll('span');
      gsap.from(words, {
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: 'power4.out'
      });
    }
    
    // Animate subtitle
    const subtitle = hero.querySelector('.hero-subtitle');
    if (subtitle) {
      gsap.to(subtitle, {
        duration: 1,
        opacity: 1,
        y: 0,
        delay: 0.8,
        ease: 'power3.out'
      });
    }
    
    // Animate CTA buttons
    const cta = hero.querySelector('.hero-cta');
    if (cta) {
      gsap.to(cta, {
        duration: 1,
        opacity: 1,
        y: 0,
        delay: 1.2,
        ease: 'power3.out'
      });
    }
    
    // Animate stats
    const stats = hero.querySelector('.hero-stats');
    if (stats) {
      gsap.to(stats, {
        duration: 1,
        opacity: 1,
        y: 0,
        delay: 1.5,
        ease: 'power3.out',
        onComplete: animateCounters
      });
    }
    
    // Parallax effect
    const parallaxLayers = hero.querySelectorAll('[class*="parallax-layer"]');
    if (parallaxLayers.length > 0 && typeof ScrollTrigger !== 'undefined') {
      gsap.to('.parallax-layer-1', {
        y: 100,
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });
      
      gsap.to('.parallax-layer-2', {
        y: -100,
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });
      
      gsap.to('.parallax-layer-3', {
        y: 50,
        x: -50,
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });
    }
  }
  
  // Counter Animation
  function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(function(counter) {
      const target = parseInt(counter.getAttribute('data-target'));
      gsap.to(counter, {
        innerText: target,
        duration: 2,
        ease: 'power2.out',
        snap: { innerText: 1 },
        onUpdate: function() {
          counter.innerText = Math.ceil(counter.innerText);
        }
      });
    });
  }
  
  // Scroll-triggered Animations
  function initScrollAnimations() {
    if (typeof ScrollTrigger === 'undefined') return;
    
    // Fade-in elements
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(function(element) {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
      });
    });
    
    // Slide-in from left
    const slideLeftElements = document.querySelectorAll('.slide-left');
    slideLeftElements.forEach(function(element) {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 80%'
        },
        duration: 1,
        x: -100,
        opacity: 0,
        ease: 'power3.out'
      });
    });
    
    // Slide-in from right
    const slideRightElements = document.querySelectorAll('.slide-right');
    slideRightElements.forEach(function(element) {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 80%'
        },
        duration: 1,
        x: 100,
        opacity: 0,
        ease: 'power3.out'
      });
    });
    
    // Scale-in elements
    const scaleElements = document.querySelectorAll('.scale-in');
    scaleElements.forEach(function(element) {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 80%'
        },
        duration: 0.8,
        scale: 0.8,
        opacity: 0,
        ease: 'back.out(1.7)'
      });
    });
  }
  
  // Card Animations
  function initCardAnimations() {
    // Service cards
    const serviceCards = document.querySelectorAll('.service-card');
    if (serviceCards.length > 0 && typeof ScrollTrigger !== 'undefined') {
      gsap.from(serviceCards, {
        scrollTrigger: {
          trigger: serviceCards[0],
          start: 'top 80%'
        },
        duration: 0.8,
        y: 60,
        opacity: 0,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }
    
    // Project cards
    const projectCards = document.querySelectorAll('.project-card');
    if (projectCards.length > 0 && typeof ScrollTrigger !== 'undefined') {
      gsap.from(projectCards, {
        scrollTrigger: {
          trigger: projectCards[0],
          start: 'top 80%'
        },
        duration: 0.8,
        scale: 0.9,
        opacity: 0,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }
    
    // Blog cards
    const blogCards = document.querySelectorAll('.blog-card');
    if (blogCards.length > 0 && typeof ScrollTrigger !== 'undefined') {
      gsap.from(blogCards, {
        scrollTrigger: {
          trigger: blogCards[0],
          start: 'top 80%'
        },
        duration: 0.8,
        y: 60,
        opacity: 0,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }
    
    // Hover effects
    const allCards = document.querySelectorAll('.service-card, .project-card, .blog-card');
    allCards.forEach(function(card) {
      card.addEventListener('mouseenter', function() {
        gsap.to(this, {
          duration: 0.3,
          y: -10,
          scale: 1.02,
          ease: 'power2.out'
        });
      });
      
      card.addEventListener('mouseleave', function() {
        gsap.to(this, {
          duration: 0.3,
          y: 0,
          scale: 1,
          ease: 'power2.out'
        });
      });
    });
  }
  
  // Button Animations (Magnetic Effect)
  function initButtonAnimations() {
    const buttons = document.querySelectorAll('a[class*="bg-gradient"], button[class*="bg-gradient"]');
    
    buttons.forEach(function(button) {
      // Magnetic effect
      button.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(this, {
          duration: 0.3,
          x: x * 0.3,
          y: y * 0.3,
          ease: 'power2.out'
        });
      });
      
      button.addEventListener('mouseleave', function() {
        gsap.to(this, {
          duration: 0.5,
          x: 0,
          y: 0,
          ease: 'elastic.out(1, 0.3)'
        });
      });
    });
  }
  
  // Page Transition Effect
  function initPageTransitions() {
    // Fade in on page load
    gsap.from('body', {
      duration: 0.5,
      opacity: 0,
      ease: 'power2.out'
    });
    
    // Fade out on page leave (requires additional setup)
    const links = document.querySelectorAll('a:not([target="_blank"])');
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        if (this.hostname === window.location.hostname) {
          e.preventDefault();
          const href = this.href;
          
          gsap.to('body', {
            duration: 0.3,
            opacity: 0,
            ease: 'power2.in',
            onComplete: function() {
              window.location.href = href;
            }
          });
        }
      });
    });
  }
  
  // Refresh ScrollTrigger on window load and resize
  if (typeof ScrollTrigger !== 'undefined') {
    window.addEventListener('load', function() {
      ScrollTrigger.refresh();
    });
    
    window.addEventListener('resize', function() {
      ScrollTrigger.refresh();
    });
  }
  
})();
