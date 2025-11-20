---
layout: page
title: "Blog"
description: "Teknoloji ve dijital dünya hakkında güncel içerikler"
permalink: /blog/
---

<div class="mb-12">
  <!-- Search Box -->
  <div class="max-w-2xl mx-auto mb-8">
    <div class="relative">
      <input 
        type="text" 
        id="blog-search" 
        placeholder="Blog yazılarında ara..." 
        class="w-full px-6 py-4 rounded-full border-2 border-gray-300 dark:border-slate-700 focus:border-primary focus:outline-none dark:bg-slate-800 dark:text-white"
      >
      <svg class="absolute right-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    </div>
  </div>
  
  <!-- Categories -->
  <div class="flex flex-wrap gap-3 justify-center">
    <button class="category-btn px-6 py-2 rounded-full bg-primary text-white font-semibold" data-category="all">
      Tümü
    </button>
    <button class="category-btn px-6 py-2 rounded-full bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-gray-300 font-semibold hover:bg-primary hover:text-white transition-colors" data-category="web-geliştirme">
      Web Geliştirme
    </button>
    <button class="category-btn px-6 py-2 rounded-full bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-gray-300 font-semibold hover:bg-primary hover:text-white transition-colors" data-category="tasarım">
      Tasarım
    </button>
    <button class="category-btn px-6 py-2 rounded-full bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-gray-300 font-semibold hover:bg-primary hover:text-white transition-colors" data-category="seo">
      SEO
    </button>
  </div>
</div>

<div id="blog-posts" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {% for post in site.posts %}
  <article class="blog-card bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300" data-title="{{ post.title | downcase }}" data-categories="{{ post.categories | join: ' ' | downcase }}">
    {% if post.image %}
    <a href="{{ post.url | relative_url }}">
      <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300">
    </a>
    {% else %}
    <div class="w-full h-48 bg-gradient-to-br from-accent to-secondary"></div>
    {% endif %}
    
    <div class="p-6">
      <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d %B %Y" }}</time>
        <span class="mx-2">•</span>
        <span>{{ post.author | default: site.author.name }}</span>
      </div>
      
      {% if post.categories %}
      <div class="flex flex-wrap gap-2 mb-3">
        {% for category in post.categories %}
        <span class="px-2 py-1 bg-primary/10 text-primary text-xs rounded">{{ category }}</span>
        {% endfor %}
      </div>
      {% endif %}
      
      <h3 class="text-xl font-display font-semibold mb-3 hover:text-primary transition-colors">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h3>
      
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        {{ post.excerpt | strip_html | truncatewords: 20 }}
      </p>
      
      <a href="{{ post.url | relative_url }}" class="text-primary font-semibold inline-flex items-center hover:gap-2 transition-all">
        Devamını Oku
        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  </article>
  {% endfor %}
</div>

<div id="no-results" class="hidden text-center py-12">
  <svg class="w-24 h-24 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
  <p class="text-xl text-gray-500 dark:text-gray-400">Aradığınız kriterlere uygun yazı bulunamadı.</p>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('blog-search');
  const categoryBtns = document.querySelectorAll('.category-btn');
  const blogPosts = document.querySelectorAll('.blog-card');
  const noResults = document.getElementById('no-results');
  
  let currentCategory = 'all';
  
  // Search functionality
  searchInput.addEventListener('input', function() {
    filterPosts();
  });
  
  // Category filtering
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      currentCategory = this.getAttribute('data-category');
      
      // Update active button
      categoryBtns.forEach(b => {
        b.classList.remove('bg-primary', 'text-white');
        b.classList.add('bg-gray-200', 'dark:bg-slate-800', 'text-gray-700', 'dark:text-gray-300');
      });
      this.classList.add('bg-primary', 'text-white');
      this.classList.remove('bg-gray-200', 'dark:bg-slate-800', 'text-gray-700', 'dark:text-gray-300');
      
      filterPosts();
    });
  });
  
  function filterPosts() {
    const searchTerm = searchInput.value.toLowerCase();
    let visibleCount = 0;
    
    blogPosts.forEach(post => {
      const title = post.getAttribute('data-title');
      const categories = post.getAttribute('data-categories');
      
      const matchesSearch = title.includes(searchTerm);
      const matchesCategory = currentCategory === 'all' || categories.includes(currentCategory);
      
      if (matchesSearch && matchesCategory) {
        post.style.display = 'block';
        visibleCount++;
        if (typeof gsap !== 'undefined') {
          gsap.from(post, { duration: 0.5, scale: 0.9, opacity: 0 });
        }
      } else {
        post.style.display = 'none';
      }
    });
    
    // Show/hide no results message
    if (visibleCount === 0) {
      noResults.classList.remove('hidden');
    } else {
      noResults.classList.add('hidden');
    }
  }
});
</script>
