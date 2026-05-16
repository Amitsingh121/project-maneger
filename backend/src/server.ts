// import 'dotenv/config';
// import app from './app.js';

// const PORT = Number(process.env.PORT) || 3000;

// app.listen(PORT, '0.0.0.0', () => {
//   console.log(`Server running on port ${PORT}`);
// });
import 'dotenv/config';

process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION:', err);
});

process.on('unhandledRejection', (err) => {
  console.error('UNHANDLED REJECTION:', err);
});

console.log('BOOT 1: server.ts started');
console.log('PORT from Railway:', process.env.PORT);

try {
  const { default: app } = await import('./app.js');

  console.log('BOOT 2: app.ts imported successfully');

  const PORT = Number(process.env.PORT) || 3000;

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
} catch (error) {
  console.error('BOOT FAILED:', error);
  process.exit(1);
}