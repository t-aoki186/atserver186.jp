<script lang="ts">
	import './layout.css';
	import './custom-icon.css';
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

<footer class="footer-bg-color p-15">
	<div class="mb-5 grid grid-cols-3 gap-4">
		<div class="">
			<img
				src="https://pic.atserver186.jp/img/atserver/root/ats_logo.webp"
				alt="ATSERVER Logo"
				class="mb-4 w-[15%]"
			/>
			<div>
				<p class="text-lg text-white">Social</p>
				<div class="my-4">
					<a href="https://x.com/t_aoki186/" title="X(Twitter)"
						><i class="fa-brands fa-x-twitter text-2xl text-white"></i></a
					>
					<a href="https://misskey.io/@t_aoki186/" title="Misskey.io"
						><i class="custom-icon social-misskey-mi text-2xl text-white"></i></a
					>
					<span title="あっとミスキ"
						><i class="custom-icon social-misskey-mi text-2xl text-gray-400"></i></span
					>
					<!--
					<a href="https://mi.atserver186.jp/@t_aoki186" title="あっとミスキ"
						><i class="custom-icon social-misskey-mi text-2xl text-white"></i></a
					>
					-->
					<a href="https://github.com/t-aoki186/" title="Github"
						><i class="fa-brands fa-github text-2xl text-white"></i></a
					>
					<a href="https://gitlab.atserver186.jp/t-aoki186/" title="Gitlab(ats)"
						><i class="fa-brands fa-gitlab text-2xl text-white"></i></a
					>
				</div>
			</div>
		</div>
		<div class="">
			<p class="text-lg text-white">Information</p>
			<ul class="mt-2">
				<li>
					<a href={resolve('/')} class="text-white">test</a>
				</li>
				<li>
					<a href={resolve('/')} class="text-white">test</a>
				</li>
				<li>
					<a href={resolve('/')} class="text-white">test</a>
				</li>
			</ul>
		</div>
		<div class="">
			<p class="text-lg text-white">Policies</p>
			<ul class="mt-2">
				<li>
					<a href={resolve('/')} class="text-white">test</a>
				</li>
				<li>
					<a href={resolve('/')} class="text-white">test</a>
				</li>
				<li>
					<a href={resolve('/')} class="text-white">test</a>
				</li>
			</ul>
		</div>
	</div>
	<img
		src="https://pic.atserver186.jp/img/atserver/root/alft_h.svg"
		class="mx-auto opacity-70 invert"
		alt="ATSERVER"
	/>
</footer>
