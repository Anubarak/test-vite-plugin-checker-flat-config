import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import basicSsl from '@vitejs/plugin-basic-ssl';
import checker from 'vite-plugin-checker';
import { fileURLToPath, URL } from "url";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        checker({
            typescript: true,
            eslint: {
                lintCommand: 'eslint src',
                useFlatConfig: true
            },
            overlay: true
        }),
        basicSsl(),
    ],
    optimizeDeps: {
        force: true
    },
    server: {
        host: true,
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
});
