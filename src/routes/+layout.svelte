<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.ico';
	import type { LayoutProps } from './$types';
	import { resolve } from '$app/paths';
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';

	let scrolled = $state(false);

	let { children }: LayoutProps = $props();

	let openedHeader = $state(false);
	let menuButton: HTMLButtonElement;

	const mobileLinks = [
		{ href: resolve('/'), label: 'ホーム', icon: 'fa-house' },
		{ href: resolve('/services'), label: 'サービス', icon: 'fa-gears' },
		{ href: resolve('/tools'), label: 'ツール', icon: 'fa-toolbox' },
		{ href: resolve('/donwloads'), label: 'ダウンロード', icon: 'fa-download' },
		{ href: resolve('/contact'), label: 'お問い合わせ', icon: 'fa-envelope' }
	];

	afterNavigate(() => (openedHeader = false));

	onMount(() => {
		scrolled = window.scrollY > 50;
		const desktop = window.matchMedia('(min-width: 40rem)');
		const closeOnDesktop = () => {
			if (desktop.matches) openedHeader = false;
		};
		desktop.addEventListener('change', closeOnDesktop);
		return () => desktop.removeEventListener('change', closeOnDesktop);
	});

	function openHeader() {
		openedHeader = !openedHeader;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && openedHeader) {
			openedHeader = false;
			menuButton?.focus();
		}
	}
</script>

<svelte:window onscroll={() => (scrolled = window.scrollY > 50)} onkeydown={handleKeydown} />

<svelte:head>
	<link rel="stylesheet" href="https://cdn.atserver186.jp/libs/fontawesome/css/all.min.css" />
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="site-header" class:scrolled class:openedHeader>
	<div class="header-toolbar">
		<a href={resolve('/')} title="ホーム" class="flex">
			<img
				src="https://pic.atserver186.jp/img/atserver/root/alft.png"
				alt="ATSERVER Logo"
				class="my-auto hidden h-4 w-auto md:flex"
			/>
			<img
				src="https://pic.atserver186.jp/img/atserver/root/ats_logo.webp"
				alt="ATSERVER Logo"
				class="my-auto flex h-10 w-10 md:hidden"
			/>
			<!--<p class="text-bace header-logo-txt my-auto ml-2 font-bold">ATSERVER</p>-->
		</a>

		<nav aria-label="メインナビゲーション" class="my-auto ml-auto hidden sm:flex">
			<ul class="flex gap-4">
				<li>
					<button
						type="button"
						class="cursor-pointer rounded-sm px-1 py-0.5 text-xs sm:border sm:bg-gray-300/40"
					>
						<div class="hidden sm:flex">
							<kbd><i class="fa-solid fa-magnifying-glass"></i>Ctrl&plus;k</kbd>
						</div>
						<div class="flex sm:hidden">
							<i class="fa-solid fa-magnifying-glass"></i>
						</div>
					</button>
				</li>
				{#each mobileLinks as link (link.href)}
					<li>
						<a href={link.href} onclick={() => (openedHeader = false)} class="text-xs">
							{link.label}
						</a>
					</li>
				{/each}
				<li>
					<span>|</span>
				</li>
				<li>
					<a href={resolve('/')} class="text-xs" title="ソースコード"
						><i class="fa-solid fa-code"></i></a
					>
				</li>
				<li>
					<a href={resolve('/')} class="text-xs" title="オープンソースライセンス"
						><i class="fa-regular fa-file-lines"></i></a
					>
				</li>
			</ul>
		</nav>
		<div class="ml-auto flex items-center gap-1 sm:hidden">
			<button type="button" class="header-icon-button" aria-label="検索">
				<i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
			</button>
			<button
				type="button"
				bind:this={menuButton}
				onclick={openHeader}
				class="header-icon-button menu-toggle"
				aria-label={openedHeader ? 'メニューを閉じる' : 'メニューを開く'}
				aria-expanded={openedHeader}
				aria-controls="mobile-navigation"
			>
				<span class="menu-icon" aria-hidden="true"><span></span><span></span><span></span></span>
			</button>
		</div>
	</div>
	<div class="mobile-menu" inert={!openedHeader} aria-hidden={!openedHeader}>
		<div class="mobile-menu-clip">
			<nav id="mobile-navigation" aria-label="モバイルナビゲーション">
				<ul>
					{#each mobileLinks as link (link.href)}
						<li>
							<a href={link.href} onclick={() => (openedHeader = false)}>
								<i class={`fa-solid ${link.icon}`} aria-hidden="true"></i>
								<span>{link.label}</span>
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
	</div>
</header>

<section class="min-h-screen">
	{@render children()}
</section>

<style>
	.site-header {
		--header-duration: 300ms;
		--header-easing: cubic-bezier(0.22, 1, 0.36, 1);
		position: fixed;
		z-index: 50;
		top: 0;
		right: 0;
		left: 0;
		overflow: hidden;
		border: 1px solid rgb(0 0 0 / 0.1);
		border-radius: 0;
		background: rgb(255 255 255 / 0.9);
		box-shadow: 0 2px 4px rgb(0 0 0 / 0.12);
		backdrop-filter: blur(12px);
		transition:
			top var(--header-duration) var(--header-easing),
			right var(--header-duration) var(--header-easing),
			left var(--header-duration) var(--header-easing),
			border-radius var(--header-duration) var(--header-easing);
	}

	.site-header.scrolled {
		top: 10px;
		right: 22px;
		left: 22px;
		border-radius: 16px;
	}

	.header-toolbar {
		display: flex;
		align-items: center;
		min-height: 56px;
		padding: 7px 8px;
	}

	.header-icon-button {
		display: grid;
		width: 40px;
		height: 40px;
		place-items: center;
		border-radius: 8px;
		cursor: pointer;
	}

	.header-icon-button:hover,
	.mobile-menu a:hover {
		background: rgb(0 0 0 / 0.05);
	}

	.header-icon-button:focus-visible,
	.mobile-menu a:focus-visible {
		outline: 2px solid currentColor;
		outline-offset: -2px;
	}

	.menu-icon {
		position: relative;
		width: 18px;
		height: 14px;
		border-radius: 10px;
	}

	.menu-icon span {
		position: absolute;
		left: 0;
		width: 18px;
		height: 2px;
		border-radius: 1px;
		background: currentColor;
		transition:
			transform var(--header-duration) var(--header-easing),
			opacity var(--header-duration) var(--header-easing);
	}

	.menu-icon span:nth-child(1) {
		top: 0;
	}
	.menu-icon span:nth-child(2) {
		top: 6px;
	}
	.menu-icon span:nth-child(3) {
		top: 12px;
	}
	.openedHeader .menu-icon span:nth-child(1) {
		transform: translateY(6px) rotate(45deg);
	}
	.openedHeader .menu-icon span:nth-child(2) {
		opacity: 0;
		transform: scaleX(0);
	}
	.openedHeader .menu-icon span:nth-child(3) {
		transform: translateY(-6px) rotate(-45deg);
	}

	/* Keep both states mounted so rapid toggles can reverse the current transition. */
	.mobile-menu {
		display: grid;
		grid-template-rows: 0fr;
		opacity: 0;
		transition:
			grid-template-rows var(--header-duration) var(--header-easing),
			opacity var(--header-duration) var(--header-easing);
	}

	.openedHeader .mobile-menu {
		grid-template-rows: 1fr;
		opacity: 1;
	}

	.mobile-menu-clip {
		min-height: 0;
		overflow: hidden;
	}

	.mobile-menu nav {
		max-height: calc(100dvh - 78px);
		overflow-y: auto;
		padding: 16px 16px 14px;
		transform: translateY(-8px);
		transition: transform var(--header-duration) var(--header-easing);
	}

	.openedHeader .mobile-menu nav {
		transform: translateY(0);
	}

	.mobile-menu a {
		display: flex;
		min-height: 36px;
		align-items: center;
		gap: 8px;
		padding: 8px;
		border-radius: 6px;
		font-size: 14px;
		line-height: 20px;
	}

	.mobile-menu i {
		width: 14px;
		text-align: center;
		font-size: 12px;
	}

	@media (min-width: 40rem) {
		.site-header {
			background: rgb(255 255 255 / 0.5);
			box-shadow: none;
		}
		.mobile-menu {
			display: none;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.site-header {
			--header-duration: 0ms;
		}
	}
</style>
