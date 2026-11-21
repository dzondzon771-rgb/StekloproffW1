(() => {
  'use strict';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const progress = document.querySelector('#pageProgress');
  let scrollTick = false;
  function updateScroll() {
    const total = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const position = Math.min(1, Math.max(0, window.scrollY / total));
    if (progress) progress.style.transform = `scaleX(${position})`;
    scrollTick = false;
  }
  window.addEventListener('scroll', () => {
    if (!scrollTick) {window.requestAnimationFrame(updateScroll); scrollTick = true;}
  }, {passive: true});
  updateScroll();

  // Reveal only with full IntersectionObserver support; the page stays readable otherwise.
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const targets = Array.from(document.querySelectorAll(
      '.section-heading, .service-card, .trust-item, .advantages-visual, .advantages-copy, .model-card, .step-card, .faq-intro, .accordion, .contact-copy, .contact-card'
    ));
    targets.forEach(node => node.classList.add('reveal'));
    document.documentElement.classList.add('js-motion');
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }, {threshold:.08, rootMargin:'0px 0px 30px 0px'});
    targets.forEach(node => observer.observe(node));
  } else if (!reduceMotion) {
    document.documentElement.classList.add('js-motion');
  }

  // Gentle pointer-follow highlight for desktop; no forced GPU tilt effect on touch.
  if (!reduceMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('.service-card').forEach(card => {
      card.addEventListener('pointermove', event => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${event.clientX-r.left}px`);
        card.style.setProperty('--my', `${event.clientY-r.top}px`);
      }, {passive:true});
    });
  }

  // Services re-enter gracefully when filtering; original filtering logic is untouched.
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.service-card:not([hidden])').forEach((card, i) => {
        card.classList.remove('filter-enter');
        if (reduceMotion) return;
        card.style.animationDelay = `${Math.min(i,5)*45}ms`;
        void card.offsetWidth;
        card.classList.add('filter-enter');
      });
    });
  });

  // Header navigation highlights the current section without affecting click behavior.
  if ('IntersectionObserver' in window) {
    const links = Array.from(document.querySelectorAll('.desktop-nav a[href^="#"]'));
    const map = new Map(links.map(link => [link.getAttribute('href').slice(1), link]));
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const link = map.get(entry.target.id);
        if (link && entry.isIntersecting) {
          links.forEach(a => a.classList.remove('active'));
          link.classList.add('active');
        }
      });
    }, {rootMargin:'-15% 0px -70% 0px'});
    map.forEach((_, id) => {const sec = document.getElementById(id); if(sec) sectionObserver.observe(sec);});
  }
})();
