# HOT Restaurant - Local Setup Instructions

Follow these steps to run the project on your local machine:

## 1. Install Dependencies

After downloading and extracting the project, install all dependencies:

```bash
npm install
```

## 2. Update package.json

Add the local development script to your package.json:

```json
"scripts": {
  "dev": "NODE_ENV=development tsx server/index.ts",
  "dev:local": "node local-server.js",
  "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
  "start": "NODE_ENV=production node dist/index.js",
  "check": "tsc",
  "db:push": "drizzle-kit push"
},
```

## 3. Move Images to Public Folder

Ensure all your image files are in the `client/public/images/` directory with the following names:
- HOTbanner.jpg
- hot.jpg
- steak.jpg
- burger.jpg
- corndog.jpg
- mac.jpg
- meatball.jpg
- pie.jpg

## 4. Start the Development Server

Run the local development script:

```bash
npm run dev:local
```

This will start both the Vite frontend server and the Express backend server.

## 5. Alternative Method (if local-server.js doesn't work)

If you encounter any issues with the combined server approach, you can run the frontend and backend separately:

Terminal 1 (Frontend):
```bash
npx vite --config vite.config.local.ts
```

Terminal 2 (Backend):
```bash
NODE_ENV=development tsx server/index.ts
```

## Common Issues and Solutions

### Issue: Error with import.meta.dirname
If you see an error related to `import.meta.dirname`, make sure you're using the local configuration file (vite.config.local.ts).

### Issue: Images not loading
Verify that images are placed in the correct directory and have the right filenames.

### Issue: Port conflicts
If you have port conflicts, you can modify the port in the server/index.ts file.