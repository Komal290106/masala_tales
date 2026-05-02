#  The Masala Tales

<p align="center">
  <img src="https://github.com/user-attachments/assets/50d4a4d9-16f3-43fb-8ada-86c97dae5c6e" alt="The Masala Tales Preview" width="100%" />
</p>

<p align="center">
  A premium fine-dining Indian restaurant website — built to tell the story of Chef Vipul Sharma's culinary vision in Ferozepur, Punjab.
</p>

<p align="center">
  <a href="https://masala-tales.vercel.app/">
    <img src="https://img.shields.io/badge/Live-Demo-orange?style=for-the-badge" alt="Live Demo" />
  </a>
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react" alt="React 18" />
  <img src="https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License" />
  </a>
</p>

---

## ✨ About

**The Masala Tales** is a full-featured restaurant website for a fine-dining Indian establishment based in Ferozepur, Punjab. It presents the restaurant's complete identity — its menu, chef, events, reviews, and table booking — through a rich, dark-gold aesthetic paired with smooth animations.

The site reflects the brand philosophy: *every dish is a story*. From Chef Vipul Sharma's signature tasting menus to live Bollywood dinner nights, the experience is designed to feel luxurious before guests even walk through the door.

---

## 🗂️ Pages

| Page | Description |
|---|---|
| `/` | Home — Hero, Featured Menu, Chef Intro, Events Slider, Menu Categories, Instagram Feed |
| `/menu` | Full menu across 6 categories with dish cards and pricing in INR |
| `/about` | Restaurant story, Chef profile, timeline, awards, location & hours, guest reviews |
| `/book` | Interactive table reservation form with local storage persistence |

---

## 🚀 Features

- **Multi-page SPA** with React Router v7 — Home, Menu, About, and Book Table pages
- **Dynamic Menu** — 6 categories: Appetizers, Veg & Non-Veg Mains, Breads, Desserts, Beverages — all priced in INR
- **Chef's Specials** — highlighted dishes with isSpecial badges
- **Events Slider** — upcoming experiences like Tandoori Nights and Bollywood Dinner Shows
- **Table Reservation System** — form with validation; reservations persisted via localStorage and shown on revisit
- **Customer Reviews** — star-rated testimonials displayed on the About page
- **Instagram Feed Section** — showcases restaurant's latest visual content
- **Framer Motion Animations** — entrance animations, scroll-triggered reveals, and hover effects throughout
- **Responsive Design** — mobile-first layout, works seamlessly across all screen sizes
- **Floating CTA** — persistent reserve-a-table button for quick conversion

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Routing | React Router DOM v7 |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Build Tool | Vite 5 |
| Linting | ESLint 9 + TypeScript-ESLint |
| Deployment | Vercel |

---

## 📁 Project Structure

```
src/
├── assets/              # Local image assets (image1.png – image10.png)
├── components/
│   ├── booking/         # ReservationForm
│   ├── common/          # FloatingCTA
│   ├── home/            # HeroSection, FeaturedMenu, ChefIntro, EventsSlider,
│   │                    # MenuCategories, InstagramFeed
│   ├── layout/          # Navbar, Footer
│   └── menu/            # DishCard
├── data/
│   └── mockData.ts      # Menu items, categories, events, reviews
├── pages/
│   ├── Home.tsx
│   ├── Menu.tsx
│   ├── About.tsx
│   └── BookTable.tsx
├── types/
│   └── index.ts         # Dish, MenuCategory, Event, Review, Reservation types
├── App.tsx
├── main.tsx
└── index.css
```

---

## ⚡ Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/the-masala-tales.git
cd the-masala-tales

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Other Scripts

```bash
npm run build     # Production build
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

---

## 🌐 Deployment

The project is deployed on **Vercel**. To deploy your own instance:

1. Push the repo to GitHub
2. Import the project at [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite — no configuration needed
4. Set the root directory to `project/` if your repo includes the outer `masala_tales/` folder

---

## 📸 Restaurant Details

| | |
|---|---|
| **Chef** | Vipul Sharma |
| **Location** | Anil Baghi Road, Model Town, Ferozepur, Punjab 152001 |
| **Hours** | Mon–Sat: 12:30 PM – 10:45 PM · Sun: 12:30 PM – 11:00 PM |
| **Instagram** | [@themasalatales](https://instagram.com) |

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ and a lot of masala ·Komal Kaur Dhillon </p>
