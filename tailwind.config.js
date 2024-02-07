/** @type {import('tailwindcss').Config} */
export default {
	content: ["./*.html", "./js/**/*.js", "node_modules/preline/dist/*.js"],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
};
