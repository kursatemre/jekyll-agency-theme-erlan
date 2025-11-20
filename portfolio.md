---
layout: page
title: "Portfolio"
description: "Müşterilerimiz için gerçekleştirdiğimiz başarılı projeler"
permalink: /portfolio/
---

<div class="mb-12">
  <div class="flex flex-wrap gap-4 justify-center mb-8">
    <button class="filter-btn px-6 py-2 rounded-full bg-primary text-white font-semibold" data-filter="all">
      Tümü
    </button>
    <button class="filter-btn px-6 py-2 rounded-full bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-gray-300 font-semibold hover:bg-primary hover:text-white transition-colors" data-filter="web">
      Web Geliştirme
    </button>
    <button class="filter-btn px-6 py-2 rounded-full bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-gray-300 font-semibold hover:bg-primary hover:text-white transition-colors" data-filter="mobile">
      Mobil Uygulama
    </button>
    <button class="filter-btn px-6 py-2 rounded-full bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-gray-300 font-semibold hover:bg-primary hover:text-white transition-colors" data-filter="design">
      Tasarım
    </button>
  </div>
</div>

<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {% for project in site.projects %}
  <div class="project-card group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500" data-category="{{ project.category }}">
    {% if project.image %}
    <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500">
    {% else %}
    <div class="w-full h-64 bg-gradient-to-br from-primary to-secondary"></div>
    {% endif %}
    
    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
      <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <h3 class="text-2xl font-display font-bold text-white mb-2">{{ project.title }}</h3>
        
        {% if project.client %}
        <p class="text-sm text-gray-300 mb-2">
          <span class="font-semibold">Müşteri:</span> {{ project.client }}
        </p>
        {% endif %}
        
        <p class="text-sm text-gray-200 mb-3">{{ project.category }}</p>
        
        {% if project.technologies %}
        <div class="flex flex-wrap gap-2 mb-4">
          {% for tech in project.technologies %}
          <span class="px-2 py-1 bg-white/20 rounded text-xs text-white">{{ tech }}</span>
          {% endfor %}
        </div>
        {% endif %}
        
        <a href="{{ project.url | relative_url }}" class="inline-flex items-center text-white font-semibold hover:gap-2 transition-all">
          Projeyi İncele
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
  {% endfor %}
</div>

<script>
// Portfolio filtering
document.addEventListener('DOMContentLoaded', function() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Update active button
      filterBtns.forEach(b => {
        b.classList.remove('bg-primary', 'text-white');
        b.classList.add('bg-gray-200', 'dark:bg-slate-800', 'text-gray-700', 'dark:text-gray-300');
      });
      this.classList.add('bg-primary', 'text-white');
      this.classList.remove('bg-gray-200', 'dark:bg-slate-800', 'text-gray-700', 'dark:text-gray-300');
      
      // Filter projects
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          if (typeof gsap !== 'undefined') {
            gsap.from(card, { duration: 0.5, scale: 0.8, opacity: 0 });
          }
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
</script>
