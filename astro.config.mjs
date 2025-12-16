// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://puidv7.dev',
	integrations: [
		starlight({
			title: 'puidv7',
			components: {
				Footer: './src/components/Footer.astro',
			},
			description: 'Prefixed UUIDv7 identifiers - human-friendly, URL-safe, time-ordered',
			pagefind: false,
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/puidv7' },
			],
			sidebar: [
				{ label: 'Home', slug: 'index' },
				{ label: 'About', slug: 'about' },
				{ label: 'Converter', slug: 'converter' },
				{ label: 'Libraries', slug: 'libraries' },
			],
			customCss: ['./src/styles/global.css'],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
