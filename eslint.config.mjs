import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname,
})

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
	{
		rules: {
			// TypeScript
			'@typescript-eslint/consistent-type-imports': [
				'error',
				{ fixStyle: 'separate-type-imports' },
			],

			// Import
			'import/first': 'error',
			'import/order': [
				'error',
				{
					'newlines-between': 'always',
					alphabetize: {
						order: 'asc',
						caseInsensitive: false,
					},
				},
			],

			// React
			'react/self-closing-comp': 'warn',
		},
	},
]

export default eslintConfig
