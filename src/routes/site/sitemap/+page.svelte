<script>
	const { data } = $props();

	let pageTitle = 'サイトマップ';
</script>

<svelte:head>
	<title>{pageTitle} | {data.site_title}</title>
	<meta property="og:title" content="{pageTitle} | {data.site_title}" />
</svelte:head>

<main class="mt-25 mr-1 ml-1 min-h-screen">
	<div class="container m-auto mt-25 border-b-2 border-b-(--main-text-color)">
		<p class="tf26-page-title" style="color: black; margin-bottom: 0;">{pageTitle}</p>
	</div>
	<section class="container mx-auto mt-15 mb-25">
		<div class="sitemap-container">
			<div class="sitemap-content">
				<h2
					class="border-l-[3px] border-(--main-text-color) pl-2 text-lg font-bold tracking-[3px] text-(--main-text-color)"
				>
					ご案内
				</h2>
				<ul class="sitemap-ul">
					<li>
						<a href="/service">
							<span>webサービス</span>
						</a>
					</li>
					<li>
						<a href="/software">
							<span>ソフトウェア</span>
						</a>
					</li>
					<li>
						<a href="/service/api">
							<span>APIドキュメント</span>
						</a>
					</li>
					<li>
						<a href="/works">
							<span>開発を担当したもの</span>
						</a>
					</li>
					<li>
						<a href="https://dev.atserver186.jp/services/" target="_blank">
							<span>関連サービス一覧</span>
						</a>
					</li>
				</ul>
			</div>
			<div class="sitemap-content">
				<h2
					class="mt-2 border-l-[3px] border-(--main-text-color) pl-2 text-lg font-bold tracking-[3px] text-(--main-text-color)"
				>
					当サイトについて
				</h2>
				<ul class="sitemap-ul">
					<li>
						<a href="/about">
							<span>当サイトについて</span>
						</a>
					</li>
					<li>
						<a href="/site/terms">
							<span>利用規約</span>
						</a>
					</li>
					<li>
						<a href="/site/privacy">
							<span>プライバシーポリシー</span>
						</a>
					</li>
					<li>
						<a href="/news">
							<span>お知らせ</span>
						</a>
					</li>
					<li>
						<a href="/contact">
							<span>お問い合わせ</span>
						</a>
					</li>
					<li>
						<a href="/site/oss">
							<span>オープンソースライセンス</span>
						</a>
					</li>
					<li>
						<a href="/site/saucecode">
							<span>ソースコード</span>
						</a>
					</li>
				</ul>
			</div>
			<div class="sitemap-content">
				<h2
					class="mt-2 border-l-[3px] border-(--main-text-color) pl-2 text-lg font-bold tracking-[3px] text-(--main-text-color)"
				>
					各種SNS / リンク
				</h2>
				<ul class="sitemap-ul">
					<li>
						<a href="https://x.com/t_aoki186" target="_blank">
							<i class="fa-brands fa-x-twitter mr-1 text-xs"></i>
							<span>X(Twitter)</span>
						</a>
					</li>
					<li>
						<a href="https://misskey.io/@t_aoki186" target="_blank">
							<i class="tf26-icon-material icon-misskey-mi mr-1 text-xs"></i>
							<span>Misskey.io</span>
						</a>
					</li>
					<li>
						<p class="text-gray-500">
							<i class="tf26-icon-material icon-misskey-mi mr-1 text-xs"></i>
							<span>あっとみすき(準備中)</span>
						</p>
						<!--
						<a href="https://mi.atserver186.jp/t-aoki186" target="_blank">
							<i class="tf26-icon-material icon-misskey-mi mr-1 text-xs"></i>
							<span>あっとみすき</span>
						</a>
						-->
					</li>
					<li>
						<a href="https://github.com/t-aoki186" target="_blank">
							<i class="fa-brands fa-github mr-1 text-xs"></i>
							<span>Github</span>
						</a>
					</li>
					<li>
						<a href="https://gitlab.atserver186.jp/t-aoki186" target="_blank">
							<i class="fa-brands fa-gitlab mr-1 text-xs"></i>
							<span>Gitlab</span>
						</a>
					</li>
					<li>
						<a href="/site/mulinks">
							<i class="fa-solid fa-arrow-up-right-from-square mr-1 text-xs"></i>
							<span>相互リンク</span>
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
	.sitemap-container {
		display: flex;
	}

	.sitemap-content {
		display: flex;
		flex-direction: column;
		width: calc(100% / 3);
	}

	.sitemap-ul {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
	}

	@media (max-width: 768px) {
		.sitemap-container {
			flex-direction: column;
		}

		.sitemap-content {
			width: 100%;
		}
	}
</style>
