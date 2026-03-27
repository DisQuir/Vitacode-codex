import { spawn } from 'node:child_process';
import path from 'node:path';

const root = process.cwd();
const viteEntry = path.join(root, 'node_modules', 'vite', 'bin', 'vite.js');
const nodeExec = process.execPath;

const server = spawn(nodeExec, [path.join(root, 'server', 'index.mjs')], {
  stdio: 'inherit',
});

const client = spawn(nodeExec, [viteEntry], {
  stdio: 'inherit',
});

function shutdown() {
  server.kill();
  client.kill();
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

server.on('exit', (code) => {
  if (code && code !== 0) {
    client.kill();
    process.exit(code);
  }
});

client.on('exit', (code) => {
  if (code && code !== 0) {
    server.kill();
    process.exit(code);
  }
});
