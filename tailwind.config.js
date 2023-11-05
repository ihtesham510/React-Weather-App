/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				// dark
				'dark-1': '#141216',
				'dark-2': '#1D1B1F',
				'dark-3': '#1A191D',
				'dark-primary': '#B6A1E7',
				'dark-status-1': '#8DDF8D',
				'dark-status-2': '#e3ff32',
				'dark-status-3': '#ff4962',
				// light
				'light-1': '#F5F5F5', // Light gray background
				'light-2': '#EAEAEA', // Slightly darker gray background
				'light-3': '#CCCCCC', // Even darker gray background
				'light-primary': '#6A2CBF', // Primary color
				'light-status-1': '#63C665', // Success color
				'light-status-2': '#FFC101', // Warning color
				'light-status-3': '#FF675E', // Error color
			},
		},
	},
	plugins: [],
}
