import { defineConfig } from 'vite';

export default defineConfig({
	base: '/vite/dist/',
	clearScreen: false,
	envDir: '.env',
	envPrefix: 'VITE_',
	logLevel: 'info',
	preview: { port: 3000 },
	server: { open: './index.html', port: 3000, strictPort: true }
});
