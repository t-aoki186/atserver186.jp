<script>
	const { data } = $props();

	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';

	let pageTitle = 'ニュース';
</script>

<svelte:head>
	<title>{pageTitle} | {data.site_title}</title>
	<meta property="og:title" content="{pageTitle} | {data.site_title}" />
</svelte:head>

<main class="mt-15 mr-1 ml-1 min-h-screen">
	<div class="container m-auto mt-25 border-b-2 border-b-(--main-text-color)">
		<p class="tf26-page-title" style="color: black; margin-bottom: 0;">{pageTitle}</p>
	</div>
	<section class="container mx-auto mt-25 mb-25">
	<div class="flex flex-wrap justify-center gap-4">
			{#each data.results as item}
				<article class="sp-search-result-card">
					<a href="/news/{item.id}" class="sp-search-result-link-overlay">
						<p class="hidden">hidden:エラー対策</p>
					</a>
					<div class="mb-2">
						<p class="text-lg font-bold text-(--main-text-color)">{item.title}</p>
						<p
							class="text-sm"
							style="color: color-mix(in srgb, var(--main-text-color), transparent 50%);"
						>
							{item.type}
						</p>
					</div>
					<div class="flex"></div>
					<p class="text-sm text-gray-600">{item.heading}</p>
					<p class="text-xs text-gray-400">{item.date}</p>
				</article>
			{/each}
		</div>
	</section>
</main>
<ol class="main-breadcrumb container mx-auto">
	<li><a href="/">ホーム</a></li>
	<li>{pageTitle}</li>
</ol>
