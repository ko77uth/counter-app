import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	base: '/counter-app/',
	build: {
		outDir: 'dist',
		sourcemap: false,
		rollupOptions: {
			external: [],
		},
	},
})
