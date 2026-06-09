# Cambridge Education Consultants — Device Compatibility & Responsiveness Report

The website is built with a **Mobile-First Responsive Design** paradigm, ensuring that layouts, font sizes, interactive elements, and images dynamically adjust across all viewports:
* **Mobile Viewports** (320px – 480px)
* **Tablets & Small Viewports** (481px – 1023px)
* **Laptops & Standard Desktops** (1024px – 1440px)
* **Large Monitors & Ultra-Wide Screens** (1441px+)

---

## 📱 Viewport-Specific Optimizations

### 1. Mobile & Touch Screen Viewports (320px – 480px)
* **Collapsible Mobile Menu**: Desktop navigation links are hidden. A hamburger toggle icon opens a responsive slide-out drawer overlay (`mobile-nav-drawer`). Sub-menus are grouped inside accordions with custom chevron expansion triggers.
* **Touch-Optimized Call-to-Actions (CTAs)**:
  * CTA buttons expand to full container width (`w-full`) to allow easy thumb-tap targets.
  * Stacked calling hotlines and glowing WhatsApp floating widgets are locked at the bottom-right corner (`w-14 h-14` size) with high clickability.
* **Stacking Grids**: Two-column and multi-column grids collapse to a single column (`grid-cols-1`) with comfortable padding to prevent text wrapping issues.
* **Fluid Containers**: Custom wrapper padding reduces to `px-4` on mobile to maximize horizontal screen real estate.

### 2. Tablet Viewports (481px – 1023px)
* **Responsive Column Scaling**:
  * Hero sections stack vertically, with student stats cards scaling into two-column rows.
  * Country sliders use native horizontal swipe scrollbars (`overflow-x-auto`) for tactile finger sliding gestures.
  * Footer layout transitions dynamically into a balanced 2-column grid (`md:grid-cols-2`).
* **Intermediate Typographies**: Headlines and sub-headings scale down proportionally using Tailwind responsive size modifiers (e.g. `text-3xl md:text-5xl lg:text-7xl`) to avoid text overlaps.

### 3. Desktop & Large Screens (1024px+)
* **Full Navigation Bar**: Shows the complete top navbar with dropdown menus containing high-definition circular flags from FlagCDN.
* **Side-by-Side Content Layouts**:
  * Multi-column cards and timeline paths display fully in horizontal columns.
  * Pages use sticky sidebars for registration forms (`lg:col-span-3` content and `lg:col-span-1` sticky sidebar blocks) to capture leads as the user scrolls.

---

## 🛠️ Responsive Coding Practices in the Codebase

### 1. Responsive CSS Breakdown
All sections use fluid Tailwind grid-fraction structures:
```typescript
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
```
* **Mobile**: 1 column (`grid-cols-1`)
* **Tablet**: 2 columns (`md:grid-cols-2`)
* **Desktop**: 3 columns (`lg:grid-cols-3`)

### 2. Proportional Image Handling
All images use Next.js responsive size arrays to prevent downloading oversized files on mobile devices, ensuring fast loading and saving mobile data:
```typescript
sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
```

### 3. Container Rules
The global wrapper `.container-custom` guarantees that the site maxes out at a standard readable width of `1280px` on ultra-wide monitors, centering content automatically.
