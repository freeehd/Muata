import { spawn } from 'child_process';

const children = [];

const shutdown = (code = 0) => {
  for (const child of children) {
    if (!child.killed) {
      child.kill();
    }
  }

  process.exit(code);
};

const start = (command, args) => {
  const child = spawn(command, args, {
    stdio: 'inherit',
    shell: true,
  });

  children.push(child);

  child.on('exit', (code, signal) => {
    if (signal) {
      shutdown(1);
      return;
    }

    if (code && code !== 0) {
      shutdown(code);
    }
  });
};

process.on('SIGINT', () => shutdown(0));
process.on('SIGTERM', () => shutdown(0));

start('npm', ['run', 'dev:client']);
start('npm', ['run', 'dev:server']);
