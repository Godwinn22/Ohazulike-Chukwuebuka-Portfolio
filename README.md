# Ohazulike Chukwuebuka Godwin - Software Engineer Portfolio.

A modern, respo  nsive developer portfolio built from scratch with React and Vite. Features a clean dark navy design with orange accents, smooth scroll animations, dark/light mode, and a fully functional contact form.

🌐 **Live Site:** [ohazulike-chukwuebuka-portfolio.vercel.app](https://ohazulike-chukwuebuka-portfolio.vercel.app)

---

## Screenshots

> _Add screenshots of your portfolio here_
<img width="2718" height="1562" alt="Macbook-Air-ohazulike-chukwuebuka-portfolio vercel app" src="https://github.com/user-attachments/assets/d9c6ef0a-e1e1-44f3-82d4-61174655e033" />
<img width="2718" height="1562" alt="Macbook-Air-ohazulike-chukwuebuka-portfolio vercel_home_lightmode" src="https://github.com/user-attachments/assets/7759ca5a-8bc2-44a4-8c4d-60e8791d5ea0" />
<img width="2718" height="1562" alt="Macbook-Air-ohazulike-chukwuebuka-portfolio vercel app" src="https://github.com/user-attachments/assets/0e0f158f-a0ca-497d-b494-91aa95231774" />
<img width="2718" height="1562" alt="Macbook-Air-ohazulike-chukwuebuka-portfolio vercel app experience" src="https://github.com/user-attachments/assets/30d602f8-56eb-46bb-a647-cbfbd8da7355" />
<img width="2718" height="1562" alt="Macbook-Air-ohazulike-chukwuebuka-portfolio vercel app" src="https://github.com/user-attachments/assets/265ad6b2-af04-459c-9fdd-11dad019cdfa" />
<img width="788" height="1594" alt="iPhone-12-PRO-ohazulike-chukwuebuka-portfolio vercel app" src="https://github.com/user-attachments/assets/4b4b8e96-968d-4509-a28a-2f27cb450b44" />
<img width="788" height="1594" alt="iPhone-12-PRO-ohazulike-chukwuebuka-portfolio vercel app" src="https://github.com/user-attachments/assets/7949dbaf-2a4d-45dd-b1dd-c35f6989b9ef" />
<img width="788" height="1594" alt="iPhone-12-PRO-ohazulike-chukwuebuka-portfolio vercel app" src="https://github.com/user-attachments/assets/5ceae163-c3af-4288-a62e-5d17e4d9c5f0" />
<img width="788" height="1594" alt="iPhone-12-PRO-ohazulike-chukwuebuka-portfolio vercel app" src="https://github.com/user-attachments/assets/8b653f76-37ec-4ddc-bb38-d647faa1d833" />
<img width="788" height="1594" alt="iPhone-12-PRO-ohazulike-chukwuebuka-portfolio vercel app" src="https://github.com/user-attachments/assets/cd174297-4a31-4035-aa29-66c63b01b43e" />


---

## Features

- **Multi-page layout** — Home, Projects, Experience, Tech Stack and Project Detail pages
- **Fixed sidebar** — Profile card with photo, name, tagline and social links
- **Floating icon navbar** — With tooltips, active state indicators and smooth navigation
- **Dark / Light mode** — Toggle between themes with persistent CSS variable switching
- **Project showcase** — Image carousel with auto-scroll and dot navigation on detail pages
- **Experience timeline** — Visual timeline with orange accent indicators
- **TechStack grid** — Tech stack displayed with official brand icons and colors
- **Contact form** — Fully functional email sending via EmailJS
- **Scroll animations** — Smooth fade-down entrance animations powered by Framer Motion
- **404 page** — Custom not found page with navigation back to home
- **Responsive design** — Mobile-first with sidebar hidden on smaller screens

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React | UI framework |
| Vite | Build tool |
| Tailwind CSS v4 | Styling |
| React Router DOM | Client-side routing |
| Framer Motion | Animations |
| EmailJS | Contact form email sending |
| React Icons | Icon library |
| Cloudinary | Image hosting and optimization |

---

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Sidebar.jsx      # Fixed left profile card
│   ├── Navbar.jsx       # Floating icon navbar
│   ├── ContactForm.jsx  # EmailJS contact form
│   ├── Footer.jsx       # Site footer
│   ├── ExperienceList.jsx  # Reusable experience list
│   └── TechStackList.jsx    # Reusable techstack grid
│
├── pages/               # Page components
│   ├── Home.jsx         # Landing page
│   ├── Projects.jsx     # All projects listing
│   ├── ProjectDetail.jsx # Individual project page
│   ├── Experience.jsx   # Work experience page
│   ├── TechStack.jsx        # Tech stack page
│   └── NotFound.jsx     # 404 page
│
├── data/
│   └── index.js         # All portfolio content in one place
│
├── utils/
│   └── animations.js    # Reusable Framer Motion variants
│
├── App.jsx              # Router and app layout
├── main.jsx             # Entry point
└── index.css            # Global styles and Tailwind theme
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

**1. Clone the repository:**
```bash
git clone https://github.com/Godwinn22/Ohazulike-Chukwuebuka-Portfolio.git
cd Ohazulike-Chukwuebuka-Portfolio
```

**2. Install dependencies:**
```bash
npm install
```

**3. Set up environment variables:**

Create a `.env` file in the root of the project:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> Get these values from your [EmailJS dashboard](https://emailjs.com)

**4. Start the development server:**
```bash
npm run dev
```

**5. Open your browser:**
```
http://localhost:5173
```

---

## Customization

All portfolio content lives in one file — `src/data/index.js`. To make this portfolio your own:

- Update `developerData` with your name, photo, bio and social links
- Update `projectsData` with your real projects, images and URLs
- Update `experienceData` with your work history
- Update `stackData` with your tech stack
- Update `statsData` with your personal stats

---

## Deployment

This project is deployed on **Vercel**.

To deploy your own:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repo
3. Add your environment variables in the Vercel dashboard
4. Click Deploy

Vercel auto-deploys on every push to the main branch.

---

## Environment Variables

| Variable | Description |
|---|---|
| `VITE_EMAILJS_SERVICE_ID` | Your EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | Your EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | Your EmailJS public key |

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Author

**Ohazulike Chukwuebuka Godwin**

- GitHub: [@Godwinn22](https://github.com/Godwinn22)
- Twitter: [@Pandas_Stack](https://x.com/Pandas_Stack)
- LinkedIn: [ohazulike-godwin-linkedin-profile](https://www.linkedin.com/in/ohazulike-godwin)
- Live Portfolio: [ohazulike-chukwuebuka-portfolio.vercel.app](https://ohazulike-chukwuebuka-portfolio.vercel.app)

---
