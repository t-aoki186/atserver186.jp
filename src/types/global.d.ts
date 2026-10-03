// Global module declarations to reduce noisy editor/TypeScript diagnostics
// Add more `declare module` lines as needed for other packages that don't ship types

declare module 'swiper/css';
declare module 'swiper/css/navigation';
declare module 'swiper/css/pagination';

declare module 'reveal.js';

// Allow importing files whose specifiers end in .css or .scss.
declare module '*.css';

declare module '*.scss';

// If you still see Svelte-specific syntax errors (like $props/$state/$derived),
// this typically comes from an outdated Svelte language server (editor extension).
// Update the Svelte extension in your editor and make sure the editor uses the
// workspace TypeScript version (see README suggestions).
