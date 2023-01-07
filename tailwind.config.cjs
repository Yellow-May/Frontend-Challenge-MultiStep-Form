/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	extends: {
		screens: {
			'small-screen': { raw: '(max-height: 758px), (max-width: 480px)' },
		},
	},
	theme: {
		colors: {
			blue: {
				50: 'hsl(206, 94%, 87%)',
				100: 'hsl(228, 100%, 84%)',
				200: 'hsl(243, 100%, 62%)',
				300: 'hsl(213, 96%, 18%)',
			},
			red: 'hsl(354, 84%, 57%)',
			gray: {
				50: 'hsl(229, 24%, 87%)',
				100: 'hsl(231, 11%, 63%)',
			},
			magnolia: 'hsl(217, 100%, 97%)',
			alabaster: 'hsl(231, 100%, 99%)',
			white: 'hsl(0, 0%, 100%)',
			black: 'hsl(0%, 0%, 0%)',
		},
		fontFamily: {
			ubuntu: ['Ubuntu', 'sans-serif'],
		},
	},
	plugins: [],
};
