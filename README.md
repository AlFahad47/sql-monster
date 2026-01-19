# SQL Monster 🐲

🔗 **Live Demo:** [https://sqlmonster.netlify.app](https://sqlmonster.netlify.app)

**SQL Monster** is an interactive, gamified SQL learning platform designed to take users from "Zero to Hero" in database mastery. Through an engaging RPG-style story mode, users interact with characters, solve real-world database problems, and execute SQL queries directly in the browser—no setup required.

## 🚀 Key Features

- **Story Mode Adventure**: Learn SQL concepts by progressing through chapters and levels, engaging in dialogue with characters, and solving challenges to advance the plot.
- **Interactive SQL Console**: Write and execute SQL queries in real-time using an in-browser SQLite engine (powered by `sql.js`).
- **Bilingual Curriculum**: Full support for **English** and **Bengali**, making SQL accessible to a wider audience.
- **Interview Preparation**: A dedicated section to practice common SQL interview questions and challenges.
- **Dynamic Visuals**: interactive result tables, schema exploration, and character interactions.
- **Customizable Experience**: Includes Light/Dark mode and responsive design for learning on any device.
- **Certification**: Earn a certificate upon completing the campaign.

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & `clsx`
- **Database Engine**: [sql.js](https://sql.js.org/) (SQLite compiled to WebAssembly)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## 🏃‍♂️ How to Run Locally

Follow these steps to get the project running on your local machine:

1. **Prerequisites**: Ensure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended).

2. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd sql-monster
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

## 📦 How to Deploy

This project is a static Single Page Application (SPA) and can be easily deployed to platforms like **Netlify**, **Vercel**, or **GitHub Pages**.

### Build for Production
To create an optimized production build:

```bash
npm run build
```
This will generate a `dist` directory containing your static files.

### Netlify Deployment
1. Connect your GitHub repository to Netlify.
2. **Build Command**: `npm run build`
3. **Publish Directory**: `dist`
4. **Important**: The project includes a `public/_redirects` file to handle client-side routing (rewrites all paths to `index.html`), so it works out of the box on Netlify.

### Vercel Deployment
1. Import your project into Vercel.
2. Vercel automatically detects Vite projects and configures the build settings.
3. Deploy!

## 🤝 Contributing

Contributions are welcome! If you find a bug or want to add a new level to the story:

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---
*Level up your data skills with SQL Monster!*
