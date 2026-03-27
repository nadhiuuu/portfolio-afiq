# Portfolio Afiq Ilham

A modern, interactive portfolio website showcasing graphic design work by Afiq Ilham. Built with cutting-edge web technologies for a stunning visual experience.

## ✨ Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Animations**: Smooth parallax effects and hover animations using Framer Motion
- **Modern UI**: Dark theme with cyan and fuchsia accents
- **Project Gallery**: Interactive image gallery with modal previews
- **Contact Integration**: Direct links to social media and WhatsApp

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/portfolio-afiq.git
cd portfolio-afiq
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio-afiq/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── sections/            # Page sections
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── project-section.tsx
│   │   └── contact-section.tsx
│   └── ui/                  # Reusable UI components
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
└── public/
    └── images/              # Static assets
        ├── profile3.png     # Profile image
        └── project/         # Project images
```

## 🎨 Customization

### Adding Projects

Add project images to `public/images/project/` and update the `projects` array in `components/sections/project-section.tsx`.

### Changing Colors

Modify the color scheme in the component files or update Tailwind config for global changes.

### Profile Image

Replace `public/images/profile3.png` with your own image.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 📞 Contact

**Afiq Ilham**
- Instagram: [@afiqilhamm](https://instagram.com/afiqilhamm)
- WhatsApp: [+62881026097808](https://wa.me/62881026097808)
- Email: muwafiqilham14@gmail.com

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
