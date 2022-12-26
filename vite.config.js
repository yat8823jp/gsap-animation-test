import { defineConfig } from "vite";
import postcssNesting from "postcss-nesting";
import sassGlobImports from 'vite-plugin-sass-glob-import';

export default defineConfig({
	css: {
		postcss: {
			plugins: [
				postcssNesting,
				sassGlobImports
			],
		},
	},
	build: {
		lib: {
			entry: './lib/main.js',
			name: 'Counter',
			fileName: 'counter'
		}
	}
})
