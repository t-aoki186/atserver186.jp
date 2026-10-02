import prettier from 'eslint-config-prettier';
import path from 'node:path';
import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import ts from 'typescript-eslint';
import svelteConfig from './svelte.config.js';

const gitignorePath = path.resolve(import.meta.dirname, '.gitignore');

export default defineConfig(
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	{
		files: ['**/*.ts', '**/*.svelte'],
		extends: [ts.configs.recommended]
	},
	svelte.configs.recommended,
	prettier,
	svelte.configs.prettier,
	{
		languageOptions: { globals: { ...globals.browser, ...globals.node } }
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		languageOptions: {
			parserOptions: {
				// The recommended rules do not need the TypeScript project service.
				parser: ts.parser,
				svelteConfig
			}
		},
		rules: {
			// This site is served at the domain root (kit.paths.base is unset).
			'svelte/no-navigation-without-resolve': 'off'
		}
	}
);
