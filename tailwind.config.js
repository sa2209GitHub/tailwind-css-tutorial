/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html'],
	theme: {
		extend: {
			gridTemplateRows: {
				layout: 'auto 1fr auto',
			},
			colors: {
				accent: '#f0f',
			},
			fontFamily: {
				main: ['Roboto'],
			},
		},
	},
	plugins: [],
};
