# Netflix Clone (React + Vite)

Short overview
This is a Netflix-inspired clone built with React and Vite that demonstrates a modern front-end architecture with Firebase authentication and dynamic movie data from the TMDB API. It includes responsive UI components, a trailer player, authentication flows, and reusable components to explore common production patterns.

Live demo

- Live: https://netflix-clone-752mqgfvv-rakib-hassan-nayems-projects.vercel.app/

Description

- A lightweight Netflix-like web app showcasing: dynamic movie listings (via TMDB), authenticated user flows (Firebase), movie trailers (YouTube embed), and a responsive UI designed to mimic Netflix styling and behavior.

Main technologies

- React 19
- Vite
- Firebase (Authentication + Firestore)
- The Movie Database (TMDB) API
- React Router
- React Toastify
- CSS3 (custom responsive styles)

Main features

- Firebase email/password signup and login
- Protected routes and simple auth-state redirection
- Dynamic movie lists fetched from TMDB (multiple categories)
- Horizontal scrollable title cards with wheel-to-scroll behavior
- Trailer player using YouTube embeds
- Toast notifications for auth errors
- Responsive navbar, footer and layout components

Dependencies (from package.json)

- firebase
- react
- react-dom
- react-firebase-hooks
- react-router-dom
- react-toastify

Dev dependencies

- vite
- @vitejs/plugin-react
- eslint and tooling (if linting is used)

Required environment variables
Create a .env file at the project root with the following (example names used in the code):
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_TMDB_API_KEY=your_tmdb_bearer_token_or_api_key

Note: TMDB requests in this project use an Authorization Bearer header. Use the correct token format from TMDB.

How to run locally

1. Clone the repo
   git clone <repo-url>
2. Install dependencies
   cd "d:\Projects\React Projects\Netflix-clone" || cd ./netflix-clone
   npm install
3. Add environment variables
   - Create a .env file with the keys listed above.
4. Start development server
   npm run dev
5. Open the app
   - Visit the printed vite URL (usually http://localhost:5173)

Build and preview

- Build: npm run build
- Preview production build: npm run preview

Firebase & TMDB setup

- Firebase: create a project in Firebase console, enable Email/Password authentication and Firestore. Add the config values to the .env file.
- TMDB: create an account, generate an API key (or v4 token for Bearer auth) and set VITE_TMDB_API_KEY.

Deployment suggestions

- Deploy to Netlify, Vercel or Firebase Hosting. Make sure to set environment variables in the hosting provider dashboard.

Useful links

- TMDB API: https://developers.themoviedb.org/
- Firebase: https://firebase.google.com/
- Vite: https://vitejs.dev/
- React: https://reactjs.org/

Credits

- Built as a learning / demo project to practice React, Vite, Firebase auth, and API integration. Replace live link and repo URL placeholders with actual links.
