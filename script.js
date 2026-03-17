/* ============================================================
   ClinicOS Landing Page — script.js
   CodingRippler Tech Pvt Ltd | Vijayawada, AP
   ============================================================ */

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSf_ClinicOS2026VijayawadaPilot/viewform';
const WA_NUMBER = '917330937354';

/* ── STICKY HEADER ──────────────────────────────────────── */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
});

/* ── HAMBURGER / MOBILE MENU ────────────────────────────── */
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

// Close menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// Close on outside click
document.addEventListener('click', (e) => {
  if (!header.contains(e.target) && !mobileMenu.contains(e.target)) {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  }
});

/* ── SCROLL FADE-UP ─────────────────────────────────────── */
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

/* ── MODAL ──────────────────────────────────────────────── */
const modal = document.getElementById('pilotModal');
const modalForm = document.getElementById('pilotForm');
const modalSuccess = document.getElementById('modalSuccess');

function openModal() {
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  // Reset form
  modalForm.style.display = '';
  modalSuccess.style.display = 'none';
  modal.querySelector('#clinicName').focus();
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// Open modal from all CTA buttons
document.querySelectorAll('[data-modal="pilot"]').forEach(btn => {
  btn.addEventListener('click', (e) => { e.preventDefault(); openModal(); });
});

// Close button
document.getElementById('modalClose').addEventListener('click', closeModal);

// Close on overlay click
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

/* ── FORM SUBMIT ────────────────────────────────────────── */
modalForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const btn = modalForm.querySelector('.form-submit');
  const clinicName = document.getElementById('clinicName').value.trim();
  const doctorName = document.getElementById('doctorName').value.trim();
  const phone = document.getElementById('whatsappNum').value.trim();
  const email = document.getElementById('emailAddr').value.trim();

  // Basic validation
  if (!clinicName || !doctorName || !phone) {
    showToast('⚠️ Please fill all required fields', 'warning');
    return;
  }
  if (!/^[6-9]\d{9}$/.test(phone)) {
    showToast('⚠️ Enter a valid 10-digit WhatsApp number', 'warning');
    return;
  }

  // Loading state
  btn.disabled = true;
  btn.textContent = 'Submitting...';

  // Simulate submission (replace with real API call or Google Form prefill)
  await new Promise(r => setTimeout(r, 1200));

  // Build WhatsApp message
  const waMsg = encodeURIComponent(
    `🏥 *ClinicOS Pilot Registration*\n\n` +
    `Clinic: ${clinicName}\nDoctor: ${doctorName}\nPhone: +91${phone}` +
    (email ? `\nEmail: ${email}` : '')
  );

  // Show success
  modalForm.style.display = 'none';
  modalSuccess.style.display = 'block';

  // Open WhatsApp after 1.5 seconds
  setTimeout(() => {
    window.open(`https://wa.me/${WA_NUMBER}?text=${waMsg}`, '_blank');
  }, 1500);

  btn.disabled = false;
  btn.textContent = 'Submit & Join Pilot';
});

/* ── TOAST ──────────────────────────────────────────────── */
function showToast(msg, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.style.background = type === 'warning' ? '#e53e3e' : '#1f2121';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

/* ── SMOOTH SCROLL ──────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ── LIVE QUEUE COUNTER ANIMATION ───────────────────────── */
// Animate the "Now Serving" token in the mockup
let currentToken = 24;
setInterval(() => {
  const tokenEl = document.querySelector('.ns-token');
  if (!tokenEl) return;
  // Occasionally tick forward
  if (Math.random() > 0.7) {
    currentToken++;
    tokenEl.style.transform = 'scale(1.2)';
    tokenEl.style.color = '#1a7a8f';
    setTimeout(() => {
      tokenEl.textContent = currentToken;
      tokenEl.style.transform = 'scale(1)';
      tokenEl.style.color = '';
    }, 300);
  }
}, 8000);

/* ── COUNTER ANIMATION (stats) ──────────────────────────── */
function animateCounter(el, target, suffix = '') {
  let current = 0;
  const step = Math.ceil(target / 50);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current.toLocaleString() + suffix;
    if (current >= target) clearInterval(timer);
  }, 30);
}

// Animate hero stats on load
const heroStatNums = document.querySelectorAll('.hero-stat-num');
const statsValues = [
  { val: 50, suffix: '+' },
  { val: 10000, suffix: '+' },
  { val: 30, suffix: ' min' }
];
heroStatNums.forEach((el, i) => {
  if (statsValues[i]) {
    const orig = el.textContent;
    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        animateCounter(el, statsValues[i].val, statsValues[i].suffix);
        io.disconnect();
      }
    });
    io.observe(el);
  }
});