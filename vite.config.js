import { defineConfig } from "vite";
const path = require('path');
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/js/app.js"],
            refresh: true,
        }),
        vue(),
        viteCompression({
            filter: /\.(js|mjs|css)$/i
        })
    ],

    resolve: {
        alias: {
            '@' : path.resolve(__dirname, './resources/js'),
            '@layouts' : path.resolve(__dirname, './resources/js/layouts'),
            '@components' : path.resolve(__dirname, './resources/js/components'),
        },
    },
});
