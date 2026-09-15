/* ═══════════════════════════════════════════════════════════════
   THE ALL INDIA TRAVELS — MAIN JAVASCRIPT
   Navigation, forms, animations, interactions
   ═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  // ─── PAGE LOADER ───
  const loader = document.querySelector('.page-loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('loaded'), 300);
    });
    // Fallback: hide after 3s even if load event already fired
    setTimeout(() => loader.classList.add('loaded'), 3000);
  }

  // ─── SCROLL PROGRESS BAR ───
  const progressBar = document.querySelector('.scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      progressBar.style.transform = `scaleX(${progress})`;
    }, { passive: true });
  }

  // ─── HEADER SCROLL EFFECT ───
  const header = document.querySelector('.site-header');
  if (header) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }

  // ─── HAMBURGER MENU ───
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (hamburger && mobileNav) {
    if (!mobileNav.querySelector('a[href^="tel:"]')) {
      const callLink = document.createElement('a');
      callLink.href = 'tel:+919363539853';
      callLink.className = 'btn btn-secondary';
      callLink.textContent = '📞 Call Now';
      mobileNav.appendChild(callLink);
    }

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('active');
      document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });
    // Close on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  const floatingWhatsApp = document.querySelector('.wa-float');
  if (floatingWhatsApp && !document.querySelector('.call-float')) {
    const callFloat = document.createElement('a');
    callFloat.href = 'tel:+919363539853';
    callFloat.className = 'call-float';
    callFloat.setAttribute('aria-label', 'Call The All India Travels');
    callFloat.textContent = '📞';
    floatingWhatsApp.parentElement.insertBefore(callFloat, floatingWhatsApp);
  }

  // ─── ACTIVE NAV LINK ───
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-desktop a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPage || (currentPage === '' && href === 'index.html'))) {
      link.classList.add('active');
    }
  });

  // ─── SCROLL ANIMATIONS ───
  const animatedElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right, .fade-scale');
  if (animatedElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    animatedElements.forEach(el => observer.observe(el));
  }

  // ─── ANIMATED COUNTERS ───
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          entry.target.dataset.counted = 'true';
          animateCounter(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => counterObserver.observe(el));
  }

  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 2000;
    const start = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent = prefix + current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  // ─── FAQ ACCORDION ───
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      // Close all others in same container
      item.parentElement.querySelectorAll('.faq-item.open').forEach(other => {
        if (other !== item) other.classList.remove('open');
      });
      item.classList.toggle('open', !wasOpen);
    });
  });

  // ─── WHATSAPP FORM HANDLER ───
  function setupWhatsAppForm(formId, fields) {
    const form = document.getElementById(formId);
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = {};
      fields.forEach(f => {
        const el = document.getElementById(f.id);
        if (el) data[f.label] = el.value.trim();
      });
      let msg = '🚖 *New Taxi Booking Enquiry*\n━━━━━━━━━━━━━━━━\n\n';
      for (const [k, v] of Object.entries(data)) {
        if (v) msg += `*${k}:* ${v}\n`;
      }
      msg += '\n_Sent from theallindiatravels.online_';
      window.open('https://wa.me/919363539853?text=' + encodeURIComponent(msg), '_blank');
    });
  }

  // Register forms
  setupWhatsAppForm('hero-booking-form', [
    { id: 'h-name', label: 'Name' },
    { id: 'h-phone', label: 'Phone' },
    { id: 'h-pickup', label: 'Pickup' },
    { id: 'h-drop', label: 'Drop' },
    { id: 'h-date', label: 'Travel Date' },
    { id: 'h-trip', label: 'Trip Type' }
  ]);

  setupWhatsAppForm('contact-form', [
    { id: 'c-name', label: 'Name' },
    { id: 'c-phone', label: 'Phone' },
    { id: 'c-pickup', label: 'Pickup' },
    { id: 'c-drop', label: 'Drop' },
    { id: 'c-date', label: 'Travel Date' },
    { id: 'c-trip', label: 'Trip Type' },
    { id: 'c-msg', label: 'Details' }
  ]);

  setupWhatsAppForm('quick-enquiry-form', [
    { id: 'q-name', label: 'Name' },
    { id: 'q-phone', label: 'Phone' },
    { id: 'q-route', label: 'Route' },
    { id: 'q-date', label: 'Travel Date' },
    { id: 'q-type', label: 'Trip Type' }
  ]);

  // ─── BACK TO TOP ───
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }, { passive: true });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ─── TESTIMONIAL SLIDER ───
  const sliderTrack = document.querySelector('.testimonial-track');
  const sliderDots = document.querySelectorAll('.slider-dot');
  if (sliderTrack && sliderDots.length > 0) {
    let currentSlide = 0;
    const totalSlides = sliderDots.length;

    function goToSlide(index) {
      currentSlide = index;
      sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
      sliderDots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
    }

    sliderDots.forEach((dot, i) => {
      dot.addEventListener('click', () => goToSlide(i));
    });

    // Auto-advance
    setInterval(() => {
      goToSlide((currentSlide + 1) % totalSlides);
    }, 5000);
  }

  // ─── YEAR IN FOOTER ───
  document.querySelectorAll('.current-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // ─── SMOOTH SCROLL FOR HASH LINKS ───
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ─── PARALLAX HERO BACKGROUND ───
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scroll = window.scrollY;
      if (scroll < window.innerHeight) {
        heroBg.style.transform = `translateY(${scroll * 0.3}px)`;
      }
    }, { passive: true });
  }

  // ─── IMAGE LAZY LOADING FALLBACK ───
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imgObserver.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });
    lazyImages.forEach(img => imgObserver.observe(img));
  }

  // ─── RIPPLE EFFECT ON BUTTONS ───
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.cssText = `
        position:absolute; width:${size}px; height:${size}px;
        left:${e.clientX - rect.left - size/2}px;
        top:${e.clientY - rect.top - size/2}px;
        background:rgba(255,255,255,.25); border-radius:50%;
        transform:scale(0); animation:ripple .6s ease-out;
        pointer-events:none;
      `;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Ripple keyframe
  const style = document.createElement('style');
  style.textContent = '@keyframes ripple { to { transform:scale(2.5); opacity:0; } }';
  document.head.appendChild(style);
});
