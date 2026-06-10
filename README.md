# Cambridge Education Consultants Website

This repository contains the source code for the **Cambridge Education Consultants** official website, built using Next.js, React, Tailwind CSS, and Framer Motion.

## 📁 Repository Structure

- **`nextapp/`**: The main Next.js web application (contains the page routes, layout, styling, and React components).
- **`cambridge_bronchure/`**: Brochures and documents related to the consultancy.
- **`universities/`**: Brochures and images specific to partner universities.
- **`album/`**: Raw photographic assets from student excursions, officials' visits, and office spaces.

## 🛠️ Local Development

To run the web application locally:

1. Navigate to the `nextapp` directory:
   ```bash
   cd nextapp
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Vercel Deployment Settings

Since the Next.js application resides in the `/nextapp` subdirectory, you must configure the **Root Directory** settings on Vercel:

1. Go to your **Vercel Project Settings > General**.
2. Set **Root Directory** to `nextapp`.
3. Save the changes and redeploy.
