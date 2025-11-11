import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import cssCompilerPlugin from './plugins/scss-compiler-plugin';

export default defineConfig(() => {
    return {
        plugins: [
            tsconfigPaths(),
            cssCompilerPlugin({
                files: [
                    { input: './app/scss/v2/styles.scss', output: './public/css/v2/styles.css' },
                    { input: './app/scss/v2-teladoc/styles.scss', output: './public/css/v2-teladoc/styles.css' },
                    {
                        input: './app/scss/v2-theme-modern/styles.scss',
                        output: './public/css/v2-theme-modern/styles.css',
                    },
                ],
                sourceMap: process.env.NODE_ENV === 'development',
            }),
        ],
    };
});
