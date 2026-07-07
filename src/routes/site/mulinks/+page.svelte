<script>
	const { data } = $props();

	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';

	let pageTitle = '相互リンク';
</script>

<svelte:head>
	<title>{pageTitle} | {data.site_title}</title>
</svelte:head>

<main class="mt-15 mr-1 ml-1 min-h-screen">
	<div class="container m-auto mt-25 border-b-2 border-b-(--main-text-color)">
		<p class="tf26-page-title" style="color: black; margin-bottom: 0;">{pageTitle}</p>
	</div>
	<section class="container mx-auto mt-25 mb-25">
		<h2 class="text-xl font-bold">リンク</h2>
		{#each data.results as item}
			<a href={item.url} target="_blank"
				><i class="fa-solid fa-up-right-from-square text-xs"></i>
				{item.title}<br /><span></span></a
			>
		{/each}
		<hr class="main-hr" />
		<h2 class="my-4 text-xl font-bold">バナー</h2>
		<!--s:linkserver-->
		<div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
			<a
				href="https://linkserver.jp/"
				target="_blank"
				rel="noopener noreferrer"
				class="block rounded-lg border p-4 transition hover:bg-gray-100 dark:hover:bg-gray-300"
			>
				<div class="flex items-center justify-between">
					<div class="flex items-center gap-3">
						<img src="https://linkserver.jp/banner.JPG" class="w-full" alt="LinkServer" />
					</div>
				</div>
			</a>
			<!--e:linkserver-->
			<!---->
			<!--s:256server-->
			<a
				href="https://256server.com/"
				target="_blank"
				rel="noopener noreferrer"
				class="block rounded-lg border p-4 transition hover:bg-gray-100 dark:hover:bg-gray-300"
			>
				<div class="flex items-center justify-between">
					<div class="flex items-center gap-3">
						<img
							src="https://256server.com/image/banner/256server.png"
							class="w-full"
							alt="256server"
						/>
					</div>
				</div>
			</a>
			<!--e:256server-->
			<!---->
			<!--s:うまだん-->
			<a
				href="https://umaii.f5.si/"
				target="_blank"
				rel="noopener noreferrer"
				class="block rounded-lg border p-4 transition hover:bg-gray-100 dark:hover:bg-gray-300"
			>
				<div class="flex items-center justify-between">
					<div class="flex items-center gap-3">
						<img src="https://umaii.f5.si/img/banner.png" class="w-full" alt="うまいだんご" />
					</div>
				</div>
			</a>
			<!--s:うまだん-->
			<!---->
			<!--s:プシュー-->
			<a
				href="https://pusyuuwanko.com/"
				target="_blank"
				rel="noopener noreferrer"
				class="block rounded-lg border p-4 transition hover:bg-gray-100 dark:hover:bg-gray-300"
			>
				<div class="flex items-center justify-between">
					<div class="flex items-center gap-3">
						<img
							src="https://pusyuuwanko.com/pusyuusystem/images/pw-banner.png"
							class="w-full"
							alt="プシューサービス"
						/>
					</div>
				</div>
			</a>
			<!--e:プシュー-->
			<!---->
			<!--s:ゆー-->
			<a
				href="https://drsb.f5.si"
				target="_blank"
				rel="noopener noreferrer"
				class="block rounded-lg border p-4 transition hover:bg-gray-100 dark:hover:bg-gray-300"
			>
				<div class="flex items-center justify-between">
					<div class="flex items-center gap-3">
						<img src="https://drsb.f5.si/img/banner.png" class="w-full" alt="ゆーのホームページ" />
					</div>
				</div>
			</a>
		</div>
		<!--e:ゆー-->
	</section>
</main>

<ol class="main-breadcrumb container mx-auto">
	<li><a href="/">ホーム</a></li>
	<li>{pageTitle}</li>
</ol>
