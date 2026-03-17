# ClinicOS — Smart Clinic Management for Vijayawada

> Built by [CodingRippler Tech Pvt Ltd](https://codingrippler.com) · Vijayawada, Andhra Pradesh

---

## 📌 Overview

This is the official marketing landing page for **ClinicOS** — a smart clinic management Android app targeting small clinics, nursing homes, and individual practitioners in Vijayawada, AP.

**Conversion Goal:** Drive free 30-day pilot sign-ups from 500+ Vijayawada clinic owners.  
**Target Rate:** 10% form submission rate.  
**Launch Date:** April 2026.

---

## 🎨 Design System

### Colors

| Role | Name | Hex |
|------|------|-----|
| Primary | Teal | `#208F9F` |
| Primary Hover | Teal Dark | `#1a7a8f` |
| Primary Light | Teal Light | `#e6f5f7` |
| CTA / Success | Green | `#28A745` |
| CTA Hover | Green Dark | `#1e8a38` |
| Header / Footer | Dark | `#1f2121` |
| Body Text | Text | `#1f2121` |
| Muted Text | Text Light | `#666666` |
| Background Alt | Light Gray | `#f5f5f5` |
| Borders | Border | `#e0e0e0` |

### Typography

| Element | Size | Weight |
|---------|------|--------|
| H1 (Hero) | `3rem` | `700` |
| H2 (Section) | `2.5rem` | `700` |
| H3 (Card title) | `1.05–1.3rem` | `700` |
| Body | `1rem` | `400` |
| Small / Labels | `0.82rem` | `600–700` |

**Font Family:** `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`  
No external font dependencies — fast load on all devices.

---

## 📐 Page Sections

| # | Section | Background | Key Component |
|---|---------|------------|---------------|
| 1 | Header | White → frosted on scroll | Sticky nav, Join Pilot CTA |
| 2 | Hero | Teal gradient | Android mockup, floating badges |
| 3 | About | White | 2-col layout, benefit pills |
| 4 | Features | Light gray | 8-card grid |
| 5 | How It Works | White | 4-step flow |
| 6 | Pricing | Light gray | 3-tier cards, featured Pilot |
| 7 | Testimonials | Teal gradient | 3 testimonial cards |
| 8 | CTA | Green gradient | Single CTA button |
| 9 | Footer | Dark `#1f2121` | 4-column grid |

---

## 🪟 Modal — Pilot Registration

Triggered by any **"Join Pilot"** button across the page.

**Form Fields:**
1. Clinic Name (required)
2. Doctor / Owner Name (required)
3. WhatsApp Number — +91 prefix, 10-digit validation (required)
4. Email Address (optional)

**On Submit:**
1. Client-side validation runs
2. 1.2s loading state shown
3. Success screen revealed
4. WhatsApp opens automatically with pre-filled message to `+91 7330937354`

**Additional Link:** Full Google Form for detailed registration (9 sections).

---

## ⚙️ JavaScript Features (`script.js`)

| Feature | Description |
|---------|-------------|
| Sticky header | Adds `.scrolled` class (frosted glass) after 60px scroll |
| Hamburger menu | Toggle mobile nav with animated icon morph |
| Scroll fade-up | `IntersectionObserver` reveals elements on scroll |
| Modal open/close | Triggered by `[data-modal="pilot"]`, closes on overlay/Esc |
| Form validation | Phone regex `[6-9][0-9]{9}`, required field checks |
| WhatsApp redirect | Pre-filled message sent on form submit |
| Toast notifications | Slide-up feedback for form errors |
| Counter animation | Hero stats count up when scrolled into view |
| Queue token ticker | "Now Serving" token randomly increments every 8s |

---

## 📲 CTAs & Links

| Button | Action | Location |
|--------|--------|----------|
| Join Pilot (header) | Opens modal | Header |
| Join Free Pilot → | Opens modal | Hero |
| Watch Demo (52s) | Opens `https://drive.google.com/file/d/1soIMutKVzkzhk43__52L1KtjVqFA5f17/view?usp=drive_link` | Hero |
| Join Pilot (pricing) | Opens modal | Pricing — Pilot card |
| Subscribe Now | Opens WhatsApp — Pro inquiry | Pricing — Pro card |
| Contact Sales | Opens modal | Pricing — Multi card |
| Join Free Pilot Now → | Opens modal | CTA section |
| WhatsApp FAB | Opens WhatsApp chat | Fixed, bottom-right |
| 💬 WhatsApp Us | Opens WhatsApp chat | Footer |

---

## 🚀 Deployment

### Option 1 — Netlify Drop (Fastest, ~2 minutes)

1. Go to **[app.netlify.com/drop](https://app.netlify.com/drop)**
2. Drag the entire `clinicos-landing/` folder onto the page
3. Get a live URL instantly (e.g. `clinicos-vij.netlify.app`)
4. Share with clinics 🎉

### Option 2 — Vercel

```bash
npm i -g vercel
cd clinicos-landing
vercel
```

### Option 3 — GitHub Pages

```bash
# Create a repo named: username.github.io
git init
git add .
git commit -m "ClinicOS landing page"
git remote add origin https://github.com/username/username.github.io.git
git push -u origin main
# Live at: https://username.github.io
```

### Option 4 — Local Preview

```bash
# Just open in browser
open index.html

# Or use a local server
npx serve .
# or
python3 -m http.server 3000
```

---

## 🌐 Custom Domain Setup

1. Buy a domain: `clinicos.in` or `clinicos.app` (GoDaddy / Namecheap ~₹800/yr)
2. In Netlify: **Domain Settings → Add custom domain**
3. Update DNS: Point nameservers to Netlify's servers
4. SSL is automatic (Let's Encrypt) — no extra setup

**Recommended domains:**
- `clinicos.in`
- `clinicos.app`
- `clinicosapp.com`

---

## 📞 Contact & WhatsApp Number

The WhatsApp number `917330937354` is used in these locations:

| File | Line | Usage |
|------|------|-------|
| `script.js` | Line 2 | `const WA_NUMBER` — modal form submit |
| `index.html` | Hero secondary btn | Watch Demo link |
| `index.html` | Pricing — Pro card | Subscribe Now button |
| `index.html` | Footer — WhatsApp Us | Direct chat link |
| `index.html` | WhatsApp FAB | Fixed chat button |
| `index.html` | Modal success screen | Contact link |

To change the number, update `WA_NUMBER` in `script.js` and search-replace `917330937354` in `index.html`.

---

## 📱 Mobile Responsiveness

| Breakpoint | Changes |
|------------|---------|
| `≤ 1024px` | Pricing grid → single column |
| `≤ 768px` | Nav collapses to hamburger; hero → 1 column; floating mockup badges hidden |
| `≤ 480px` | Hero CTAs stack vertically; features → 1 column; footer → 1 column |

Tested range: **320px → 1920px** (all devices).

---

## ✅ Pre-Launch Checklist

- [ ] Replace Google Form placeholder URL in `index.html` and `script.js`
- [ ] Verify WhatsApp number `917330937354` is correct and active
- [ ] Test modal form on mobile (Chrome + Safari)
- [ ] Test hamburger menu on 375px screen
- [ ] Verify all "Join Pilot" buttons open the modal
- [ ] Confirm WhatsApp message sends correctly on submit
- [ ] Update demo video link if URL changes
- [ ] Add Google Analytics tag in `<head>` (optional)
- [ ] Generate QR code from live URL for field visits
- [ ] Test on slow 3G network (important for clinic areas)

---

## 📈 Google Analytics Setup (Optional)

Add this inside the `<head>` tag in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your Measurement ID from [analytics.google.com](https://analytics.google.com).

**Recommended events to track:**
- Modal open: `gtag('event', 'modal_open', { event_category: 'CTA' })`
- Form submit: `gtag('event', 'pilot_signup', { event_category: 'Conversion' })`
- WhatsApp click: `gtag('event', 'whatsapp_click', { event_category: 'Contact' })`

---

## 🗓️ Launch Timeline

| Week | Action |
|------|--------|
| Week 1 (Mar 18) | Deploy landing page to Netlify |
| Week 1 | Launch Google Ads campaign (₹1k budget) |
| Week 2 | WhatsApp pilot form to 20 Vijayawada clinics |
| Week 3 | Begin pilot onboarding + clinic visits |
| Week 4 | Collect feedback, iterate on features |
| **April 2026** | **Play Store Launch** 🚀 |

---

## 📬 Support & Contact

| Channel | Details |
|---------|---------|
| Email | hello@codingrippler.com |
| WhatsApp | [+91-7330937354](https://wa.me/917330937354) |
| Live Demo | [lively-crostata-40ac4a.netlify.app](https://lively-crostata-40ac4a.netlify.app/) |
| Location | Vijayawada, Andhra Pradesh |

---

## 📄 License

© 2026 **Coding Rippler Tech Private Limited**. All rights reserved.  
Vijayawada, Andhra Pradesh, India.

---

*ClinicOS — Built in Vijayawada. For Vijayawada. మీ కోసం.* 🏥
