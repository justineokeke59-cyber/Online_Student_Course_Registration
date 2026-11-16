# CampusEnroll — Online Student Course Registration System

A responsive student course registration web application built with React JS and Vite for the New Horizon React JS practical project.

## Features

- Home, About, Courses, Registration and Contact pages
- Client-side navigation with React Router
- Reusable course cards rendered with JavaScript `.map()`
- Course search and department filtering
- Course selection and registration summary
- Controlled registration form with required-field and email validation
- Contact form with success feedback
- React `useState` and `useEffect`
- Responsive layout for mobile, tablet and desktop
- Registration data saved in the browser's local storage

## Technologies Used

- React JS
- JavaScript (ES6+)
- React Router DOM
- HTML5
- CSS3
- Vite

## Installation

1. Install Node.js on your computer.
2. Download or clone this repository.
3. Open the project folder in Visual Studio Code.
4. Open the terminal in the project folder.
5. Install dependencies:

   ```bash
   npm install
   ```

6. Start the development server:

   ```bash
   npm run dev
   ```

7. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Production Build

```bash
npm run build
npm run preview
```

The production files are generated in the `dist` folder.

## GitHub Upload

Create a repository on GitHub, then run these commands from the project folder:

```bash
git init
git add .
git commit -m "Build CampusEnroll React application"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Do not upload `node_modules`. It is already excluded by `.gitignore`.

## Deployment

The project can be deployed using Netlify or Vercel. Use the following settings:

- Build command: `npm run build`
- Publish directory: `dist`

For a React Router single-page application, configure the hosting platform to redirect unknown routes to `/index.html`.

## Important Note

This is a front-end demonstration project. Registration and contact submissions are stored locally in the browser or shown as interface feedback. A real institution would need a secure backend, database, authentication and server-side validation before using it for official student records.

## Project Structure

```text
online-student-course-registration/
├── public/
├── src/
│   ├── components/
│   │   ├── CourseCard.jsx
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── data/
│   │   └── courses.js
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Courses.jsx
│   │   ├── Home.jsx
│   │   └── Registration.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── index.html
├── package.json
└── README.md
```
