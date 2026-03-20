<script>
	const { data } = $props();

	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';

	let pageTitle = 'サービス';
</script>

<svelte:head>
	<title>{pageTitle} | {data.site_title}</title>
</svelte:head>

<main class="mt-15 mr-1 ml-1 min-h-screen">
	<div class="container m-auto mt-25 border-b-2 border-b-(--main-text-color)">
		<p class="tf26-page-title" style="color: black; margin-bottom: 0;">{pageTitle}</p>
	</div>
	<section class="container mx-auto mt-25 mb-25">
		<div class="flex flex-wrap justify-center gap-4">
			<article class="sp-search-result-card">
				<a href="/test" class="sp-search-result-link-overlay"
					><p class="hidden">hidden:エラー対策</p></a
				>
				<div class="mb-2">
					<div class="flex">
						<p class="text-sm text-gray-600">TEST</p>
						<button
							type="button"
							class="header-text header-search-btn ml-auto text-xs tracking-wider transition"
							><kbd>サービスタグ</kbd></button
						>
					</div>
					<p class="mt-4 text-xl font-bold text-(--main-text-color)">サービス名</p>
				</div>
				<p class="text-bace mt-4 text-gray-600">
					サービスの解説サービスの解説サービスの解説サービスの解説サービスの解説
				</p>
			</article>
		</div>
	</section>
</main>
<ol class="main-breadcrumb container mx-auto">
	<li><a href="/">ホーム</a></li>
	<li>{pageTitle}</li>
</ol>

<style>
	.tool-card {
		border: 1px solid var(--border);
		background: #fff;
		gap: 1rem;
		padding: 1.6rem;
		transition:
			transform 0.2s,
			box-shadow 0.2s;
		display: grid;
	}

	.tool-card-desc {
		color: var(--text-muted);
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.7;
	}
</style>
