/* ============================================================
   SAPPHIRE INTERNET — Main JS
   ============================================================ */

// ---- NAVBAR SCROLL ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 50);
});

// ---- MOBILE MENU ----
const navToggle = document.getElementById('nav-toggle');
const navMenu   = document.getElementById('nav-menu');
navToggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('open');
});
document.addEventListener('click', e => {
    if (!navbar?.contains(e.target)) navMenu?.classList.remove('open');
});

// ---- CALL POPUP ----
const popup      = document.getElementById('callPopup');
const closePopup = document.getElementById('closePopup');
setTimeout(() => popup?.classList.add('visible'), 4000);
closePopup?.addEventListener('click', () => popup?.classList.remove('visible'));

// ---- TRENDING CAROUSEL ----
const carousel  = document.getElementById('trendingCarousel');
const prevBtn   = document.getElementById('trendPrev');
const nextBtn   = document.getElementById('trendNext');
const SCROLL_BY = 260;

prevBtn?.addEventListener('click', () => carousel?.scrollBy({ left: -SCROLL_BY, behavior: 'smooth' }));
nextBtn?.addEventListener('click', () => carousel?.scrollBy({ left:  SCROLL_BY, behavior: 'smooth' }));

// ---- FAQ ACCORDION ----
document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
    });
});

// ---- SCROLL REVEAL ----
const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
const observer  = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));

// ---- SMOOTH SCROLL FOR ANCHOR LINKS ----
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            navMenu?.classList.remove('open');
        }
    });
});

// ---- STEP DONE BUTTONS (keep from old design if present) ----
document.querySelectorAll('.step-done').forEach(btn => {
    btn.addEventListener('click', function() {
        this.textContent = '✓ Done';
        this.style.background = '#10b981';
        this.style.color = '#fff';
        this.disabled = true;
    });
});
