import * as vite from 'vite';

await vite.build({
	build: {
		rollupOptions: {
			input: 'src/index.js',
			output: {
				entryFileNames: '[name]-broken.js'
			}
		}
	},
	mode: 'custom-programmatic'
});

await vite.build({
	build: {
		emptyOutDir: false,
		rollupOptions: {
			input: 'src/index.js',
			output: {
				entryFileNames: '[name]-working.js'
			}
		}
	}
});
