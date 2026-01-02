# MAAWAABRO - Career Guidance & Government Tech Platform

![Project Status](https://img.shields.io/badge/Status-Development-emerald?style=flat-square)
![Tech Stack](https://img.shields.io/badge/Stack-React_|_Tailwind_|_Framer_Motion-blue?style=flat-square)

A high-performance, aesthetically pleasing platform designed to connect individuals with career guidance, government exam systems (OTRAS), and end-to-end startup support. Built with a focus on fluid animations, accessibility, and a strict "Light Mode" professional aesthetic.

## 🚀 Features

* **Modular Architecture**: Scalable folder structure separating Pages, Components, and Data.
* **OTRAS Platform Showcase**: Digital government exam processing system details.
* **Startup Support Flow**: Interactive 6-step roadmap animation for founders (including Marketing & Branding).
* **Smooth Scroll**: Integrated `Lenis` for a luxurious scrolling experience.
* **Interactive UI**:
    * Glassmorphism navigation and overlays.
    * Infinite horizontal scrolling for resource blogs.
    * Staggered reveal animations using `Framer Motion`.
* **Contact System**: Simulated API with instant feedback notifications.
* **Typography**: Premium pairing of *Playfair Display* (Headings) and *Plus Jakarta Sans* (Body).

## 🛠️ Tech Stack

* **Framework**: [React](https://react.dev/) (Vite)
* **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
* **Animations**: [Framer Motion](https://www.framer.com/motion/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Routing**: [React Router DOM](https://reactrouter.com/)
* **Smooth Scroll**: [@studio-freight/lenis](https://github.com/darkroomengineering/lenis)

## 📂 Project Structure

```text
src/
├── components/      # Reusable UI parts (Layout, Navbar, Footer, SectionHeader)
├── data/            # Static content config (constants.js)
├── pages/           # Individual Route Views (Home, Products, Startup, etc.)
├── App.jsx          # Main Routing Logic
├── main.jsx         # Entry Point
└── index.css        # Global Styles & Typography

# CareerGuidance

A modern web application focused on career guidance, content delivery, and community engagement. Built with a clean UI, configurable content, and environment-based integrations.

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the repository
```bash
git clone https://github.com/OTRAS832/CareerGuidance.git
cd CareerGuidance
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment configuration

Create a `.env` file in the root directory and define the following variables.

> If not set, the application falls back to placeholder (`#`) links.

```env
VITE_WHATSAPP_LINK=https://chat.whatsapp.com/your-invite-code
VITE_YOUTUBE_LINK=https://youtube.com/@maawaabro
VITE_TWITTER_LINK=https://twitter.com/maawaabro
VITE_EMAIL_SERVICE_ID=your_emailjs_service_id
VITE_API_ENDPOINT=https://api.yourdomain.com/v1
```

### 4. Run development server
```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 🎨 Customization

- **Fonts**  
  Uses **Playfair Display** and **Plus Jakarta Sans**.  
  Modify `@import` statements and `:root` variables in `src/index.css`.

- **Colors**  
  - Primary text: `slate-900`  
  - Accent: `emerald-600`  
  - Trust highlight: `blue-600`

- **Content**  
  Update text, links, and blog data in `src/data/constants.js` without modifying component logic.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See the `LICENSE` file for details.

---

<p align="center">Built with precision in India 🇮🇳 by Maawaabro IT Solutions.</p>