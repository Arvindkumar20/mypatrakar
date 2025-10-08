import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': {
//         target: 'https://mypatrakar.hindtechitsolutions.com', // Use HTTPS if your backend redirects to HTTPS
//         changeOrigin: true, // Ensures the Host header matches the target
//         secure: false, // Allow self-signed certificates (if any)
//         rewrite: (path) => path.replace(/^\/api/, ''), // Adjust path if needed
//       },
//     },
//   },
// });


