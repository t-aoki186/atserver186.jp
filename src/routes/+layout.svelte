<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.ico';
	import type { LayoutProps } from './$types';
	import { resolve } from '$app/paths';
	
	let scrolled = $state(false)

	let { children }: LayoutProps = $props();

</script>

<svelte:window
	onscroll={() => scrolled = window.scrollY > 50}
/>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<div class="flex w-full bg-white/50 p-2 fixed border border-black/10 backdrop-blur-md transition-all duration-500 overflow-hidden scl:rounded-2xl scl:p-2.5 scl:mt-2.5 scl:right-3 scl:left-3 scl:mb-auto scl:w-auto scl:m-2.5" class:scrolled>
		<a href={resolve('/')} title="ホームへ戻る" class="flex">
			<img
				src="https://pic.atserver186.jp/img/atserver/root/ats_logo.webp"
				alt="ATSERVER Logo"
				class="h-10 w-10"
			/>
			<p class="my-auto ml-2 text-bace font-bold header-logo-txt">ATSERVER</p>
		</a>
		<nav class="my-auto ml-auto flex">
			<ul class="flex gap-4">
				<li>
					<button type="button" class="">
						<kbd>Ctrl&plus;k</kbd>
					</button>
				</li>
				<li>
					<a href={resolve('/')}>ホーム</a>
				</li>
				<li>
					<a href={resolve('/services')}>サービス</a>
				</li>
				<li>
					<a href={resolve('/tools')}>ツール</a>
				</li>
				<li>
					<a href={resolve('/donwloads')}>ダウンロード</a>
				</li>
				<li>
					<a href={resolve('/contact')}>お問い合わせ</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

{@render children()}
