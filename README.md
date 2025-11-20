# Erlan - Modern Jekyll Ajans Teması

Modern, şık ve profesyonel bir Jekyll teması. Web ajansları, freelancer'lar ve dijital ajanslar için özel olarak tasarlandı. GSAP animasyonları, TailwindCSS ve Alpine.js ile güçlendirilmiş, tam responsive ve SEO optimize edilmiş bir tema.

![Erlan Theme](https://img.shields.io/badge/Jekyll-4.3+-red.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)

## ✨ Özellikler

### 🎨 Tasarım
- **Modern ve Minimal:** Temiz, profesyonel görünüm
- **Dark Mode:** Otomatik ve manuel dark mode desteği
- **Glassmorphism Efektleri:** Modern cam efektleri
- **Responsive:** Tüm cihazlarda mükemmel görünüm
- **Gradient Accents:** Göz alıcı renk geçişleri

### 🚀 Animasyonlar
- **GSAP 3:** Profesyonel animasyon kütüphanesi
- **ScrollTrigger:** Scroll-based animasyonlar
- **Hero Animasyonları:** Etkileyici giriş animasyonları
- **Card Hover Effects:** 3D hover efektleri
- **Page Transitions:** Akıcı sayfa geçişleri
- **Magnetic Buttons:** Manyetik buton efektleri

### 💻 Teknolojiler
- **Jekyll 4.3+:** Modern static site generator
- **TailwindCSS:** Utility-first CSS framework (CDN)
- **Alpine.js:** Minimal JavaScript framework
- **GSAP 3:** Animation library
- **Font Awesome:** Icon library
- **Google Fonts:** Inter & Poppins

### 📦 İçerik
- **Hizmetler Koleksiyonu:** 5 örnek hizmet sayfası
- **Projeler Koleksiyonu:** 3 örnek proje
- **Blog Sistemi:** 3 örnek blog yazısı
- **İletişim Formu:** Hazır iletişim sayfası
- **Portfolio:** Filtrelenebilir proje galerisi

### ⚡ Performans
- **Lighthouse 90+:** Yüksek performans skoru
- **Lazy Loading:** Görsel lazy loading
- **Minified Assets:** Optimize edilmiş dosyalar
- **CDN Support:** Hızlı yükleme süreleri

### 🔍 SEO
- **jekyll-seo-tag:** Otomatik SEO etiketleri
- **Sitemap:** Otomatik sitemap üretimi
- **RSS Feed:** Blog RSS feed
- **Structured Data:** Schema.org markup
- **Meta Tags:** Optimize edilmiş meta etiketleri

## 📋 Gereksinimler

- Ruby 2.7+ veya 3.x
- Jekyll 4.3+
- Bundler 2.0+

## 🚀 Kurulum

### 1. Repository'yi Klonlayın

```bash
git clone https://github.com/kursatemre/jekyll-agency-theme-erlan.git
cd jekyll-agency-theme-erlan
```

### 2. Bağımlılıkları Yükleyin

```bash
bundle install
```

### 3. Siteyi Çalıştırın

```bash
bundle exec jekyll serve
```

Site `http://localhost:4000` adresinde çalışacaktır.

### 4. Live Reload ile Geliştirme

```bash
bundle exec jekyll serve --livereload
```

## 📁 Dosya Yapısı

```
jekyll-agency-theme-erlan/
├── _config.yml              # Site yapılandırması
├── _includes/               # Tekrar kullanılabilir bileşenler
│   ├── header.html         # Header navigasyon
│   ├── footer.html         # Footer
│   ├── hero.html           # Hero section
│   └── animations.html     # GSAP animasyon scripti
├── _layouts/                # Sayfa şablonları
│   ├── default.html        # Ana şablon
│   ├── home.html           # Anasayfa şablonu
│   ├── page.html           # Sayfa şablonu
│   ├── post.html           # Blog yazısı şablonu
│   └── services.html       # Hizmetler şablonu
├── _services/               # Hizmet koleksiyonu
│   ├── web-gelistirme.md
│   ├── ui-ux-tasarim.md
│   ├── mobil-uygulama.md
│   ├── seo-dijital-pazarlama.md
│   └── danismanlik.md
├── _projects/               # Proje koleksiyonu
│   ├── techstart-eticaret.md
│   ├── healthtrack-mobile.md
│   └── financehub-redesign.md
├── _posts/                  # Blog yazıları
│   └── YYYY-MM-DD-title.md
├── assets/
│   ├── css/
│   │   └── custom.css      # Özel CSS stilleri
│   ├── js/
│   │   ├── main.js         # Ana JavaScript
│   │   └── animations.js   # GSAP animasyonları
│   └── images/             # Görseller
├── index.html               # Anasayfa
├── hizmetler.md            # Hizmetler sayfası
├── portfolio.md            # Portfolio sayfası
├── blog.md                 # Blog arşivi
├── hakkimda.md             # Hakkımda sayfası
├── iletisim.md             # İletişim sayfası
├── 404.html                # 404 sayfası
└── robots.txt              # Robots.txt
```

## ⚙️ Yapılandırma

### _config.yml

Site ayarlarınızı `_config.yml` dosyasından yapılandırın:

```yaml
title: "Site Başlığınız"
email: "email@example.com"
description: "Site açıklamanız"
baseurl: ""
url: "https://siteniz.com"

# Sosyal Medya
social:
  twitter: "username"
  facebook: "username"
  instagram: "username"
  linkedin: "company/username"
  github: "username"

# Tema Renkleri
colors:
  primary: "#6366f1"
  secondary: "#8b5cf6"
  accent: "#ec4899"
```

### Dark Mode

Dark mode Alpine.js ile otomatik olarak yönetilir ve localStorage'da saklanır:

```html
<button @click="darkMode = !darkMode">
  Toggle Dark Mode
</button>
```

## 📝 İçerik Ekleme

### Yeni Blog Yazısı

`_posts/` klasörüne yeni bir dosya ekleyin:

```markdown
---
layout: post
title: "Blog Yazı Başlığı"
date: 2023-11-20 10:00:00 +0300
author: "Yazar Adı"
categories: ["kategori1", "kategori2"]
tags: ["tag1", "tag2"]
image: "/assets/images/blog/resim.jpg"
excerpt: "Kısa özet..."
---

Blog yazı içeriği buraya...
```

### Yeni Hizmet

`_services/` klasörüne yeni bir dosya ekleyin:

```markdown
---
title: "Hizmet Adı"
icon: "🎯"
description: "Kısa açıklama"
image: "/assets/images/services/resim.jpg"
features:
  - "Özellik 1"
  - "Özellik 2"
  - "Özellik 3"
---

Hizmet detaylı açıklaması...
```

### Yeni Proje

`_projects/` klasörüne yeni bir dosya ekleyin:

```markdown
---
title: "Proje Adı"
client: "Müşteri Adı"
category: "web" # web, mobile, design
date: 2023-11-20
image: "/assets/images/projects/resim.jpg"
technologies:
  - "React"
  - "Node.js"
description: "Kısa açıklama"
link: "https://proje-linki.com"
---

Proje detayları...
```

## 🎨 Özelleştirme

### Renkler

`assets/css/custom.css` dosyasında CSS değişkenlerini düzenleyin:

```css
:root {
  --primary: #6366f1;
  --secondary: #8b5cf6;
  --accent: #ec4899;
}
```

Veya TailwindCSS config'i `_layouts/default.html` içinde düzenleyin.

### Fontlar

Google Fonts'tan farklı fontlar seçebilirsiniz. `_layouts/default.html` içinde font linkini değiştirin:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

### Animasyonlar

GSAP animasyonlarını `assets/js/animations.js` ve `_includes/animations.html` dosyalarından özelleştirebilirsiniz.

## 🌐 Deployment

### GitHub Pages

1. Repository ayarlarından GitHub Pages'i aktifleştirin
2. Source: `main` branch
3. Site otomatik olarak build edilecek ve yayınlanacak

### Netlify

1. Netlify'a repository'nizi bağlayın
2. Build command: `jekyll build`
3. Publish directory: `_site`
4. Deploy!

### Vercel

```bash
npm install -g vercel
vercel
```

## 🔧 Sorun Giderme

### Jekyll Build Hatası

```bash
bundle update
bundle exec jekyll clean
bundle exec jekyll build
```

### Bağımlılık Sorunları

```bash
rm Gemfile.lock
bundle install
```

### Port Meşgul

```bash
bundle exec jekyll serve --port 4001
```

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

TailwindCSS breakpoint'leri:
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px
- `2xl:` 1536px

## 🎯 SEO İpuçları

1. Her sayfa için unique title ve description yazın
2. Görsellere alt text ekleyin
3. URL'leri SEO-friendly yapın
4. Internal linking kullanın
5. Sitemap'i Google Search Console'a gönderin
6. robots.txt'i kontrol edin

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Pull request göndermekten çekinmeyin.

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Push edin (`git push origin feature/AmazingFeature`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

## 👨‍💻 Geliştirici

**Erlan Ekibi**
- Website: [erlan.com](https://erlan.com)
- Email: info@erlan.com
- GitHub: [@kursatemre](https://github.com/kursatemre)

## 🙏 Teşekkürler

- [Jekyll](https://jekyllrb.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [GSAP](https://greensock.com/gsap/)
- [Alpine.js](https://alpinejs.dev/)
- [Google Fonts](https://fonts.google.com/)

## 📞 Destek

Sorularınız veya önerileriniz için:
- GitHub Issues: [Create an issue](https://github.com/kursatemre/jekyll-agency-theme-erlan/issues)
- Email: info@erlan.com

---

⭐ Bu projeyi beğendiyseniz yıldızlamayı unutmayın!

**Made with ❤️ by Erlan**