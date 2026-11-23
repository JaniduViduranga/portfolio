# Janidu Viduranga — Personal Portfolio

A modern, high-performance, and responsive developer portfolio built with **React 19**, **TypeScript**, and **Vite**. Features a midnight obsidian & electric cobalt theme, smooth GPU-accelerated micro-interactions, an interactive project showcase, and a dedicated mobile-optimized horizontal card slider.

---

## 🚀 Live Demo & Preview

* **Portfolio URL:** [janiduviduranga.com](https://www.linkedin.com/in/janiduviduranga/)
* **LinkedIn:** [linkedin.com/in/janiduviduranga](https://www.linkedin.com/in/janiduviduranga/)
* **GitHub:** [github.com/janidu-viduranga](https://github.com/janidu-viduranga)

---

## ✨ Features & Architecture

### 1. **Dynamic Hero Section**
* **Vertical Text Slider:** Fixed `"EXPLORING"` prefix with smooth, GPU-accelerated vertical transitions cycling through core disciplines: *Software Engineering*, *Network Engineering*, and *Data Analytics*.
* **Atmospheric Visuals:** Grounded portrait presentation blended with an early-feathered radial code backdrop, floating particle lights, and an ambient cobalt glow.
* **Quick CTAs & Socials:** Direct jump links to featured projects, contact form, and social channels.

### 2. **About Me & Academic Background**
* **Academic Highlights:** Showcases degree program (*BSc (Hons) in Computing and Information Systems* at *Sabaragamuwa University of Sri Lanka*), core competencies, and career objectives.
* **Responsive Layout:** Scroll-triggered drop-in animation on desktop and a clean, streamlined reading layout on mobile devices.

### 3. **Categorized Technical Skills**
* **6 Domain Categories:**
  * Frontend Development (React, HTML5, CSS3, JavaScript, TypeScript, Bootstrap, Tailwind CSS)
  * Backend Development (Node.js, Express.js, Spring Boot, REST APIs)
  * Programming Languages (Java, C, Python, JavaScript, TypeScript, PHP)
  * Databases & Storage (MySQL, PostgreSQL, MongoDB, Firebase)
  * Networking & Systems (TCP/IP, Routing & Switching, Cisco Packet Tracer, Network Security, Wireshark)
  * Tools & Platforms (Git, GitHub, VS Code, Postman, Figma, Docker)
* **Interactive Skill Badges:** Branded category icons and interactive skill chips with hover depth.

### 4. **Dual-Mode Featured Projects Showcase**
* **Multi-Category Filter:** Instantly filter projects by *All*, *Web Development*, *Network*, *Data Analysis*, and *UI/UX Design* with live count indicators.
* **Desktop View:**
  * 2-column wide project cards per page with pagination controls.
  * Sleek circular arrow navigation buttons (`<` and `>`) positioned in the outer gutters with zero overlap over card content.
* **Mobile View:**
  * Dedicated **1-card horizontal slider** with touch-swipe gestures (`onTouchStart` / `onTouchEnd`).
  * Circular side arrow buttons and active slide indicator dots.
* **Image Lightbox Modal:** Fullscreen zoom popup for project screenshot previews.

### 5. **Contact & Social Connect**
* Interactive contact form with input validation and feedback state.
* Contact cards for email, phone, location, and social media links.
* iOS zoom prevention (`font-size: 16px` on form inputs).

### 6. **Modern Glassmorphic Navigation**
* Floating pill dock with dynamic scroll detection: transparent at page top and frosted glass backdrop blur (`backdrop-filter: blur(16px)`) on scroll.
* Responsive mobile hamburger drawer menu with smooth transition animations.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern UI component hierarchy & hooks |
| **TypeScript** | Strict compile-time type safety & interfaces |
| **Vite 8** | Next-generation frontend tooling and rapid HMR |
| **CSS3 & Design Tokens** | Centralized obsidian & cobalt palette, glassmorphism, responsive media queries |
| **React Icons & FontAwesome** | Branded technology icons and navigation iconography |
| **ESLint 10** | Code quality, consistency, and standard linting |

---

## 📁 Project Structure

```text
portfolio/
├── public/                     # Public static assets & favicon
├── src/
│   ├── assets/                 # Profile images, project screenshots, graphics
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Glassmorphic navigation dock & mobile drawer
│   │   │   └── Footer.tsx      # Footer with brand info, social links, back-to-top
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Hero banner with vertical text slider & portrait
│   │   │   ├── About.tsx       # About narrative & academic card
│   │   │   ├── Skills.tsx      # Categorized technical skill cards
│   │   │   ├── Projects.tsx    # Dual-mode desktop/mobile project showcase
│   │   │   └── Contact.tsx     # Contact form and contact channels
│   │   └── ui/
│   │       ├── ProjectCard.tsx # Reusable project card component
│   │       ├── ProjectModal.tsx# Project image lightbox modal
│   │       ├── SectionHeading.tsx # Section titles with cobalt underline
│   │       └── SkillIcon.tsx   # Dynamic brand icon resolver
│   ├── data/
│   │   └── portfolioData.ts    # Single source of truth for personal data, projects & skills
│   ├── App.tsx                 # Main application layout orchestrator
│   ├── App.css                 # Comprehensive responsive application styling
│   ├── index.css               # Design tokens, typography variables & keyframe animations
│   └── main.tsx                # React DOM entry point
├── package.json                # Project dependencies and script definitions
├── tsconfig.json               # TypeScript compiler configuration
├── vite.config.ts              # Vite configuration
└── README.md                   # Project documentation
```

---

## ⚙️ Getting Started

### Prerequisites
* **Node.js** (v18.0.0 or higher recommended)
* **npm**, **pnpm**, or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/janidu-viduranga/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

### Production Build

* **Compile TypeScript & generate production bundle:**
  ```bash
  npm run build
  ```
  The optimized production output will be generated in the `dist/` directory.

* **Preview the production build locally:**
  ```bash
  npm run preview
  ```

* **Run ESLint checks:**
  ```bash
  npm run lint
  ```

---

## 📝 Customization

All portfolio content, bio information, project items, and social links are centralized in:

* [`src/data/portfolioData.ts`](src/data/portfolioData.ts)

Update the exported `portfolioData` object to modify your personal details, academic background, projects, or skill categories without altering component code.

---

## 👤 Author

**Janidu Viduranga**
* Degree: BSc (Hons) in Computing and Information Systems, Sabaragamuwa University of Sri Lanka
* LinkedIn: [linkedin.com/in/janiduviduranga](https://www.linkedin.com/in/janiduviduranga/)
* Email: [janiduviduranga.dev@gmail.com](mailto:janiduviduranga.dev@gmail.com)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
