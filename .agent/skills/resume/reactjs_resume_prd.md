# Product Requirements Document (PRD)
**Product Name:** Interactive ReactJS Resume / Portfolio
**Document Version:** 1.0
**Date:** October 2026

## 1. Introduction
The ReactJS Resume is a modern, interactive, and fully responsive web-based resume application. It is designed to showcase professional experience, skills, and projects in a dynamic way, going beyond a traditional static PDF. The application will allow users (visitors, recruiters, hiring managers) to seamlessly navigate through the candidate's profile, download a hard copy, and reach out directly.

## 2. Target Audience
* **Primary:** Recruiters, HR Professionals, and Hiring Managers evaluating the candidate.
* **Secondary:** Fellow developers or designers viewing the portfolio for inspiration or open-source collaboration.

## 3. Goals & Objectives
* **Primary Goal:** To provide a fast, accessible, and visually appealing representation of the candidate's professional background.
* **Business Objective:** Increase interview conversion rates by standing out among standard paper/PDF resumes.
* **Technical Objective:** Demonstrate proficiency in modern frontend web development (ReactJS, component-based architecture, state management, and CSS-in-JS/utility-first CSS).

## 4. Key Features (Functional Requirements)
### 4.1. Core Sections
* **Hero/About Section:** High-impact introduction with name, current role, short bio, professional photo, and social links (LinkedIn, GitHub).
* **Experience Section:** Timeline view of work history, including company names, dates, roles, and bulleted achievements.
* **Education Section:** Academic background, degrees, institutions, and graduation years.
* **Skills Section:** Visual categorization of technical and soft skills (e.g., Frontend, Backend, Tools).
* **Projects/Portfolio Section:** Grid layout of notable projects with thumbnail images, descriptions, tech stack tags, and links to live demos/repositories.
* **Contact Section:** A functional contact form (integrating a service like EmailJS) or direct email links.

### 4.2. Interactive Elements
* **Theme Switcher:** Toggle between Light and Dark mode. User preference should be saved in `localStorage`.
* **Download PDF:** A button that generates and downloads a clean, print-friendly PDF version of the resume.
* **Smooth Scrolling:** Navigation bar links that smoothly anchor to their respective sections on the single page.

## 5. Non-Functional Requirements
* **Performance:** The app must load in under 2 seconds. Images should be optimized and lazy-loaded.
* **Responsiveness:** Must be perfectly readable and usable on mobile devices, tablets, and large desktop screens.
* **Accessibility (a11y):** All UI elements must have appropriate ARIA tags, contrast ratios must meet WCAG standards, and the site must be keyboard navigable.
* **SEO:** Basic SEO tags (title, meta description, Open Graph tags) should be implemented so the resume looks good when shared on social media or messaging apps.

## 6. Technology Stack
* **Frontend Framework:** ReactJS (via Vite for fast bundling, or Next.js for SSR/SEO benefits).
* **Styling:** Tailwind CSS (for rapid, responsive, utility-first styling).
* **Icons:** React Icons or Lucide React.
* **Animations:** Framer Motion (for smooth section reveals and micro-interactions).
* **PDF Generation:** `react-to-print` or `html2pdf.js`.
* **Deployment:** Vercel, Netlify, or GitHub Pages.

## 7. User Flow
1. **Landing:** User arrives at the URL. Sees the Hero section and navigation bar.
2. **Exploration:** User scrolls down or clicks navigation links to view Experience, Skills, and Projects.
3. **Interaction:** User clicks on a project link to view the code, or toggles dark mode to suit their reading preference.
4. **Action:** User clicks "Download Resume" to save a PDF copy for their ATS (Applicant Tracking System).
5. **Contact:** User fills out the contact form at the bottom to schedule an interview.

## 8. Future Enhancements (Post-MVP)
* **Multi-Language Support (i18n):** Option to toggle the resume between English and Indonesian.
* **Headless CMS Integration:** Use Sanity.io or Contentful so the resume data can be updated without touching the React code.
* **Blog Section:** Integrated Markdown-based blog to share technical articles.