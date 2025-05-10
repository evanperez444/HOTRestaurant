import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Start the Vite dev server for frontend
const viteProcess = spawn('npx', ['vite', '--config', 'vite.config.local.ts'], {
  stdio: 'inherit',
  shell: true
});

// Start the Express server for backend
const expressProcess = spawn('tsx', ['server/index.ts'], {
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, NODE_ENV: 'development' }
});

// Handle process termination
const cleanup = () => {
  viteProcess.kill();
  expressProcess.kill();
  process.exit();
};

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);