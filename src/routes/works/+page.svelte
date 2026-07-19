<script>
	const { data } = $props();

	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';

	let pageTitle = '関連サービス';
</script>

<svelte:head>
	<title>{data.site_title}</title>
	<meta property="og:title" content="{pageTitle} | {data.site_title}" />
</svelte:head>

<main class="mt-15 mr-1 ml-1 min-h-screen">
	<div class="container m-auto mt-25 border-b-2 border-b-(--main-text-color)">
		<p class="tf26-page-title" style="color: black; margin-bottom: 0;">{pageTitle}</p>
	</div>
	<section class="container mx-auto mt-15 mb-25">
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		<a
			href="https://tohofes.jp/" target="_blank"
			class="block rounded-lg border p-4 transition hover:bg-gray-100 dark:hover:bg-gray-300"
		>
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-3">
					<img src="https://pic.atserver186.jp/img/tohofes/tf26-logo-m-v3.webp" class="h-10" alt="第75回桐朋祭ホームページロゴ"/>
					<span class="font-semibold">第75回桐朋祭ホームページ</span>
				</div>
			</div>
		</a>
        <!--
		<a
			href="https://gitlab.atserver186.jp/t-aoki186/atserver186.jp.git" target="_blank"
			class="block rounded-lg border p-4 transition hover:bg-gray-100 dark:hover:bg-gray-300"
		>
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-3">
					<i class="fa-brands fa-gitlab text-lg"></i>
					<span class="font-semibold">Gitlabリポジトリ</span>
				</div>
			</div>
		</a>
        -->
	</div>
	</section>
</main>
<ol class="main-breadcrumb container mx-auto">
	<li><a href="/">ホーム</a></li>
	<li>{pageTitle}</li>
</ol>