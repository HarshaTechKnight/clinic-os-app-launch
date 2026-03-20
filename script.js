// ─── Smooth Scroll ────────────────────────────────────────────────────────────

function smoothScroll(id) {
    document.getElementById('mobile-menu').classList.remove('open');
    var el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}

// ─── Navbar Scroll State ──────────────────────────────────────────────────────

window.addEventListener('scroll', function () {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ─── Mobile Menu Toggle ───────────────────────────────────────────────────────

function toggleMobile() {
    document.getElementById('mobile-menu').classList.toggle('open');
}

// ─── Reveal on Scroll (IntersectionObserver) ──────────────────────────────────

var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
});

// ─── Demo Form Submit → WhatsApp DM ──────────────────────────────────────────

function submitDemo(e) {
    e.preventDefault();

    var name   = document.getElementById('f-name').value.trim();
    var phone  = document.getElementById('f-phone').value.trim();
    var clinic = document.getElementById('f-clinic').value.trim();
    var city   = document.getElementById('f-city').value.trim();

    if (!name || !phone) {
        alert('Please fill in your name and phone number.');
        return;
    }

    // Build the WhatsApp message
    var message =
        '👋 New Demo Request — ClinicOS\n\n' +
        '👤 Name: '   + name  + '\n' +
        '📱 Phone: '  + phone + '\n' +
        (clinic ? '🏥 Clinic: ' + clinic + '\n' : '') +
        (city   ? '📍 City: '   + city   + '\n' : '') +
        '\nSent via ClinicOS website contact form.';

    var whatsappURL = 'https://wa.me/917330937354?text=' + encodeURIComponent(message);

    // Show success screen first
    document.getElementById('demo-form').style.display = 'none';
    document.getElementById('demo-success').style.display = 'block';
    document.getElementById('success-name').textContent = 'Thank you, ' + name.split(' ')[0] + '!';

    // Open WhatsApp after a short delay so user sees the success message
    setTimeout(function () {
        window.open(whatsappURL, '_blank');
    }, 800);
}

// ─── Obfuscated Contact Email (anti-scrape) ───────────────────────────────────

document.getElementById('contact-email').textContent = 'info' + '@' + 'codingrippler.com';