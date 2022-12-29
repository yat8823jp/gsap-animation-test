import { defineConfig } from "vite";
// import postcss from "postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import postcssNesting from "postcss-nesting";
import glob from "glob";
import path from "path";
import sassGlobImports from "vite-plugin-sass-glob-import";
export default defineConfig({
	build: {
		outDir: 'dist',
		rollupOptions: {
			input: Object.fromEntries (
				glob
					.sync( "{ js, css }/**/*.{ js, scss }", {
						ignore: "**/**/**/_*.{ js, scss }",
						cwd: './src',
					} )
					.map( ( file ) => {
						const { dir, name } = path.parse( file );
						return [ '${ dir }/${ name }', path.resolve( "src", file ) ];
					} )
			),
			output: {
				entryFileNames: 'assets/[name].js',
				assetFileNames: 'assets/[name].[ext]',
			},
		},
		lib: {
			entry: './lib/main.js',
			name: 'Counter',
			fileName: 'counter'
		},
	},
	css: {
		postcss: {
			plugins: [
				postcssNesting,
				tailwindcss,
				autoprefixer,
			],
		},
		plugins: [
			sassGlobImports,
		]
	},
} );
