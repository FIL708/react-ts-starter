/// <reference types="vitest/config" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import checker from 'vite-plugin-checker'

export default defineConfig({
    plugins: [react(), checker({ typescript: true })],
    test: {
        environment: 'jsdom',
        setupFiles: ['./vitest.setup.ts'],
    },
})
