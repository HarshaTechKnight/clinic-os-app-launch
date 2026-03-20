<div align="center">

<img width="96" height="96" alt="clinicos-icon" src="https://github.com/user-attachments/assets/613d2239-a735-4528-b9b8-ca8bfb636f43" />


# ClinicOS

### The operating system your clinic never knew it needed.

Replace paper registers, manual billing, and crowded waiting rooms with a single app.  
Built for the way Indian clinics actually work — offline-ready, fast, and zero training needed.

[![Pilot Status](https://img.shields.io/badge/Status-Live%20Pilot-brightgreen?style=flat-square)](https://www.clinicos.care)
[![Platform](https://img.shields.io/badge/Platform-Android-3DDC84?style=flat-square&logo=android&logoColor=white)](https://www.clinicos.care)
[![Offline](https://img.shields.io/badge/Offline-100%25%20Support-0A3D2A?style=flat-square)](https://www.clinicos.care)
[![Clinics](https://img.shields.io/badge/Pilot%20Clinics-15%2B-0F6B45?style=flat-square)](https://www.clinicos.care)
[![Website](https://img.shields.io/badge/Website-clinicos.care-139157?style=flat-square&logo=googlechrome&logoColor=white)](https://clinic-os-app-launch.vercel.app/)

[🌐 Website](https://clinic-os-app-launch.vercel.app/) · [📱 Request a Demo](https://calendar.app.google/Ss9BUourZC9SNMAj7) · [💬 WhatsApp Us](https://wa.me/917330937354)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [The Problem](#-the-problem)
- [Key Features](#-key-features)
- [How It Works](#-how-it-works)
- [Stats at a Glance](#-stats-at-a-glance)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Testimonials](#-testimonials)
- [Roadmap](#-roadmap)
- [Contact](#-contact)
- [License](#-license)

---

## 🏥 Overview

**ClinicOS** is a smart clinic management platform built specifically for small private clinics, nursing homes, and solo practitioners across India. It digitizes the entire patient journey — from walk-in registration to consultation to billing — in under 10 minutes.

> *"We built ClinicOS because we visited clinics and saw the same problems everywhere. Doctors work too hard to lose time, revenue, and patients to paper registers."*

**Currently piloting in vijayawada**, with plans to expand statewide and nationally.

---

## 🚨 The Problem

Most clinics across India still rely on:

| Pain Point | Impact |
|---|---|
| 📋 Handwritten patient registers | 4–6 minutes per registration, unreadable, unsearchable |
| ⏳ No queue visibility for patients | Waiting rooms crowded for 30 min to 2+ hours |
| 💸 Manual billing | Missed invoices, calculation errors, lost receipts |
| 🗂️ No patient history system | Returning patients re-registered from scratch |
| 📊 Zero operational data | Doctors make scheduling and staffing decisions blind |

> **~2 hours per day** are lost to administrative work in a typical Indian clinic.

---

## ✨ Key Features

### ⚡ Queue Management
Register patients in seconds, not minutes. Even a name is enough to get started.

- **Under 10-second registration** — enter a phone number, returning patients auto-fill instantly
- **Automatic token assignment** — no manual numbering, no paper slips
- **Live queue display** — real-time token status on any connected screen
- **Step-out & call-now controls** — manage walk-outs and priority changes with one tap
- **100% offline** — works through power cuts and network outages without losing a single record

---

### 📲 Patient Communication
Patients know their turn before they need to ask.

- **Automated SMS notifications** — turn-approaching alerts sent automatically
- **99%+ SMS delivery rate** — DLT-compliant and tested in low-connectivity zones
- **Customizable templates** — edit message content per clinic preference
- **Patients wait outside** — less crowding, calmer waiting rooms, happier staff

---

### 🗂️ Digital Records & Billing
Every visit, every prescription, every bill — searchable forever.

- **Thread-based patient records** — every consultation linked to a phone number
- **One-tap bill generation** — professional digital invoices in seconds
- **Revenue & collection tracking** — daily totals, pending dues, trend view
- **CSV export** — full data portability, always

---

### 📊 Analytics Dashboard
For the first time, clinics can make decisions backed by real data.

- Patient volume by day, week, and month
- Revenue trends and peak-hour analysis
- Consultation time averages
- Staff and operational insights

---

## 🔄 How It Works

```
Patient Walks In
      │
      ▼
┌─────────────────────────────┐
│  Step 01 — Register         │
│  Name or phone number       │
│  Returning: auto-fill       │
│  New: under 10 seconds      │
│  Token assigned instantly   │
└─────────────┬───────────────┘
              │
              ▼
┌─────────────────────────────┐
│  Step 02 — Queue Runs Itself│
│  Live queue auto-updates    │
│  SMS sent as turn approaches│
│  Staff controls: 1 tap      │
└─────────────┬───────────────┘
              │
              ▼
┌─────────────────────────────┐
│  Step 03 — Consultation     │
│  Full patient thread visible│
│  Past visits, prescriptions │
│  Doctor focuses on care     │
└─────────────┬───────────────┘
              │
              ▼
┌─────────────────────────────┐
│  Step 04 — Bill & Data      │
│  One-tap invoice generated  │
│  Analytics updated live     │
│  Every metric captured      │
└─────────────────────────────┘
```

---

## 📈 Stats at a Glance

| Metric | Value |
|--------|-------|
| 🏥 Pilot clinics | 15+ |
| ⚡ Patient registration | < 10 seconds |
| 🕐 Admin time saved daily | 2+ hours |
| 🌐 Offline functionality | 100% |
| 👨‍⚕️ Patients managed per doctor | 25–80 / day |
| 📱 SMS delivery success rate | 99%+ |
| 🎓 Training required | Zero |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend (Website)** | HTML5, CSS3 (custom properties), Vanilla JavaScript |
| **Fonts** | Playfair Display, Source Sans 3, IBM Plex Mono (Google Fonts) |
| **Form Handling** | WhatsApp Business API (wa.me redirect) |
| **Hosting** | Vercel / Custom domain via `clinicos.care` |
| **Mobile App** | Android (Native) |
| **Animations** | CSS transitions + IntersectionObserver API |
| **Analytics** | Custom in-app dashboard |

---

## 📁 Project Structure

```
clinicos-website/
├── index.html              # Main landing page
├── styles.css              # All styles — variables, layout, components, responsive
├── script.js               # Smooth scroll, nav scroll state, reveal animations,
│                           # mobile menu, WhatsApp form redirect
├── privacy-policy.html     # Privacy policy page
├── terms-of-use.html       # Terms of use page
└── images/
    ├── clinicos-icon.png   # App icon / favicon
    ├── hero-bg.png         # Hero section background
    ├── add-patient.png     # Feature screenshot — patient registration
    ├── patient-status.png  # Feature screenshot — live queue
    ├── visit-details.png   # Feature screenshot — visit & billing
    ├── patient-walkin.jpg  # How it works — step 01
    ├── queue-runs-itself.png # How it works — step 02
    ├── consultation.png    # How it works — step 03
    └── data-analytics.jpg  # How it works — step 04
```

---

## 🚀 Getting Started

### Prerequisites

- Any modern web browser
- A local static file server (optional, for development)

### Run Locally

```bash
# Clone the repository
git clone https://github.com/HarshaTechKnight/clinic-os-app-launch.git

# Navigate into the project
cd clinicos-website

# Option 1: Open directly in browser
open index.html

# Option 2: Serve locally with Python
python3 -m http.server 8000
# Then open http://localhost:8000

# Option 3: Serve with Node.js (npx)
npx serve .
# Then open http://localhost:3000
```

No build steps. No dependencies. No `npm install`. It's plain HTML, CSS, and JavaScript.

---

## ☁️ Deployment

The site is deployed on **Vercel** with a custom domain at [clinicos.care](https://clinic-os-app-launch.vercel.app/).

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project root
vercel

# Follow prompts — no build command needed, output directory is ./
```

### Deploy to Netlify (Drag & Drop)

1. Go to [netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire project folder onto the page
3. Done — live in seconds

### Deploy to GitHub Pages

```bash
# Push to GitHub, then enable Pages in:
# Settings → Pages → Source → Deploy from branch → main / root
```

---

## 💬 Testimonials

> *"My assistant picked it up in a single sitting. Registration is now faster than writing in the register. For the first time, I have searchable records for every patient I've ever treated."*
>
> **Dr. Rajesh Kumar** — General Physician, Hyderabad

---

> *"The offline mode is what convinced me. We get power cuts almost every day. The app kept working through every single one. That kind of reliability is non-negotiable for a clinic like mine."*
>
> **Dr. Anita Sharma** — Pediatrician, Bangalore

---

> *"Patients used to crowd the entrance asking when their turn was. Now they get an SMS and come exactly when needed. The waiting room is calmer, my staff is less stressed, and consultations start on time."*
>
> **Dr. Vikash Mishra** — Dentist, Hyderabad

---

## 🗺️ Roadmap

- [x] Landing page with demo request form
- [x] WhatsApp-integrated contact flow
- [x] Mobile-responsive design
- [x] Scroll reveal animations
- [ ] Case Studies section (coming soon)
- [ ] Play Store listing — April 2026
- [ ] Multilingual support (Telugu, Hindi, Kannada)
- [ ] ABDM (Ayushman Bharat Digital Mission) integration
- [ ] Patient-facing self-check-in portal
- [ ] Multi-branch / nursing home dashboard

---

## 📞 Contact

| Channel | Details |
|---------|---------|
| 🌐 Website | [clinicos.care](https://clinic-os-app-launch.vercel.app/) |
| 💬 WhatsApp | [+91-8102213997](https://wa.me/917330937354?text=Hi%2C%20I%27m%20interested%20in%20ClinicOS.%20Can%20we%20talk%3F) |
| 📅 Book a Call | [cal.com/harsh-kumar-ck7ifg/30min](https://calendar.app.google/Ss9BUourZC9SNMAj7) |
| 📍 Location | Vijayawada, India |
| 🏢 Company | ClinicOS Technologies |

---

## 📄 License

© 2026 ClinicOS Technologies. All rights reserved.

- [Privacy Policy](https://clinicos.codingrippler.com/privacy-policy.html)
- [Terms of Use](https://clinicos.codingrippler.com/terms-of-use.html)

---

<div align="center">

Built with ❤️ for Indian clinics

**[🌐 Visit clinicos.care](https://clinic-os-app-launch.vercel.app/) · [💬 WhatsApp Us](https://wa.me/917330937354) · [📅 Book a Demo](https://calendar.app.google/Ss9BUourZC9SNMAj7)**

</div>
