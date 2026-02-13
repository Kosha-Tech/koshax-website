# KoshaX

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- npm

## Getting Started

1. **Install dependencies**

   ```sh
   npm install
   ```

2. **Set up environment variables**

   Create a `.env` file in the project root:

   ```sh
   VITE_TURNSTILE_SITE_KEY=your_turnstile_site_key
   VITE_WAITLIST_ENDPOINT=your_apps_script_web_app_url
   ```

3. **Run the dev server**

   ```sh
   npm run dev
   ```

   The app will be available at `http://localhost:5173`.

## Other Commands

| Command             | Description                        |
| ------------------- | ---------------------------------- |
| `npm run build`     | Build for production               |
| `npm run preview`   | Preview the production build       |
| `npm run lint`      | Run ESLint                         |

