<script>
	const { data } = $props();

	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';

	let pageTitle = 'お問い合わせ';
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
		<p class="mt-6 mb-6 text-lg md:mt-10 md:mb-10 md:text-xl">
			以下のお問い合わせフォームもしくはメールアドレスからお問い合わせください。<br />
			クリックするとメールソフトが起動します。<br />
			なお、返信にはお時間をいただく場合がございます。ご了承ください。
		</p>
		<a
			href="https://legacy.atserver186.jp/public/atserver186.jp/inquiry/"
			class="link-main"
			target="_blank"
		>
			<div class="link-main-underline">
				<i class="fa-solid fa-arrow-right-long"></i>
				<span>お問い合わせフォーム</span>
			</div>
		</a>
		<a href="mailto:84th.tccaoki@gmail.com" class="link-main mt-4" target="_blank">
			<div class="link-main-underline">
				<i class="fa-solid fa-envelope"></i>
				<span>84th.tccaoki[at]gmail.com</span>
			</div>
		</a>
	</section>
</main>
<ol class="main-breadcrumb container mx-auto">
	<li><a href="/">ホーム</a></li>
	<li>{pageTitle}</li>
</ol>
