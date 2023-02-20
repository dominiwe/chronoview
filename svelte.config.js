//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	vitePlugin: {
		experimental: {
			inspector: {
				showToggleButton: 'always',
				toggleButtonPos: 'top-right'
			}
		}
	},

	kit: {
		//adapter: adapter()
		paths: {
			base: dev ? '' : '/chronoview'
		},
		adapter: adapter({
			strict: true
			//precompress: true // disabled for tauri
		})
	}
};

export default config;
