---
layout: page
title: "İletişim"
description: "Projeniz için bizimle iletişime geçin"
permalink: /iletisim/
---

<div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
  
  <!-- Contact Form -->
  <div>
    <h2 class="text-3xl font-display font-bold mb-6">Mesaj Gönderin</h2>
    <p class="text-gray-600 dark:text-gray-400 mb-8">
      Projeniz hakkında konuşmak için formu doldurun, en kısa sürede size geri dönüş yapalım.
    </p>
    
    <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" data-validate class="space-y-6">
      <div>
        <label for="name" class="block text-sm font-semibold mb-2">Ad Soyad *</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required
          class="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-slate-700 focus:border-primary focus:outline-none dark:bg-slate-800 dark:text-white transition-colors"
          placeholder="Adınız ve soyadınız"
        >
      </div>
      
      <div>
        <label for="email" class="block text-sm font-semibold mb-2">E-posta *</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required
          class="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-slate-700 focus:border-primary focus:outline-none dark:bg-slate-800 dark:text-white transition-colors"
          placeholder="ornek@email.com"
        >
      </div>
      
      <div>
        <label for="phone" class="block text-sm font-semibold mb-2">Telefon</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone"
          class="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-slate-700 focus:border-primary focus:outline-none dark:bg-slate-800 dark:text-white transition-colors"
          placeholder="+90 555 123 4567"
        >
      </div>
      
      <div>
        <label for="service" class="block text-sm font-semibold mb-2">Hangi hizmetle ilgileniyorsunuz?</label>
        <select 
          id="service" 
          name="service"
          class="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-slate-700 focus:border-primary focus:outline-none dark:bg-slate-800 dark:text-white transition-colors"
        >
          <option value="">Seçiniz</option>
          <option value="web-gelistirme">Web Geliştirme</option>
          <option value="ui-ux-tasarim">UI/UX Tasarım</option>
          <option value="mobil-uygulama">Mobil Uygulama</option>
          <option value="seo-dijital-pazarlama">SEO & Dijital Pazarlama</option>
          <option value="danismanlik">Danışmanlık</option>
          <option value="diger">Diğer</option>
        </select>
      </div>
      
      <div>
        <label for="message" class="block text-sm font-semibold mb-2">Mesajınız *</label>
        <textarea 
          id="message" 
          name="message" 
          required
          rows="6"
          class="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-slate-700 focus:border-primary focus:outline-none dark:bg-slate-800 dark:text-white transition-colors resize-none"
          placeholder="Projeniz hakkında detaylı bilgi verin..."
        ></textarea>
      </div>
      
      <div class="flex items-start">
        <input 
          type="checkbox" 
          id="privacy" 
          name="privacy" 
          required
          class="mt-1 mr-3 w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
        >
        <label for="privacy" class="text-sm text-gray-600 dark:text-gray-400">
          <a href="#" class="text-primary hover:underline">Gizlilik politikasını</a> okudum ve kabul ediyorum. *
        </label>
      </div>
      
      <button 
        type="submit"
        class="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
      >
        Mesajı Gönder
      </button>
    </form>
  </div>
  
  <!-- Contact Info & Map -->
  <div>
    <h2 class="text-3xl font-display font-bold mb-6">İletişim Bilgileri</h2>
    
    <div class="space-y-6 mb-8">
      <div class="flex items-start space-x-4">
        <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
        </div>
        <div>
          <h3 class="font-semibold mb-1">Adres</h3>
          <p class="text-gray-600 dark:text-gray-400">{{ site.address }}</p>
        </div>
      </div>
      
      <div class="flex items-start space-x-4">
        <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
        </div>
        <div>
          <h3 class="font-semibold mb-1">Telefon</h3>
          <a href="tel:{{ site.phone }}" class="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
            {{ site.phone }}
          </a>
        </div>
      </div>
      
      <div class="flex items-start space-x-4">
        <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </div>
        <div>
          <h3 class="font-semibold mb-1">E-posta</h3>
          <a href="mailto:{{ site.email }}" class="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
            {{ site.email }}
          </a>
        </div>
      </div>
      
      <div class="flex items-start space-x-4">
        <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <div>
          <h3 class="font-semibold mb-1">Çalışma Saatleri</h3>
          <p class="text-gray-600 dark:text-gray-400">Pazartesi - Cuma: 09:00 - 18:00</p>
          <p class="text-gray-600 dark:text-gray-400">Cumartesi: 10:00 - 16:00</p>
        </div>
      </div>
    </div>
    
    <!-- Social Media -->
    <div class="mb-8">
      <h3 class="font-semibold mb-4">Sosyal Medya</h3>
      <div class="flex space-x-4">
        {% if site.social.twitter %}
        <a href="https://twitter.com/{{ site.social.twitter }}" target="_blank" rel="noopener" class="w-12 h-12 bg-gray-100 dark:bg-slate-800 hover:bg-primary hover:text-white dark:hover:bg-primary rounded-lg flex items-center justify-center transition-colors" aria-label="Twitter">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </a>
        {% endif %}
        
        {% if site.social.facebook %}
        <a href="https://facebook.com/{{ site.social.facebook }}" target="_blank" rel="noopener" class="w-12 h-12 bg-gray-100 dark:bg-slate-800 hover:bg-primary hover:text-white dark:hover:bg-primary rounded-lg flex items-center justify-center transition-colors" aria-label="Facebook">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        {% endif %}
        
        {% if site.social.instagram %}
        <a href="https://instagram.com/{{ site.social.instagram }}" target="_blank" rel="noopener" class="w-12 h-12 bg-gray-100 dark:bg-slate-800 hover:bg-primary hover:text-white dark:hover:bg-primary rounded-lg flex items-center justify-center transition-colors" aria-label="Instagram">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        {% endif %}
        
        {% if site.social.linkedin %}
        <a href="https://linkedin.com/{{ site.social.linkedin }}" target="_blank" rel="noopener" class="w-12 h-12 bg-gray-100 dark:bg-slate-800 hover:bg-primary hover:text-white dark:hover:bg-primary rounded-lg flex items-center justify-center transition-colors" aria-label="LinkedIn">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        {% endif %}
      </div>
    </div>
    
    <!-- Map -->
    <div class="rounded-2xl overflow-hidden shadow-lg">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2542605253034!2d28.978359315415907!3d41.008237379297925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9be92011c27%3A0x236a6e6123f8671d!2sSultan%20Ahmet%20Camii!5e0!3m2!1str!2str!4v1621234567890!5m2!1str!2str" 
        width="100%" 
        height="300" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy"
        class="w-full"
      ></iframe>
    </div>
  </div>
  
</div>
