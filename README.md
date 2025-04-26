# Social-Media-Assistant
A web-based tool built with Next.js, FastAPI and Langchain that assists you with posting on social media platforms.

## Project Structure

```plaintext
frontend/
 ├── components/
 │    ├── IdeaInput.tsx
 │    ├── IdeaList.tsx
 │    └── RefinedPost.tsx
 ├── pages/
 │    └── index.tsx
 ├── styles/
 ├── tsconfig.json
 ├── tailwind.config.js
 └── package.json
```

# Social Post Assistant - Frontend

This is the frontend UI built with **Next.js** + **TypeScript** + **TailwindCSS**.
It connects to a backend (FastAPI + LangChain + Ollama) to generate and refine post ideas for social media.

## Prerequisites

- Node.js (v20.11.0 or higher recommended)
- npm (v10.7.0 or higher recommended)

1. **Install Node.js (v20.11.0)**
We recommend using `nvm` (Node Version Manager):

```bash
# Install nvm (if not installed)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Restart terminal or run:
source ~/.nvm/nvm.sh

# Install and use Node.js
nvm install 20.11.0
nvm use 20.11.0

Note: Installing Node.js via nvm also installs the matching npm version automatically.
You can verify:

bash
Copy
Edit
node -v  # Should print v20.11.0
npm -v   # Should print npm version, e.g., 10.x.x

## Setup Instructions

2. **Navigate to the frontend folder:**

```bash
cd frontend
```

3. **Install dependencies:**

```bash
npm install
```

4. **Run the development server:**

```bash
npm run dev
```

5. **Open your browser:**

Visit [http://localhost:3000](http://localhost:3000) to use the app.


## Notes
- TailwindCSS is used for styling.
