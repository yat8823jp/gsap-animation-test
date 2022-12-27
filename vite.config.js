import { defineConfig } from "vite";
import postcssNesting from "postcss-nesting";
// import sassGlobImports from "vite-plugin-sass-glob-import";
import glob from "glob";
import path from "path";

export default defineConfig({
	// plugins: [
	// 	sassGlobImports,
	// ],
	css: {
		postcss: {
			plugins: [
				postcssNesting,
				require( "tailwindcss" ),
				require( "autoprefixer" )
				// sassGlobImports,
			],
		},
	},
	build: {
		outDir: `dist`,
		rollupoptions: {
			input: object.fromEntries (
				glob
					.sync( "{ js, css }/**/*.{ js, scss }", {
						ignore: "**/_**/**/*.{ js, scss }",
						cwd: `./src`,
					} )
					.map( ( file ) => {
						const { dir, name } = path.parse( file );
						return [ `${ dir }/${ name }`, path.resolve( "src", file ) ];
					} )
			),
			output: {
				entryFileNames: `assets/[name].js`,
				assetFileNames: `assets/[name].[ext]`,
			},
		},
		lib: {
			entry: './lib/main.js',
			name: 'Counter',
			fileName: 'counter'
		}
	}
});
