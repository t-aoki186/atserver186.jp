// Global module declarations to reduce noisy editor/TypeScript diagnostics
// Add more `declare module` lines as needed for other packages that don't ship types

declare module 'swiper';
declare module 'swiper/css';
declare module 'swiper/svelte';

declare module 'reveal.js';

declare module 'nprogress';

// Allow importing plain CSS files (e.g. `import 'swiper/css'`) without TS errors
declare module '*.css';

declare module '*.scss';

// If you still see Svelte-specific syntax errors (like $props/$state/$derived),
// this typically comes from an outdated Svelte language server (editor extension).
// Update the Svelte extension in your editor and make sure the editor uses the
// workspace TypeScript version (see README suggestions).