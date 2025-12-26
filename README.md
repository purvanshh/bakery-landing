# 🥐 Artisan Bakery Landing Page

A premium, modern landing page for an artisan bakery built with React 19, featuring stunning 3D visuals, smooth animations, and an elegant design aesthetic.

![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat&logo=react)
![Three.js](https://img.shields.io/badge/Three.js-0.182.0-000000?style=flat&logo=three.js)
![GSAP](https://img.shields.io/badge/GSAP-3.14.2-88CE02?style=flat&logo=greensock)

## ✨ Features

- **3D Floating Bread Animation** - Immersive Three.js-powered 3D bread model with smooth floating animation
- **Gooey Text Morphing** - Eye-catching SVG filter-based text animations
- **Smooth Scroll Animations** - GSAP-powered entrance animations with reduced motion support
- **Responsive Design** - Fully responsive layout that looks great on all devices
- **Modern Grid Background** - Subtle animated grid pattern for visual depth
- **Premium UI Components** - Carefully crafted buttons, cards, and interactive elements

## 🏗️ Project Structure

```
bakery-landing/
├── public/
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   └── FloatingBread3D.js    # Three.js 3D bread component
│   │   ├── sections/
│   │   │   ├── Hero.js               # Hero section with CTA
│   │   │   ├── Menu.js               # Menu showcase
│   │   │   ├── OurStory.js           # About/story section
│   │   │   ├── Contact.js            # Contact information
│   │   │   └── Footer.js             # Site footer
│   │   ├── shared/
│   │   │   └── GridBackground.js     # Animated grid background
│   │   └── ui/
│   │       └── GooeyTextMorph.js     # Text morphing animation
│   ├── App.js
│   ├── App.css
│   └── index.css                     # Global styles & CSS variables
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/purvanshh/bakery-landing.git
   cd bakery-landing
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI Framework |
| **Three.js** | 3D Graphics |
| **@react-three/fiber** | React renderer for Three.js |
| **@react-three/drei** | Useful helpers for React Three Fiber |
| **GSAP** | Animation library |
| **Lucide React** | Icon library |

## 🎨 Design System

### Color Palette

- **Cream Background**: `#FDF8F3`
- **Honey Accent**: `#C4A35A`
- **Deep Brown**: `#2D1810`
- **Warm Brown**: `#5C3D2E`
- **Crust**: `#8B5E3C`

### Typography

- **Headings**: Playfair Display (Serif)
- **Body**: Inter (Sans-serif)

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs development server on port 3000 |
| `npm run build` | Creates production build in `build/` folder |
| `npm test` | Launches test runner |
| `npm run eject` | Ejects from Create React App |

## 🌐 Sections

1. **Hero** - Main landing section with 3D bread, animated text, and CTAs
2. **Menu** - Showcase of bakery items with beautiful cards
3. **Our Story** - Brand story and values
4. **Contact** - Location and contact information
5. **Footer** - Site navigation and social links

## ♿ Accessibility

- Respects `prefers-reduced-motion` for users who prefer less animation
- Semantic HTML structure
- Proper heading hierarchy
- Accessible color contrast ratios

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Purvansh**
- GitHub: [@purvanshh](https://github.com/purvanshh)

---

<p align="center">Made with ❤️ and lots of 🥖</p>
