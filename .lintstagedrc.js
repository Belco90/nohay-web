/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('node:path')

const buildEslintCommand = (filenames) =>
	`next lint --fix --file ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(' --file ')}`

module.exports = {
	'*.{js,jsx,ts,tsx,mjs}': [buildEslintCommand],
	'*': 'prettier --write --ignore-unknown',
}
