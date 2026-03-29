<script lang="ts">
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	/*独自スタイル*/
	import './layout.css';
	import './icon.css';
	/*NProgress*/
	import NProgress from 'nprogress';
	import 'nprogress/nprogress.css';
	/*Sqiper*/
	import Swiper from 'swiper';
	import 'swiper/css';
	/*favicon*/
	import favicon from '$lib/assets/favicon.png';
	/*モーダル*/
	import Modal from '$lib/components/Modal.svelte';

	/*NProgressの設定*/
	beforeNavigate(() => {
		NProgress.start();
	});
	afterNavigate(() => {
		NProgress.done();
		// ページ遷移時にメニューを閉じる
		open = false;
		otherOpen = false;
	});

	//export
	let { data, children } = $props();
	let accordionOpen = $state(false);

	//共通変数
	let logo = 'https://pic.atserver186.jp/img/atserver/root/ats_logo.webp';
	let logo_2 = 'https://pic.atserver186.jp/img/atserver/root/ats_logo.webp';
	let logo_alt = 'ATSERVER-ロゴ画像';

	//ハンバーガーメニュー
	let open = $state(false);
	let isOtherClosing = $state(false);
	let otherOpen = $state(false);
	let pendingOpen = false;

	function closeOther(goBackToMenu: boolean = false) {
		if (goBackToMenu) pendingOpen = true;
		otherOpen = false;
	}

	//100pxスクロールでヘッダーの表示を変更
	let scrolled = $state(false);

	/*動的クラス*/
	//ヘッダー
	const headerClass = $derived(
		`fixed top-0 right-0 left-0 z-20 border border-black/10 bg-white/80 backdrop-blur-md transition-all duration-500 overflow-hidden` +
			(scrolled ? ' scroll-nav' : '') +
			(otherOpen
				? ' max-h-[100vh] rounded-b-[1.0rem]'
				: open
					? ' max-h-[400px] rounded-b-[1.0rem]'
					: ' max-h-[56px]')
	);

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 100;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	/*s:モーダル*/
	let showModal = $state(false);
	let modalType = $state('');

	function openModal(type: string) {
		showModal = true;
		modalType = type;
	}
	/*e:モーダル*/
	//
	/*s:カルーセル*/
	let swiperContainer: HTMLDivElement | null = null;
	let swiperInstance: any = null;

	onMount(() => {
		const handleKeydown = (event: KeyboardEvent) => {
			// Ctrl + K (または Cmd + K) を判定
			if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
				event.preventDefault(); // ブラウザのデフォルト挙動を無効化
				openModal('a');
			}
		};

		window.addEventListener('keydown', handleKeydown);

		// クリーンアップ関数
		return () => {
			window.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.atserver186.jp/libs/fontawesome/css/all.min.css" />
	<link rel="icon" href={favicon} />
</svelte:head>

<Modal bind:showModal>
	{#if modalType === 'a'}
		<form class="s-search-form mb-4" action="/search/" method="GET">
			<input
				class="s-search-input"
				type="text"
				id="searchTerm"
				name="search"
				placeholder="検索..."
			/>
			<button class="m-search-button" type="submit" title="検索する"
				><i class="fas fa-search"></i></button
			>
		</form>
	{:else if modalType === 'b'}{/if}
</Modal>

<header class={headerClass}>
	<div class="flex items-center justify-between px-2 py-2">
		<!--s:ロゴ-->
		<a href="/" class="flex shrink-0 whitespace-nowrap transition">
			<img src={logo} alt="" class="h-10 w-auto rounded-xl" />
		</a>
		<!--e:ロゴ-->
		<!---->
		<div class="flex items-center md:hidden">
			<!--s:スマホ用検索ボタン-->
			<button onclick={() => openModal('a')} type="button" title="検索する" class="mr-4 text-sm"
				><i class="fa-solid fa-magnifying-glass"></i></button
			>
			<!--e:スマホ用検索ボタン-->
			<!---->
			<!--s:スマホ用ハンバーガー / その他メニュー閉じる-->
			<div class="grid">
				{#if !otherOpen}
					<button
						class="col-start-1 row-start-1 flex cursor-pointer flex-col gap-1.5"
						transition:fade={{ duration: 300 }}
						onclick={() => (open = !open)}
						title="メニュー"
					>
						<div class="flex h-10 w-9 cursor-pointer flex-col items-center justify-center">
							<input class="peer hidden" type="checkbox" checked={open} />
							<div
								class="header-hamburger h-0.5 w-[50%] origin-left translate-y-[0.45rem] rounded-sm bg-black transition-all duration-300 peer-checked:rotate-[-45deg]"
							></div>
							<div
								class="header-hamburger h-0.5 w-[50%] origin-center rounded-md bg-black transition-all duration-300 peer-checked:hidden"
							></div>
							<div
								class="header-hamburger h-0.5 w-[50%] origin-left -translate-y-[0.45rem] rounded-md bg-black transition-all duration-300 peer-checked:rotate-[45deg]"
							></div>
						</div>
					</button>
				{/if}

				{#if otherOpen}
					<button
						class="col-start-1 row-start-1 flex cursor-pointer flex-col gap-1.5"
						transition:fade={{ duration: 300 }}
						onclick={() => closeOther(open)}
						title="メニュー"
					>
						<div class="flex h-10 w-9 cursor-pointer flex-col items-center justify-center">
							<i class="fa-solid fa-angle-left other-close-ico"></i>
						</div>
					</button>
				{/if}
			</div>
			<!--s:スマホ用ハンバーガー / その他メニュー閉じる-->
		</div>
		<!---->
		<!--s:PC用メニュー-->
		<nav class="hidden md:flex">
			<ul class="flex items-center gap-5 whitespace-nowrap transition">
				<li>
					<button
						onclick={() => openModal('a')}
						type="button"
						class="header-text header-search-btn ml-3 text-xs tracking-wider transition"
						><i class="fa-solid fa-magnifying-glass mr-1"></i><kbd>Ctrl&nbsp;K</kbd></button
					>
				</li>
				<li>
					<a href="/service" class="header-text ml-3 text-xs tracking-wider transition">サービス</a>
				</li>
				<li>
					<a href="/software" class="header-text ml-3 text-xs tracking-wider transition"
						>ソフトウェア</a
					>
				</li>
				<li>
					<a href="/contact" class="header-text ml-3 text-xs tracking-wider transition"
						>お問い合わせ</a
					>
				</li>
				<li class="mr-6">
					<button
						class="header-text ml-3 cursor-pointer text-xs tracking-wider transition"
						onclick={() => (otherOpen = !otherOpen)}>その他</button
					>
				</li>
			</ul>
		</nav>
		<!--e:PC用メニュー-->
	</div>

	<!--スマホ用メニュー-->
	{#if !otherOpen && !isOtherClosing}
		<nav class="px-6 pt-6 pb-6 md:hidden">
			<ul class="flex flex-col gap-4 text-sm tracking-wide">
				<li><a href="/" class="header-text">ホーム</a></li>
				<li><a href="/service" class="header-text">サービス</a></li>
				<li><a href="/software" class="header-text">ソフトウェア</a></li>
				<li><a href="/contact" class="header-text">お問い合わせ</a></li>
				<li>
					<button class="header-text" onclick={() => (otherOpen = !otherOpen)}>その他</button>
				</li>
			</ul>
		</nav>
	{/if}

	{#if otherOpen}
		<nav
			class="overflow-auto p-6"
			transition:fade={{ duration: 500 }}
			onoutrostart={() => (isOtherClosing = true)}
			onoutroend={() => {
				isOtherClosing = false;
				if (pendingOpen) {
					open = true;
					pendingOpen = false;
				}
			}}
		>
			<ul class="flex flex-col gap-4 text-sm tracking-wide">
				<li>
					<a href="/news" class="header-text"
						><i class="fa-regular fa-file-lines mr-1 text-xs"></i>ニュース</a
					>
				</li>
				<li>
					<a href="/site/oss" class="header-text"
						><i class="fa-solid fa-rectangle-list mr-1 text-xs"></i>使用しているOSS</a
					>
				</li>
				<li>
					<a href="https://github.com/t-aoki186/atserver186.jp" class="header-text" target="_blank"
						><i class="fa-brands fa-github mr-1 text-xs"></i>ソースコード</a
					>
				</li>
				<li>
					<a href="/site/sitemap" class="header-text"
						><i class="fa-solid fa-sitemap mr-1 text-xs"></i>サイトマップ</a
					>
				</li>
				<li>
					<a href="/site/links" class="header-text"
						><i class="fa-solid fa-arrow-up-right-from-square mr-1 text-xs"></i>各種SNS / リンク</a
					>
				</li>
				<li>
					<a href="/contact" class="header-text"
						><i class="fa-solid fa-envelope mr-1 text-xs"></i>お問い合わせ</a
					>
				</li>
				<hr class="main-hr" />
				<button class="header-text" onclick={() => closeOther(open)}>
					<i class="fa-solid fa-angle-left mr-1 text-xs"></i>
					{#if open}メニューに戻る{/if}
					{#if !open}閉じる{/if}
				</button>
			</ul>
		</nav>
	{/if}
</header>

{@render children()}

<!--フッター-->
<footer class="footer m-0 mb-0 w-full pt-[10] pr-0 pb-[10] pl-0">
	<div class="hidden md:flex">
		<div class="footer-top-content">
			<!-- フッターの左側コンテンツ -->
			<div class="footer-flex-content">
				<div class="footer-logo">
					<a href="/">
						<img src={logo_2} alt={logo_alt} class="h-auto w-15 rounded-xl" />
					</a>
				</div>
			</div>

			<!-- フッターの右側コンテンツ -->
			<div class="footer-flex-content">
				<h4>ご案内</h4>
				<ul>
					<li>
						<a href="/about">
							<span>当サイトについて</span>
						</a>
					</li>
					<li>
						<a href="/timetable">
							<span>開発中</span>
						</a>
					</li>
					<li>
						<a href="/qa">
							<span>開発終了</span>
						</a>
					</li>
					<li>
						<a href="/contact">
							<span>お問い合わせ</span>
						</a>
					</li>
				</ul>
			</div>
			<div class="footer-flex-content">
				<h4>テスト</h4>
				<ul>
					<li>
						<a href="/circle/club/tcc">
							<span>テスト</span>
						</a>
					</li>
				</ul>
			</div>
			<div class="footer-flex-content">
				<h4>各種SNS / リンク</h4>
				<ul>
					<li>
						<a href="https://x.com/ATShift186_XZ1" target="_blank">
							<i class="fa-brands fa-x-twitter mr-1 text-xs"></i>
							<span>Twitter</span>
						</a>
					</li>
					<li>
						<a href="https://msk.atserver186.jp" target="_blank">
							<i class="tf26-icon-material icon-misskey-mi mr-1 text-xs"></i>
							<span>Misskey(あっとみすき)</span>
						</a>
					</li>
					<li>
						<a href="https://www.youtube.com/@atshift" target="_blank">
							<i class="fa-brands fa-youtube mr-1 text-xs"></i>
							<span>YouTube</span>
						</a>
					</li>
					<li>
						<a href="https://developer.atserver186.jp" target="_blank">
							<i class="fa-solid fa-comment mr-1 text-xs"></i>
							<span>ATSocial</span>
						</a>
					</li>
					<li>
						<a href="https://github.com/t-aoki186/" target="_blank">
							<i class="fa-brands fa-github mr-1 text-xs"></i>
							<span>Github</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="md:hidden">
		<div class="flex flex-col items-center justify-center gap-4">
			<a href="/">
				<img src={logo_2} alt={logo_alt} class="h-auto w-20 rounded-xl" />
			</a>
		</div>
		<!--アコーディオン-->
		<div class="overflow-hidden rounded-lg border">
			<button
				class="justfy-between flex w-full items-center bg-gray-100 p-4 transition"
				onclick={() => (accordionOpen = !accordionOpen)}
			>
				<span>テスト</span>
			</button>
		</div>
		<!---->
	</div>
	<div class="footer-bottom-content mx-auto">
		<br />
		<hr class="sub-hr" />
		<br />
		<a href="/site/terms" class="footer-link" style="margin-right: 10px;">利用規約</a><span
			class="footer-span">|</span
		>
		<a href="/site/privacy" class="footer-link" style="margin-right: 10px; margin-left: 10px;"
			>プライバシーポリシー</a
		><span class="footer-span">|</span>
		<a href="/contact" class="footer-link" style="margin-left: 10px;">お問い合わせ</a>
		<p class="footer-text">
			&copy; 2026 ATSERVER. | atserver186.jp All Rights Reserved.
			本サイトの無断転載は、固くこれを禁じます。
		</p>
	</div>
</footer>
