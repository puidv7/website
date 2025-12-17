// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import umami from '@yeskunall/astro-umami';

// https://astro.build/config
export default defineConfig({
	site: 'https://puidv7.dev',
	integrations: [
		umami({ id: 'a6d1ca11-6bae-46d3-8c33-d56dde77e3e0' }),
		starlight({
			title: 'puidv7',
			components: {
				Footer: './src/components/Footer.astro',
			},
			description: 'URL-safe typed IDs for humans, time-ordered UUIDv7s for databases',
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
