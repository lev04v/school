# 🏫 Horizon Academy — Senior Secondary CBSE School

A premium, responsive, and accessible institutional website for **Horizon Academy**, designed for modern CBSE (10+2) schools. Built with **React 19**, **Vite**, **TypeScript**, and a customized heritage design system.

---

## 🎨 Curated Heritage 5-Color Palette

The entire user interface strictly adheres to an elegant and sophisticated 5-color palette:

| Role | Color Name | Hex Code | Purpose |
|---|---|---|---|
| **Primary Background** | Warm Cream | `#F5E6D3` | Dominant page canvases, pill containers, section highlights |
| **Secondary Background** | Soft Ivory | `#FDF8F2` | Card backgrounds, alternating bands, modal surfaces |
| **Primary Accent** | Deep Brown | `#78350F` | Headings, serif titles, primary CTA buttons, active states |
| **Secondary Accent** | Muted Gold | `#D6A76F` | Card borders, icons, date pills, micro-details |
| **Primary Text & Contrast** | Deep Navy | `#1F2937` | High-contrast body copy, navbar, footers, status pills |

---

## ✨ Features & Architecture

### 1. 🏛️ Multi-Page Campus Experience
* **Home Campus:** Interactive hero slider, live announcement ticker, Director & Principal desk messages, academic distinction metrics, and interactive virtual campus preview.
* **About Us:** School heritage timeline, founder vision manifesto, board of trustees, leadership profiles, and CBSE SARAS mandatory disclosures.
* **Academics:** Comprehensive Senior Secondary stream explorer (Science, Commerce, Humanities), curriculum pedagogy, board exam distinctions, and faculty profiles.
* **Campus Life:** Smart digital classrooms, Atal Tinkering Labs (ATL STEM & Robotics), sports arena, performing arts studios, and student house system.
* **Admissions (2026–27):** Age eligibility matrix, fee structure breakdown, transfer certificate (TC) verification portal, and an interactive **"Apply Now"** enquiry modal.
* **News & Events:** 
  - **Full Session Academic Calendar (60 Events):** Authentic CBSE schedule covering all national holidays, gazetted festival vacations, periodic tests (PT-1, PT-2), half-yearly examinations, pre-board exams, AISSE/AISSCE board dates, and PTMs.
  - **Milestones Spotlight:** Sleek, compact spotlight cards with high contrast and zero blank space.
  - **Interactive 4-Event Pagination:** Default 4 events shown initially with expandable **"View More Events"** and **"Show Less"** collapse controls.
  - **Digital Notice Archive:** Categorized search and tabular listing of official circulars and downloadable notices.
  - **Direct Navbar Navigation:** Dropdown menu in both desktop navbar and mobile drawer for one-click jump to calendar sections.
* **Gallery:** Categorized photo showcase of school campus, athletic meets, science expos, and cultural fests.
* **Contact & Visit:** Campus maps, enquiry contact form, transport route details, and social channels.

---

## 📁 Workspace Structure

This repository is organized as a lightweight pnpm monorepo:

```text
├── apps/
│   ├── web/                     # Frontend React 19 + Vite application
│   │   ├── public/              # Static assets, images, favicons
│   │   ├── src/
│   │   │   ├── components/      # Reusable UI components (Header, Footer, Modals, etc.)
│   │   │   ├── pages/           # Page views (Home, About, Academics, CircularsEvents, etc.)
│   │   │   ├── styles/          # index.css and theme styling
│   │   │   ├── App.tsx          # Client-side router and smooth page transitions
│   │   │   └── main.tsx         # Application entrypoint
│   │   ├── package.json
│   │   └── vercel.json          # Vercel deployment configuration for subfolder
│   └── api/                     # Backend API service (Express / Node.js)
├── .github/
│   └── workflows/
│       └── deploy.yml           # Automatic GitHub Actions deployment to Vercel
├── vercel.json                  # Root Vercel build & routing configuration
├── pnpm-workspace.yaml          # Monorepo workspace configuration
├── package.json                 # Root package scripts
└── README.md                    # Project documentation
```

---

## 🚀 Running Locally

### Prerequisites
* **Node.js**: `v18.0.0` or higher (Recommended: `v20.x`)
* **pnpm**: `v9.0.0` or higher (`corepack enable && corepack prepare pnpm@latest --activate`)

### Installation & Launch

```bash
# 1. Clone the repository
git clone https://github.com/lev04v/school.git
cd school

# 2. Install monorepo dependencies
pnpm install

# 3. Start development server
pnpm dev

# 4. Open in browser
# Frontend runs on: http://localhost:5173
# Backend runs on:  http://localhost:4000
```

### Production Build Verification

```bash
# Verify typecheck and production bundle build
pnpm --filter @school/web build
```

---

## ⚡ Free Automatic Vercel Deployment (Without Pro/Paid Plan)

Agar Vercel par push karne ke baad **"Upgrade to Pro"** ya **"Premium"** mang raha hai, to uski wajah yeh hoti hai ki Vercel team/organization account detect karta hai ya monorepo directory configure nahi hoti. 

Isko **100% Free (Hobby Plan)** par chalane ke do aasan tareeqe niche diye gaye hain:

### Option 1: Direct Vercel Git Integration (Zero Setup)
Repository me root level aur `apps/web/` dono jagah `vercel.json` pehle se configure kar diya gaya hai.

1. **[vercel.com](https://vercel.com/)** par apne **Personal Account** (Free Hobby plan) se login karein (agar Team account select hai to top-left se apna personal account chunein).
2. **"Add New..."** → **"Project"** par click karein aur `lev04v/school` repository import karein.
3. Configure settings:
   - **Framework Preset:** `Vite`
   - **Root Directory:** `./` (ya `apps/web`)
   - **Build Command:** `pnpm --filter @school/web build`
   - **Output Directory:** `apps/web/dist`
4. **Deploy** par click karein.
5. Iske baad jab bhi aap `git push origin main` karenge, Vercel automatic build aur deploy kar dega bina kisi subscription ke.

---

### Option 2: Automatic GitHub Actions CI/CD (Bypasses Vercel Pro Prompt)
Humne repository me `.github/workflows/deploy.yml` add kar diya hai jo GitHub ke free server par build karke Vercel par push karta hai:

1. Apne Vercel dashboard par jayein: **Settings → Tokens** → **Create Token** (Name: `GITHUB_ACTIONS`).
2. Apne GitHub repo par jayein: **Settings → Secrets and variables → Actions** → **New repository secret**.
3. Secret add karein:
   - **Name:** `VERCEL_TOKEN`
   - **Value:** *(Aapka copy kiya hua Vercel Token)*
4. Bas! Ab jab bhi aap code push karenge, GitHub Actions automatic test, build aur deploy kar dega.

---

## 📜 License & Compliance

Designed and maintained for **Horizon Academy Senior Secondary School**. CBSE affiliation compliant under CBSE Bye-Laws & SARAS standard disclosures.