import path from 'path';
import checker from 'vite-plugin-checker';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// ----------------------------------------------------------------------

const PORT = 3030;

export default defineConfig({
    plugins: [
        react(),
        checker({
            eslint: {
                lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"',
                // dev: { logLevel: ['error'] },
            },
            overlay: {
                initialIsOpen: false,
            },
        }),
    ],
    resolve: {
        alias: [
            {
                find: /^~(.+)/,
                replacement: path.join(process.cwd(), 'node_modules/$1'),
            },
            {
                find: /^src(.+)/,
                replacement: path.join(process.cwd(), 'src/$1'),
            },
        ],
    },
    server: { port: PORT, host: true },
    preview: { port: PORT, host: true },
});
