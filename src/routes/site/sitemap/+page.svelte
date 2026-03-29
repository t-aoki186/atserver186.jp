<script>
	const { data } = $props();

	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';

	let pageTitle = 'サイトマップ';
</script>

<svelte:head>
	<title>{pageTitle} | {data.site_title}</title>
</svelte:head>

<main class="mt-15 mr-1 ml-1 min-h-screen">
	<div class="container m-auto mt-25 border-b-2 border-b-(--main-text-color)">
		<p class="tf26-page-title" style="color: black; margin-bottom: 0;">{pageTitle}</p>
	</div>
	<section class="container mx-auto mt-25 mb-25">
		<div class="flex">
			<div class="sitemap-content">
				<h2
					class="mb-4 border-l-[3px] border-(--main-text-color) pl-2 text-lg font-bold tracking-[3px] text-(--main-text-color)"
				>
					提供中のもの
				</h2>
				<ul>
					<li class="flex flex-col gap-2.5">
						<a href="/service">
							<span>webサービス</span>
						</a>
					</li>
					<li>
						<a href="https://dev.atserver186.jp/service/" target="_blank">
							<span>開発中のwebサービス</span>
						</a>
					</li>
					<li>
						<a href="/software">
							<span>PC/スマホ用ソフトウェア</span>
						</a>
					</li>
					<li>
						<a href="https://dev.atserver186.jp/software/" target="_blank">
							<span>開発中のPC/スマホ用ソフトウェア</span>
						</a>
					</li>
					<li>
						<a href="https://dev.atserver186.jp/api/" target="_blank">
							<span>API等について</span>
						</a>
					</li>
					<li>
						<a href="/site/related-services">
							<span>関連サービス(別ドメイン)</span>
						</a>
					</li>
				</ul>
			</div>
			<div class="sitemap-content">
				<h2
					class="mb-4 border-l-[3px] border-(--main-text-color) pl-2 text-lg font-bold tracking-[3px] text-(--main-text-color)"
				>
					ATSERVERについて
				</h2>
				<ul>
					<li class="flex flex-col gap-2.5">
						<a href="/about">
							<span>当サイトについて</span>
						</a>
					</li>
					<li>
						<a href="/site/related-services">
							<span>関連サービス(別ドメイン)</span>
						</a>
					</li>
					<li>
						<a href="/site/terms">
							<span>利用規約</span>
						</a>
					</li>
					<li>
						<a href="/site/privacypolicy">
							<span>プライバシーポリシー</span>
						</a>
					</li>
					<li>
						<a href="/news">
							<span>ニュース</span>
						</a>
					</li>
					<li>
						<a href="/site/oss">
							<span>使用しているOSS</span>
						</a>
					</li>
					<li>
						<a href="https://github.com/t-aoki186/atserver186.jp" target="_blank">
							<span>ソースコード</span>
						</a>
					</li>
					<li>
						<a href="/site/contact">
							<span>お問い合わせ</span>
						</a>
					</li>
				</ul>
			</div>
			<div class="sitemap-content">
				<h2
					class="mb-4 border-l-[3px] border-(--main-text-color) pl-2 text-lg font-bold tracking-[3px] text-(--main-text-color)"
				>
					各種SNS / リンク
				</h2>
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
					<li>
						<a href="/site/links">
							<i class="fa-solid fa-ellipsis mr-1 text-xs"></i>
							<span>すべてのSNS / リンクを見る</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</section>
</main>
<ol class="main-breadcrumb container mx-auto">
	<li><a href="/">ホーム</a></li>
	<li>{pageTitle}</li>
</ol>

<style>
	.sitemap-content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: calc(100% / 3);
	}
</style>
