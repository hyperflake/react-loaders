import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
// import { libInjectCss } from 'vite-plugin-lib-inject-css';
import react from '@vitejs/plugin-react-swc';
import { glob } from 'glob';

// libInjectCss()
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), dts({ include: ['lib'] })],
    resolve: {
        alias: {
            lib: '/lib',
            src: '/src',
        },
    },
    build: {
        lib: {
            name: '@hyperflake/react-ui-library',
            entry: glob.sync(resolve(__dirname, 'lib/**/*.{ts,scss}')),
            formats: ['es'],
            fileName: (format, name) => `${name}.${format === 'es' ? 'js' : 'cjs'}`,
        },
        copyPublicDir: false,
        sourcemap: true,
        minify: false,
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'],
            output: {
                preserveModules: true,
                preserveModulesRoot: 'lib',
            },
        },
    },
});
