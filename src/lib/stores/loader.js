import { writable } from 'svelte/store';

export const isVisible = writable(false);
export const hasInitialized = writable(false); // 初回判定用フラグ