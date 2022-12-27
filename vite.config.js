import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import postcssNesting from "postcss-nesting";
import glob from "glob";
import path from "path";
// import sassGlobImports from "vite-plugin-sass-glob-import";
import sassGlobForward from 'gulp-sass-glob-use-forward';

export default defineConfig({
	// plugins: [
	// 	sassGlobImports(),
	// ],
	build: {
		outDir: 'dist',
		rollupOptions: {
			input: Object.fromEntries (
				glob
					.sync( "{ js, css }/**/*.{ js, scss }", {
						ignore: "**/_**/**/*.{ js, scss }",
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
				// require( "tailwindcss" ),
				// require( "autoprefixer" )
				tailwindcss,
				autoprefixer,
				// sassGlobImports,
				sassGlobForward
			],
		},
	},
} );
