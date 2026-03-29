<script>
	const { data } = $props();

	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';

	let pageTitle = '各種SNS / リンク';
</script>

<svelte:head>
	<title>{pageTitle} | {data.site_title}</title>
</svelte:head>

<main class="mt-15 mr-1 ml-1 min-h-screen">
	<div class="container m-auto mt-25 border-b-2 border-b-(--main-text-color)">
		<p class="tf26-page-title" style="color: black; margin-bottom: 0;">{pageTitle}</p>
	</div>
	<section class="container mx-auto mt-25 mb-25">
		<div class="mt-4 min-w-full">
			<h1 class="tf26-section-title">各種SNS</h1>
			<div class="mt-2 ml-2 flex flex-col">
				<ul class="space-y-2">
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
			<h1 id="Mutual_links" class="tf26-section-title mt-4">相互リンク</h1>
			<div class="mt-2 ml-2 flex flex-col">
				<ul class="space-y-2">
					{#each data.results as item}
						<li>
							<a href={item.url} target="_blank"
								><i class="fa-solid fa-up-right-from-square mr-1 text-xs"></i>{item.title}</a
							>
						</li>
					{/each}
				</ul>
			</div>
			<h1 class="tf26-section-title mt-4">バナー</h1>
			<div class="mt-2 ml-2 flex flex-col">
				<ul class="space-y-2">
					<li>
						<a href="https://www.kaerubasyo.com/" target="_blank" rel="noopener noreferrer">
							<img
								src="https://pic.atserver186.jp/img/atserver/service/banner/kaerubasyo.jpg"
								style="width:300px;height:auto;"
								alt="kaerubasyo"
							/>
						</a>
					</li>
					<li>
						<a href="https://linkserver.jp/" target="_blank" rel="noopener noreferrer"
							><img
								src="https://linkserver.jp/banner.JPG"
								style="width: 300px;height: auto;"
								alt="Linkserver"
							/></a
						>
					</li>
					<li>
						<a href="https://umaii.f5.si/" target="_blank" rel="noopener noreferrer">
							<img
								src="https://umaii.f5.si/img/banner.png"
								style="width: 300px;height: auto;"
								alt="うまいだんごのサイト"
							/>
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
	@view-transition {
		navigation: auto;
	}
</style>
