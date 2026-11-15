<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.ico';
	import type { LayoutProps } from './$types';
	import { resolve } from '$app/paths';

	let scrolled = $state(false);

	let { children }: LayoutProps = $props();
</script>

<svelte:window onscroll={() => (scrolled = window.scrollY > 50)} />

<svelte:head>
	<link rel="stylesheet" href="https://cdn.atserver186.jp/libs/fontawesome/css/all.min.css" />
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<div
		class="fixed flex min-h-12 w-full overflow-hidden border border-black/10 bg-white/50 p-2 backdrop-blur-md transition-all duration-500 scl:right-3 scl:left-3 scl:m-2.5 scl:mt-2.5 scl:mb-auto scl:w-auto scl:rounded-2xl scl:p-2.5"
		class:scrolled
	>
		<a href={resolve('/')} title="ホーム" class="flex">
			<img
				src="https://pic.atserver186.jp/img/atserver/root/alft.png"
				alt="ATSERVER Logo"
				class="my-auto hidden h-4 w-auto md:flex"
			/>
			<img
				src="https://pic.atserver186.jp/img/atserver/root/ats_logo.webp"
				alt="ATSERVER Logo"
				class="my-auto flex h-10 w-auto md:hidden"
			/>
			<!--<p class="text-bace header-logo-txt my-auto ml-2 font-bold">ATSERVER</p>-->
		</a>
		<nav class="my-auto ml-auto hidden sm:flex">
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
				<li>
					<a href={resolve('/')} class="text-xs">ホーム</a>
				</li>
				<li>
					<a href={resolve('/services')} class="text-xs">サービス</a>
				</li>
				<li>
					<a href={resolve('/tools')} class="text-xs">ツール</a>
				</li>
				<li>
					<a href={resolve('/donwloads')} class="text-xs">ダウンロード</a>
				</li>
				<li>
					<span>|</span>
				</li>
				<li>
					<a href={resolve('/')} class="text-xs" title="ソースコード"
						><i class="fa-solid fa-code"></i></a
					>
				</li>
				<li>
					<a href={resolve('/contact')} class="text-xs" title="お問い合わせ"
						><i class="fa-regular fa-envelope"></i></a
					>
				</li>
			</ul>
		</nav>
		<button
			type="button"
			class="my-auto ml-auto flex cursor-pointer flex-col sm:hidden"
			title="メニュー"
		>
			<i class="fa-solid fa-bars mx-auto text-xl"></i>
			<p class="text-[10px]">MENU</p>
		</button>
	</div>
</header>

<section class="min-h-screen">
	{@render children()}
</section>
