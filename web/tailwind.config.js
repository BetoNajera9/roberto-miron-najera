/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		colors: {
			white: '#FFF',
			green: { DEFAULT: '#9FB324', dark: '#758033' },
		},
	},
	plugins: [],
}
