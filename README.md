# 🚀 React + Tailwind Landing Page Developer Test

## 📌 Overview

You are given a **React + Tailwind CSS landing page project**.

Your task is to improve the UI, build a new section, and add one interactive feature while maintaining production-level quality.

**This is design:**
```
https://github.com/accurasofthire/landingpage-frontend/blob/main/why_choose_us.png
```

This test evaluates:
- React skills
- Tailwind CSS ability
- UI/UX thinking
- Code structure
- Clean development practices

---

## 🎯 Tasks

## 1️⃣ Build New Section: “Why Choose Us”

### 📍 Placement
Add this section between:
- “Our Most in Demand Service”
- “Case Studies”

---

### 🧩 Requirements

#### Layout
- Responsive grid (1 column mobile / 2 tablet / 4 desktop)
- Centered heading

---

### 📦 Data
```js
const features = [
  {
    title: "Senior Engineers",
    desc: "Top 5% vetted developers with real production experience"
  },
  {
    title: "Fast Delivery",
    desc: "Rapid execution with optimized workflows"
  },
  {
    title: "Scalable Teams",
    desc: "Easily scale teams based on project needs"
  },
  {
    title: "Secure by Design",
    desc: "Security-first architecture and implementation"
  }
];
```

# ⚙️ 2️⃣ Task: Interactive Functionality (Choose ONE)

## 🎯 Overview

You must implement **ONE interactive feature** from the options below using React.

Focus on:
- State management
- UI behavior
- Clean UX
- Component structure

---

## 🔷 Option A — Case Studies Filter (Recommended)

### 🎯 Goal
Add filtering functionality to the Case Studies section.

---

### 🏷️ Filters
- All
- Web
- Mobile
- AI
- Blockchain

---

### 🧩 Requirements
- Use React `useState`
- Filter case study cards dynamically
- Active filter button must be visually highlighted
- Smooth UI transition when switching filters
- Maintain responsive layout

---

### ⭐ Bonus
- Show empty state when no results found
- Add fade/slide animation during filtering

---

## 🔷 Option B — Contact Form Validation

### 🎯 Goal
Improve contact form usability with validation.

---

### 🧩 Requirements
- Validate required fields:
  - Name
  - Email
  - Message
- Email format validation
- Show inline error messages under fields
- Prevent form submission if invalid
- Show success message on valid submit (mock only)

---

### ⭐ Bonus
- Disable submit button when form is invalid
- Add loading state on submit
- Improve focus/hover UX

---

## 🔷 Option C — Pricing Toggle System

### 🎯 Goal
Create a dynamic pricing switch between plans.

---

### 🧩 Requirements
- Toggle between:
  - Monthly
  - Yearly
- Dynamically update pricing values
- Highlight active selection
- Show savings badge for yearly plan

---

### ⭐ Bonus
- Animate price change smoothly
- Persist selection in `localStorage`
- Add hover interactions on pricing cards

---

## 🧠 Evaluation Focus

We will evaluate:
- React state handling
- UI/UX behavior
- Clean component design
- Code readability
- User experience quality

# 📱 3️⃣ Responsive Design Requirements

## 🎯 Goal
Ensure the entire application is fully responsive and works smoothly across all devices.

---

## 📏 Breakpoints

- Mobile: `320px+`
- Tablet: `768px+`
- Desktop: `1024px+`

---

## 🧩 Requirements

### ✅ Layout
- Fully responsive design across all sections
- No horizontal scrolling on any screen size
- No overlapping elements

---

### ✅ Mobile Experience
- Touch-friendly buttons and interactions
- Proper spacing for small screens
- Readable typography without zooming

---

### ✅ Tablet Experience
- Balanced grid layouts (avoid overly compressed UI)
- Proper alignment and spacing

---

### ✅ Desktop Experience
- Full grid layouts
- Proper content width constraints (`max-w-*`)
- Balanced whitespace usage

---

### ⭐ UI Consistency
- Maintain same design language across all breakpoints
- Preserve visual hierarchy
- Keep animations consistent across devices

---

# 🧠 4️⃣ Code Quality Rules

## 🎯 Goal
Write clean, maintainable, and scalable React code.

---

## 🧩 Requirements

### ⚛️ React Best Practices
- Use **functional components only**
- Use **React hooks only** (`useState`, `useEffect`, etc.)
- Avoid class components

---

### 🧱 Component Structure
- Break UI into reusable components
- Avoid large monolithic components
- Follow logical folder structure

---

### 🧼 Code Cleanliness
- Avoid duplicated JSX
- Keep components small and readable
- Use meaningful variable and function names

---

### 📦 State Management
- Keep state minimal and scoped properly
- Avoid unnecessary global state
- Lift state only when needed

---

### 🚫 Avoid
- Inline styles (prefer Tailwind CSS)
- Unused dependencies
- Hardcoded repeated UI blocks
- Over-engineering simple features

---

## 🧪 Evaluation Focus

We will evaluate:
- Responsiveness quality
- UI consistency across devices
- Component reusability
- Code readability
- Clean architecture
