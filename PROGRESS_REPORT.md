# Academic Progress Report: Personal Portfolio Website
**Course Project: 50% Completion Milestone**

---

## Student Information
* **Name:** Ricky Richard Takahindangen
* **Department:** Informatics (Cyber Security Concentration)
* **Institution:** President University
* **Location:** Cikarang, West Java, Indonesia

---

## 1. Project Overview

The objective of this project is to design and develop a premium, highly responsive personal portfolio website that showcases academic coursework, technical competencies in cybersecurity and software development, and completed projects. 

### Tools & Technologies Selected
* **Framework:** **Next.js (App Router)**
  * *Rationale:* Next.js provides excellent performance out-of-the-box, with optimized routing, image processing, and server-side capabilities. Using a React-based framework allows for reusable component structures.
* **Programming Language:** **JavaScript (JS)**
  * *Rationale:* Provides the dynamic state handling required for responsive filters, active section tracking, and contact form validation.
* **Styling System:** **Vanilla CSS (globals.css)**
  * *Rationale:* Handcrafted vanilla styles enable complete control over visual parameters, avoiding bulky external dependencies. It allows the implementation of advanced visual features like smooth blueprint grids, blur backdrops (glassmorphism), and curated HSL gradients.
* **Development Environment:** Node.js & npm package ecosystem.
* **Target Environment:** Vercel Hosting Platform & GitHub integration.

---

## 2. Website Structure & Sitemap

The website is designed as a smooth-scrolling Single Page Application (SPA). This layout provides a seamless user experience, keeping content consolidated and easy to navigate on both desktop and mobile devices.

### Navigation Flow
* **Header / Navigation Bar:** Anchored at the top of the viewport. Features smooth scroll triggers to each section. Includes active link underlining and a prominent "Hire Me" call-to-action (CTA).
* **Mobile Interaction:** A collapsible hamburger menu toggle that opens a mobile-optimized drawer overlay on smaller screens.

### Sitemap Layout
```
[Root Viewport]
  ├── Header & Navigation (Fixed)
  │     ├── Logo (RickyRichardDigital)
  │     ├── Menu Links: Home | About | Skills | Projects | Contact
  │     └── Button: Hire Me
  │
  ├── Hero Section (#home)
  │     ├── Status Badge: "Available for Opportunities" (pulsing indicator)
  │     ├── Primary Headline (Introductory statement)
  │     ├── Sub-headline (Core roles: IT Student, Developer, Cyber Security)
  │     ├── Description (Education/focus paragraph)
  │     ├── Call-To-Action Buttons: "View My Work" & "Resume"
  │     ├── Social Media Icon Links (GitHub, LinkedIn, Email)
  │     └── Avatar Box (Visual placeholder card with "<Cyber Security />" badge)
  │
  ├── About Me Section (#about)
  │     ├── Section Title: "Who I Am"
  │     ├── Professional Bio paragraph
  │     ├── Direct Info Icons (Location, Institution, Availability, Competitor status)
  │     ├── Numeric Stats (Projects built, Internships, Certifications)
  │     └── Education timeline card (President University degree outline)
  │
  ├── Skills Section (#skills)
  │     ├── Section Title: "What I Work With"
  │     ├── Category Filter Tabs: All | Frontend | Backend | Security | Languages
  │     └── Skills Grid (Dynamic bars showing name, category tag, and percentage filled)
  │
  ├── Projects Section (#projects)
  │     ├── Section Title: "Things I've Built"
  │     ├── Project Filter Tabs: All | Web App | Security | AI/ML | Tool
  │     └── Project Grid (Visual cards with top tags, graphics, title, bio, tech pills)
  │
  ├── Contact Section (#contact)
  │     ├── Section Title: "Get In Touch"
  │     ├── Connection detail card (Email link, LinkedIn link, physical location)
  │     └── Interactive Form (Name, Email, Subject, Message inputs + submit button)
  │
  └── Footer
        ├── Copyright details
        └── Mirror menu links
```

---

## 3. Content Outline

### About Me Section
* **Bio Content:** Informatics student at President University specializing in Cyber Security with a strong focus on system security, vulnerability assessment, and ethical hacking. Experienced in using security tools and analyzing potential vulnerabilities in web applications. Highly motivated to strengthen cybersecurity skills and contribute to protecting digital systems and infrastructure.
* **Key Metadata:**
  * Location: Cikarang, West Java, Indonesia
  * University: President University (Informatics — Cyber Security)
  * Availability: Full-time / Internship starting 2025
  * Extracurricular: CTF Competitor - Digital Forensics
* **Education Record:**
  * B.S. Informatics — Cyber Security (2024 - Present)
  * President University, Cikarang
  * Core courses: Digital Forensics, Operating Systems, Software Engineering, Numerical Methods.

### Skills Section
* **Frontend Web Development:**
  * React.js / Next.js (82% proficiency)
  * Tailwind CSS (80% proficiency)
* **Backend Systems:**
  * Node.js / Express.js (78% proficiency)
  * PostgreSQL / MySQL (75% proficiency)
* **Security & Digital Forensics:**
  * Wireshark / NetworkMiner (80% proficiency)
  * FTK Imager / Autopsy (78% proficiency)
  * PCAP & Malware Analysis (75% proficiency)
* **Languages:**
  * Python (85% proficiency)
  * JavaScript (80% proficiency)
  * PHP / Laravel (70% proficiency)

### Projects Section
1. **BPOMate AI (Web App / AI)**
   * *Description:* AI-powered BPOM regulatory compliance recommendation system built for PT TUV Nord Indonesia. Automates compliance checks.
   * *Stack:* React, Express.js, PostgreSQL, AI
2. **Web-ISO-Shield (Security / ISO)**
   * *Description:* ISO 27001 audit management platform with dark pastel UI. Enables organizations to track compliance controls and evidence.
   * *Stack:* Next.js, Tailwind CSS, Supabase
3. **Crypto WAF (Security / WAF)**
   * *Description:* Web Application Firewall with cryptographic security layers. Filters malicious traffic and protects against SQL injection, XSS, and common attack vectors.
   * *Stack:* Python, Cryptography, Security
4. **ForensicBERT (AI/ML)**
   * *Description:* AI-based log anomaly detection framework utilizing fine-tuned transformer models to detect forensic indicators and malicious operations.
   * *Stack:* Python, PyTorch, Wireshark
5. **Autopsy-Parser (Tool / EMS)**
   * *Description:* Automated forensic image parser that extracts user activity artifacts and generates timelines from raw disk images.
   * *Stack:* Python, FTK Imager, Autopsy
6. **Cyber-Range (Web App / Live)**
   * *Description:* Interactive gamified CTF cyber range platform built for President University students to practice digital forensics.
   * *Stack:* Next.js, Node.js, Docker

### Contact Section
* **Form Structure:** Handles inputs for sender name, sender email address, message subject, and raw message body.
* **Secondary Details:** Direct email access via `mailto:ricky@example.com` and LinkedIn profile navigation.

---

## 4. Wireframes or Sketches

Below are structural layout representations of the portfolio pages showing the location of content containers and user interface components.

### Home / Hero Layout Wireframe
```
+--------------------------------------------------------------------------+
|  [Logo] RickyRichardDigital             Home  About  Skills  Projects  [Hire] |
+--------------------------------------------------------------------------+
|                                                                          |
|  [Pulse] Available for Opportunities                                     |
|  Hi, I'm Ricky Richard Takahindangen       +--------------------------+  |
|  IT Student · Developer · Cyber Security   |                          |  |
|                                            |     [Photo Placeholder]  |  |
|  Passionate about building secure,         |                          |  |
|  impactful applications...                 |                          |  |
|                                            |                          |  |
|  [View Work]   [Download CV]               |  [<Cyber Security />]    |  |
|                                            +--------------------------+  |
|  (GitHub) (LinkedIn) (Email)                                             |
|                                                                          |
|                                [SCROLL DOWN]                             |
+--------------------------------------------------------------------------+
```

### About & Education Wireframe
```
+--------------------------------------------------------------------------+
|  01 -- About Me / Who I Am                                               |
|                                                                          |
|  [Bio Description Text]                    +------------+  +------------+  |
|  Informatics student specializing in       | 6+ Built   |  | 1 Intern   |  |
|  Cyber Security at President University.   | Projects   |  | Completed  |  |
|  Experienced in security tools...          +------------+  +------------+  |
|                                            | 3+ Certifications          |  |
|  (Location Icon) Cikarang, West Java       +----------------------------+  |
|  (School Icon) President University        +----------------------------+  |
|  (Cal Icon) Available: 2025                | B.S. Informatics - Cyber   |  |
|  (Star Icon) CTF Competitor - Forensics    | President Univ | 2024-Pres |  |
|                                            | Concentration details...   |  |
|                                            +----------------------------+  |
+--------------------------------------------------------------------------+
```

### Skills & Projects Grid Wireframe
```
+--------------------------------------------------------------------------+
|  02 -- Skills / What I Work With                                         |
|  [ All ] [ Frontend ] [ Backend ] [ Security ] [ Languages ]             |
|                                                                          |
|  +------------------------+  +------------------------+                  |
|  | Python            85%  |  | React.js / Next.js 82% |                  |
|  | [============        ] |  | [===========           ] |                  |
|  +------------------------+  +------------------------+                  |
+--------------------------------------------------------------------------+
|  03 -- Projects / Things I've Built                                      |
|  [ All ] [ Web App ] [ Security ] [ AI/ML ] [ Tool ]                     |
|                                                                          |
|  +-------------------+  +-------------------+  +-------------------+     |
|  | [Tag]      [Star] |  | [Tag]      [Star] |  | [Tag]      [Star] |     |
|  |    (Robot SVG)    |  |    (Shield SVG)   |  |     (Lock SVG)    |     |
|  |                   |  |                   |  |                   |     |
|  | BPOMate AI        |  | Web-ISO-Shield    |  | Crypto WAF        |     |
|  | AI-powered BPOM...|  | ISO 27001 audit...|  | Web Application...|     |
|  | [React][Express]  |  | [Next][Tailwind]  |  | [Python][Crypto]  |     |
|  +-------------------+  +-------------------+  +-------------------+     |
+--------------------------------------------------------------------------+
```

---

## 5. References

### Design & Aesthetic Inspiration
1. **Blue Blueprint Grid Hero:** Taken from premium tech start-up dashboards that utilize blue background gradients overlaid with translucent grid patterns to indicate structure, security, and technical engineering.
2. **Glassmorphism:** Sub-elements (like the floating Cyber Security badge and Avatar Card) utilize `backdrop-filter: blur` styling parameters to simulate transparent frosted glass.
3. **Structured Metrics Grid:** Design derived from GitHub statistics dashboards that render clean count stats in rounded cells with light borders.
4. **Custom Progress Cards:** Inspiration drawn from professional portfolio sites that display proficiency using color-coded category tags and sleek, slim progress meters instead of standard circular gauges.

---

## 6. Deployment Planning

The deployment strategy is structured to support continuous integration (CI) and rapid loading times.

### Platform Breakdown
* **Code Repository:** **GitHub**
  * Serves as the primary version control system hosting all Next.js Javascript source code, assets, and project configs.
* **Hosting Platform:** **Vercel**
  * *Why Vercel:* Developed by the creators of Next.js, Vercel offers seamless deployment integration. It detects changes pushed to the primary GitHub branch and automatically compiles, tests, and deploys production builds.
  * *Features:* Global CDN distribution, SSL certificate generation, and Serverless function execution.
* **Secondary Option:** **Netlify**
  * Can be linked to the same GitHub repository if a backup hosting pipeline is required.

### Deployment Process Plan
1. Create a public or private repository on GitHub (e.g., `github.com/ricky/portfolio`).
2. Commit and push the Next.js local codebase:
   ```bash
   git init
   git add .
   git commit -m "Initialize portfolio website"
   git remote add origin <github-repo-url>
   git branch -M main
   git push -u origin main
   ```
3. Connect Vercel to the GitHub account and import the repository.
4. Configure environment settings (Vercel automatically detects Next.js build options: `npm run build` and out folder).
5. Deploy and map to a custom domain (e.g., `rickyrichard.digital`).
