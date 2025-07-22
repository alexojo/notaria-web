import fs from 'fs';
import path from 'path';
import checker from 'vite-plugin-checker';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// ----------------------------------------------------------------------

const PORT = 3030;

// ✅ Ruta del sitemap en raíz del proyecto
const sitemapSource = path.resolve(__dirname, 'sitemap.xml');
const sitemapDest = path.resolve(__dirname, 'dist/sitemap.xml');

export default defineConfig({
    plugins: [
        react(),
        checker({
            eslint: {
                lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"',
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

    // ✅ Hook para copiar el sitemap luego del build
    build: {
        rollupOptions: {
            output: {},
        },
    },
    closeBundle() {
        try {
            fs.copyFileSync(sitemapSource, sitemapDest);
            console.log('✅ sitemap.xml copiado a dist/');
        } catch (err) {
            console.error('❌ Error copiando sitemap.xml:', err);
        }
    },
});
