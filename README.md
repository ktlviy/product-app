# Product App

A modern, AAA-quality e-commerce React application featuring a beautiful cyan/white theme, robust product catalog, authentication, and a modular, scalable architecture.

## 🚀 Project Overview

This project is a fully responsive e-commerce app built with best practices in mind. It features a product catalog with advanced filtering, sorting, searching, pagination, and authentication. The UI is designed for AAA-quality, using a custom cyan/white theme and reusable UI components.

## ✨ Features

- **Product Catalog**: Grid display, filtering, sorting, searching, and pagination
- **Authentication**: Firebase-based login/register, context-driven auth state
- **Responsive Design**: Mobile-first, adaptive layouts for all devices
- **Custom UI Components**: Button, Card, Dialog, Input, Pagination, Select, and more
- **State Management**: Zustand for global and local state
- **Error Handling**: User-friendly error and empty states
- **Theming**: Modern cyan/white theme with dark mode support
- **Accessibility**: Semantic HTML and keyboard navigation
- **Performance**: Debounced search, efficient rendering

## 🛠️ Tech Stack

- **React** + **TypeScript**
- **Zustand** (state management)
- **Tailwind CSS** (with custom theme and Typography plugin)
- **Firebase** (authentication)
- **Vite** (build tool)

## 📦 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
3. **Open** [http://localhost:5173](http://localhost:5173) in your browser.

4. **Configure Firebase:**
   - Update `src/lib/firebase.ts` with your Firebase project credentials.

## 🗂️ Project Structure

```
src/
  components/         # UI and feature components
    navbar/           # Navbar and subcomponents
    product/          # Product grid, card, pagination, etc.
    ui/               # Reusable UI primitives
  constants/          # Initial values, validation schemas
  contexts/           # Auth context
  hooks/              # Custom React hooks
  lib/                # Firebase and utilities
  pages/              # Page-level components (Login, Register, Product)
  services/           # API and data fetching logic
  store/              # Zustand stores
  types/              # TypeScript types
  index.css           # Tailwind and custom theme
```

## 🎨 Theming

- Uses a custom cyan/white theme defined in `src/index.css` with CSS variables for easy customization.
- Dark mode supported via `.dark` class.
- All UI components reference these variables for consistent, beautiful design.

## 🧑‍💻 Best Practices

- Modular, maintainable codebase
- Strict TypeScript typing
- Custom hooks for logic reuse
- Responsive and accessible UI
- Error boundaries and user-friendly messages
- Easily extendable for new features
