<script>
	const { data } = $props();

	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';

	let pageTitle = 'ATSERVERについて';
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
		<div class="main-link">
			<div class="link-2">
				<!--このサイトについて-->
				<p use:reveal class="split-text my-auto text-(--main-text-color)">
					ATSERVERは様々なWebサービスを提供するサイトです。自作SNS・リンク共有サービス・掲示板・ブログ・その他ツールなどのWebサービスを展開しています。
					<br />
					当サイトは、個人が趣味で運営しているものであり、営利目的ではありません。
					<br />
					何か問題が発生した場合や質問がある場合は、お問い合わせフォームからご連絡ください。
				</p>
			</div>
			<div class="link-2 rounded-2xl bg-white">
				<img
					src="https://cdn.atserver186.jp/img/material/ats-logo.webp"
					alt="ATSロゴ"
					class="m-auto ml-auto block h-auto w-[24%]"
				/>
			</div>
		</div>
		<br />
		<a href="/contact" class="link-main">
			<div class="link-main-underline">
				<i class="fa-solid fa-arrow-right-long"></i>
				<span>問い合わせる</span>
			</div>
		</a>
	</section>
</main>
<ol class="main-breadcrumb container mx-auto">
	<li><a href="/">ホーム</a></li>
	<li>{pageTitle}</li>
</ol>
