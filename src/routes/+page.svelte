<script lang="ts">
	/*共通*/
	let { data } = $props() as { data: { latestNews: any[]; latestMulinks: any[], latest2Mulinks: any[] } };
	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';
	/*モーダル*/
	import Modal from '$lib/components/Modal.svelte';
	/*カルーセル*/
	import Swiper from 'swiper';
	import { Navigation, Pagination, Autoplay } from 'swiper/modules';
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	/*Sveltekit-View-Transition(ページ遷移時のアニメーション)*/
	import { setupViewTransition } from 'sveltekit-view-transition';
	//
	import { afterNavigate, beforeNavigate } from '$app/navigation';

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

	//カルーセルの内容
	const slides = [
		{
			id: 1,
			title: 'スライド 1',
			body: 'これは最初のスライドです。',
			image: 'https://picsum.photos/id/1018/1200/600'
		},
		{
			id: 2,
			title: 'スライド 2',
			body: 'これは2番目のスライドです。',
			image: 'https://picsum.photos/id/1025/1200/600'
		},
		{
			id: 3,
			title: 'スライド 3',
			body: '最後のスライドです。',
			image: 'https://picsum.photos/id/1035/1200/600'
		}
	];
	//
	onMount(() => {
		if (swiperContainer) {
			swiperInstance = new Swiper(swiperContainer, {
				modules: [Navigation, Pagination, Autoplay],
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				pagination: { el: '.swiper-pagination', clickable: true },
				autoplay: { delay: 3000, disableOnInteraction: false },
				spaceBetween: 20,
				slidersPreview: 1,
				loop: true
			});
		}
	});
	/*s:カルーセル*/
	/*s:View Transition*/
	setupViewTransition();
	/*e:View Transition*/
</script>

<svelte:head>
	<title>ATSERVER</title>
</svelte:head>

<div class="top-container relative flex w-full items-center bg-(--main-bg-color)">
	<!--s:カルーセル-->
	<!--
	<div class="carousel-wrapper">
		<div class="swiper ats-swiper" bind:this={swiperContainer}>
			<div class="swiper-wrapper">
				{#each slides as s}
					<div class="swiper-slide">
						<div class="slide-card overflow-hidden rounded-lg bg-white shadow-md">
							{#if s.image}
								<img src={s.image} alt={s.title} class="slide-img h-full w-full object-cover" />
							{/if}
							<div class="p-4">
								<h2 class="mb-2 text-xl font-semibold">{s.title}</h2>
								<p class="text-sm">{s.body}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
			<div class="swiper-pagination"></div>
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
		</div>
	</div>
	-->
	<!--e:カルーセル-->
	<!--スクロールインジケーターを重ねる-->
	<div class="absolute right-0 bottom-6 z-10 md:right-6">
		<div id="scroll-wrapper">
			<div id="scroll-wrapper-inner">
				<div id="scroll-title">Scroll</div>
				<div id="scroll-down"></div>
			</div>
		</div>
	</div>
</div>
<main>
	<!--s:サービス-->
	<div class="container m-auto mt-10 rounded-xl bg-(--title-bg-color)" data-aos="fade-up">
		<p use:reveal class="news-section-title" style="padding: 0 0 10px 0;">
			{#each '・サービス'.split('') as char, i}
				<span class="char text-(--main-text-color)" style={`--d: ${i * 0.12}s`}>{char}</span>
			{/each}
		</p>
	</div>
	<div class="container mx-auto" data-aos="fade-up">
		<form class="s-search-form mb-4" action="/organizations/" method="GET">
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
		<div class="relative m-auto mt-10 mb-4 max-w-125 bg-white">
			<!-- 左下の角 -->
			<span
				class="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-(--main-text-color)"
			></span>
			<!-- 右下の角 -->
			<span
				class="absolute right-0 bottom-0 h-4 w-4 border-r-2 border-b-2 border-(--main-text-color)"
			></span>
			<!-- コンテンツ -->
			<div class="flex justify-center gap-4 font-bold text-(--main-text-color)">
				<div class="tp-search-method">
					<a href="/organizations" class="dash-link">
						<i class="fa-solid fa-list"></i>
						<p>絞り込む</p>
					</a>
				</div>
				<div class="tp-search-method">
					<a href="/timetable" class="dash-link">
						<i class="fa-solid fa-list"></i>
						<p>タイムテーブルから<br />探す</p>
					</a>
				</div>
			</div>
		</div>
		<p>[右から左]横に流れるサービスのサムネイル</p>
		<p class="mb-4">[左から右]横に流れるサービスのサムネイル</p>
		<a href="/search?category=service" class="link-main">
			<div class="link-main-underline">
				<i class="fa-solid fa-magnifying-glass"></i>
				<span>サービス一覧はこちら</span>
			</div>
		</a>
		<br />
		<hr class="main-hr" />
	</div>
	<!--e:サービス-->
	<!---->
	<!--s:お知らせ(重要)-->
	<div class="tp-info container mx-auto mt-10 rounded-xl p-4" data-aos="fade-up">
		<div class="main-link">
			<div class="link-4 flex items-center justify-center">
				<i
					class="fa-regular fa-comment-dots -scale-x-100 transform text-[8rem] text-(--main-text-color)"
				></i>
			</div>
			<div class="link-3">
				<p class="mb-6">
					<strong class="text-lg">現在開発中のSNSの名前を募集しています。</strong>
					<br /><br />
					ATSERVERでは現在、新しいSNSを開発中です。このSNSの名前を皆様から募集しています。
					<br />
					ユニークで覚えやすい名前を考えていただけると嬉しいです。
				</p>
			</div>
		</div>
		<a href="/" class="link-main">
			<div class="link-main-underline">
				<i class="fa-solid fa-arrow-right-long"></i>
				<span>仕様・外観を見る</span>
			</div>
		</a>
	</div>
	<!--e:お知らせ(重要)-->
	<!---->
	<!--s:このサイトについて-->
	<div class="container m-auto mt-10" data-aos="fade-up">
		<p use:reveal class="news-section-title" style="padding: 0 0 10px 0;">
			{#each '・このサイトについて'.split('') as char, i}
				<span class="char text-(--main-text-color)" style={`--d: ${i * 0.12}s`}>{char}</span>
			{/each}
		</p>
	</div>
	<div class="container mx-auto mb-10" data-aos="fade-up">
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
		<a href="/theme" class="link-main">
			<div class="link-main-underline">
				<i class="fa-solid fa-arrow-right-long"></i>
				<span>詳しくはこちら</span>
			</div>
		</a>
		<br />
		<hr class="main-hr" />
	</div>
	<!--e:このサイトについて-->
	<!---->
	<!--s:お知らせ-->
	<div class="container mx-auto mt-10" data-aos="fade-up">
		<div class="main-link">
			<div class="link-3" style="margin: 0 5px 5px 5px; ">
				<p use:reveal class="news-section-title" style="padding: 0 0 10px 0;">
					{#each '・お知らせ'.split('') as char, i}
						<span class="char text-(--main-text-color)" style={`--d: ${i * 0.12}s`}>{char}</span>
					{/each}
				</p>
				<hr class="main-hr" />
				<ul>
					{#each data?.latestNews ?? [] as item}
						<li class="mx-auto mb-4 w-full list-none">
							<a href="/news/{item.id}">
								<div
									class="news-list flex border-l-2 pl-4"
									style="border-left-color: var(--main-text-color);"
								>
									<div class="news-list-date-box mr-4">
										<span class="news-list-month"
											>{String(new Date(item.date).getMonth() + 1).padStart(2, '0')}</span
										>
										<span class="news-list-slash">/</span>
										<span class="news-list-date"
											>{String(new Date(item.date).getDate()).padStart(2, '0')}</span
										>
									</div>
									<div class="truncate-parent flex-col">
										<p class="truncate-title news-list-title ml-2 font-bold">{item.title}</p>
										<p class="truncate-heading news-list-heading mb-2">{item.heading}</p>
									</div>
									<div class="news-list-icon my-auto ml-auto">
										<i class="fa-solid fa-angles-right left-auto mr-2"></i>
									</div>
								</div>
							</a>
						</li>
					{/each}
				</ul>
			</div>
			<div class="link-4 flex items-center justify-center">
				<i
					class="tf26-icon-material icon-megaphone -scale-x-100 rotate-30 transform text-[12rem] text-(--main-text-color)"
				></i>
			</div>
		</div>
		<br />
		<a href="/news" class="link-main">
			<div class="link-main-underline">
				<i class="fa-solid fa-arrow-right-long"></i>
				<span>お知らせ一覧へ</span>
			</div>
		</a>
		<br />
		<hr class="main-hr" />
	</div>
	<!--e:お知らせ-->
	<!---->
	<!--s:相互リンク-->
	<div class="container m-auto mt-10" data-aos="fade-up">
		<p use:reveal class="news-section-title" style="padding: 0 0 10px 0;">
			{#each '・相互リンク'.split('') as char, i}
				<span class="char text-(--main-text-color)" style={`--d: ${i * 0.12}s`}>{char}</span>
			{/each}
		</p>
	</div>
	<div class="container mx-auto mb-10" data-aos="fade-up">
		<div class="main-link">
			<div class="link-2">
				{#each data?.latestMulinks ?? [] as item}
					<a href={item.url} target="_blank"
						><i class="fa-solid fa-up-right-from-square mr-1 text-xs"></i>{item.title}</a
					>
				{/each}
			</div>
			<div class="link-2">
				{#each data?.latest2Mulinks ?? [] as item}
					<a href={item.url} target="_blank"
						><i class="fa-solid fa-up-right-from-square mr-1 text-xs"></i>{item.title}</a
					>
				{/each}
			</div>
		</div>
		<a href="/site/links/#Mutual_links" class="link-main">
			<div class="link-main-underline">
				<i class="fa-solid fa-arrow-right-long"></i>
				<span>もっと見る</span>
			</div>
		</a>
		<br />
		<hr class="main-hr" />
	</div>
	<!--e:相互リンク-->
	<!---->
	<!--s:アクセスカウンター-->
	<div class="container m-auto mt-10" data-aos="fade-up">
		<p use:reveal class="news-section-title" style="padding: 0 0 10px 0;">
			{#each '・アクセスカウンター'.split('') as char, i}
				<span class="char text-(--main-text-color)" style={`--d: ${i * 0.12}s`}>{char}</span>
			{/each}
		</p>
	</div>
	<div class="container mx-auto mb-10" data-aos="fade-up">
		<img
			src="https://moecounter.atserver186.jp/@ATShift?name=ATShift&theme=original-old&padding=8&offset=0&align=top&scale=1&pixelated=1&darkmode=0"
			alt="アクセスカウンター"
			class="mx-auto mb-8"
		/>
		<a href="https://moecounter.atserver186.jp/" class="link-main" target="_blank">
			<div class="link-main-underline">
				<i class="fa-solid fa-arrow-right-long"></i>
				<span>このアクセスカウンターを使う</span>
			</div>
		</a>
	</div>
	<!--e:アクセスカウンター-->
	<!---->
	<hr class="main-hr" />
	<!--s:アニメーションを再視聴-->
	<div class="container m-auto my-10">
		<a href="/" class="link-main">
			<div class="link-main-underline">
				<i class="fa-solid fa-circle-play"></i>
				<span>アニメーションをもう一度視聴する</span>
			</div>
		</a>
	</div>
</main>

<style>
	@view-transition {
		navigation: auto;
	}

	:global(.ats-swiper) {
		--swiper-navication-color: var(--main-text-color);
		--swiper-pagination-color: var(--main-text-color);
	}

	:global(.ats-swiper .swiper-button-next),
	:global(.ats-swiper .swiper-button-prev) {
		color: var(--sub-text-color);
	}

	.tp-search-method {
		text-decoration: none;
		width: 48%;
		border-radius: 10px;
		padding: 15px;
		transition: 0.3s;
		text-align: center;
	}

	.tp-search-method:hover {
		transform: scale(1.03);
		opacity: 0.9;
	}

	#scroll-down {
		display: block;
		position: relative;
		padding-top: 79px;
		text-align: center;
	}

	#scroll-title {
		display: block;
		text-transform: uppercase;
		color: var(--main-text-color);
		font-family: 'raleway';
		font-size: 16px;
		font-weight: bold;
		letter-spacing: 0.4em;
		text-align: center;
		transform: rotate(90deg);
		margin-bottom: 45px;
	}
	#scroll-down::before {
		-webkit-animation: elasticus 2.9s cubic-bezier(1, 0, 0, 1) infinite;
		/* Safari 4+ */
		-moz-animation: elasticus 2.9s cubic-bezier(1, 0, 0, 1) infinite;
		/* Fx 5+ */
		-o-animation: elasticus 2.9s cubic-bezier(1, 0, 0, 1) infinite;
		/* Opera 12+ */
		animation: elasticus 2.9s cubic-bezier(1, 0, 0, 1) infinite;
		/* IE 10+, Fx 29+ */
		position: absolute;
		top: 0px;
		left: 50%;
		margin-left: -1px;
		width: 2px;
		height: 90px;
		background: var(--main-text-color);
		content: ' ';
	}
	@-webkit-keyframes elasticus {
		0% {
			-webkit-transform-origin: 0% 0%;
			-ms-transform-origin: 0% 0%;
			-moz-transform-origin: 0% 0%;
			-o-transform-origin: 0% 0%;
			transform-origin: 0% 0%;
			-webkit-transform: scale(1, 0);
			-ms-transform: scale(1, 0);
			-moz-transform: scale(1, 0);
			-o-transform: scale(1, 0);
			transform: scale(1, 0);
		}
		50% {
			-webkit-transform-origin: 0% 0%;
			-ms-transform-origin: 0% 0%;
			-moz-transform-origin: 0% 0%;
			-o-transform-origin: 0% 0%;
			transform-origin: 0% 0%;
			-webkit-transform: scale(1, 1);
			-ms-transform: scale(1, 1);
			-moz-transform: scale(1, 1);
			-o-transform: scale(1, 1);
			transform: scale(1, 1);
		}
		50.1% {
			-webkit-transform-origin: 0% 100%;
			-ms-transform-origin: 0% 100%;
			-moz-transform-origin: 0% 100%;
			-o-transform-origin: 0% 100%;
			transform-origin: 0% 100%;
			-webkit-transform: scale(1, 1);
			-ms-transform: scale(1, 1);
			-moz-transform: scale(1, 1);
			-o-transform: scale(1, 1);
			transform: scale(1, 1);
		}
		100% {
			-webkit-transform-origin: 0% 100%;
			-ms-transform-origin: 0% 100%;
			-moz-transform-origin: 0% 100%;
			-o-transform-origin: 0% 100%;
			transform-origin: 0% 100%;
			-webkit-transform: scale(1, 0);
			-ms-transform: scale(1, 0);
			-moz-transform: scale(1, 0);
			-o-transform: scale(1, 0);
			transform: scale(1, 0);
		}
	}
	@-moz-keyframes elasticus {
		0% {
			-webkit-transform-origin: 0% 0%;
			-ms-transform-origin: 0% 0%;
			-moz-transform-origin: 0% 0%;
			-o-transform-origin: 0% 0%;
			transform-origin: 0% 0%;
			-webkit-transform: scale(1, 0);
			-ms-transform: scale(1, 0);
			-moz-transform: scale(1, 0);
			-o-transform: scale(1, 0);
			transform: scale(1, 0);
		}
		50% {
			-webkit-transform-origin: 0% 0%;
			-ms-transform-origin: 0% 0%;
			-moz-transform-origin: 0% 0%;
			-o-transform-origin: 0% 0%;
			transform-origin: 0% 0%;
			-webkit-transform: scale(1, 1);
			-ms-transform: scale(1, 1);
			-moz-transform: scale(1, 1);
			-o-transform: scale(1, 1);
			transform: scale(1, 1);
		}
		50.1% {
			-webkit-transform-origin: 0% 100%;
			-ms-transform-origin: 0% 100%;
			-moz-transform-origin: 0% 100%;
			-o-transform-origin: 0% 100%;
			transform-origin: 0% 100%;
			-webkit-transform: scale(1, 1);
			-ms-transform: scale(1, 1);
			-moz-transform: scale(1, 1);
			-o-transform: scale(1, 1);
			transform: scale(1, 1);
		}
		100% {
			-webkit-transform-origin: 0% 100%;
			-ms-transform-origin: 0% 100%;
			-moz-transform-origin: 0% 100%;
			-o-transform-origin: 0% 100%;
			transform-origin: 0% 100%;
			-webkit-transform: scale(1, 0);
			-ms-transform: scale(1, 0);
			-moz-transform: scale(1, 0);
			-o-transform: scale(1, 0);
			transform: scale(1, 0);
		}
	}
	@-o-keyframes elasticus {
		0% {
			-webkit-transform-origin: 0% 0%;
			-ms-transform-origin: 0% 0%;
			-moz-transform-origin: 0% 0%;
			-o-transform-origin: 0% 0%;
			transform-origin: 0% 0%;
			-webkit-transform: scale(1, 0);
			-ms-transform: scale(1, 0);
			-moz-transform: scale(1, 0);
			-o-transform: scale(1, 0);
			transform: scale(1, 0);
		}
		50% {
			-webkit-transform-origin: 0% 0%;
			-ms-transform-origin: 0% 0%;
			-moz-transform-origin: 0% 0%;
			-o-transform-origin: 0% 0%;
			transform-origin: 0% 0%;
			-webkit-transform: scale(1, 1);
			-ms-transform: scale(1, 1);
			-moz-transform: scale(1, 1);
			-o-transform: scale(1, 1);
			transform: scale(1, 1);
		}
		50.1% {
			-webkit-transform-origin: 0% 100%;
			-ms-transform-origin: 0% 100%;
			-moz-transform-origin: 0% 100%;
			-o-transform-origin: 0% 100%;
			transform-origin: 0% 100%;
			-webkit-transform: scale(1, 1);
			-ms-transform: scale(1, 1);
			-moz-transform: scale(1, 1);
			-o-transform: scale(1, 1);
			transform: scale(1, 1);
		}
		100% {
			-webkit-transform-origin: 0% 100%;
			-ms-transform-origin: 0% 100%;
			-moz-transform-origin: 0% 100%;
			-o-transform-origin: 0% 100%;
			transform-origin: 0% 100%;
			-webkit-transform: scale(1, 0);
			-ms-transform: scale(1, 0);
			-moz-transform: scale(1, 0);
			-o-transform: scale(1, 0);
			transform: scale(1, 0);
		}
	}
	@keyframes elasticus {
		0% {
			-webkit-transform-origin: 0% 0%;
			-ms-transform-origin: 0% 0%;
			-moz-transform-origin: 0% 0%;
			-o-transform-origin: 0% 0%;
			transform-origin: 0% 0%;
			-webkit-transform: scale(1, 0);
			-ms-transform: scale(1, 0);
			-moz-transform: scale(1, 0);
			-o-transform: scale(1, 0);
			transform: scale(1, 0);
		}
		50% {
			-webkit-transform-origin: 0% 0%;
			-ms-transform-origin: 0% 0%;
			-moz-transform-origin: 0% 0%;
			-o-transform-origin: 0% 0%;
			transform-origin: 0% 0%;
			-webkit-transform: scale(1, 1);
			-ms-transform: scale(1, 1);
			-moz-transform: scale(1, 1);
			-o-transform: scale(1, 1);
			transform: scale(1, 1);
		}
		50.1% {
			-webkit-transform-origin: 0% 100%;
			-ms-transform-origin: 0% 100%;
			-moz-transform-origin: 0% 100%;
			-o-transform-origin: 0% 100%;
			transform-origin: 0% 100%;
			-webkit-transform: scale(1, 1);
			-ms-transform: scale(1, 1);
			-moz-transform: scale(1, 1);
			-o-transform: scale(1, 1);
			transform: scale(1, 1);
		}
		100% {
			-webkit-transform-origin: 0% 100%;
			-ms-transform-origin: 0% 100%;
			-moz-transform-origin: 0% 100%;
			-o-transform-origin: 0% 100%;
			transform-origin: 0% 100%;
			-webkit-transform: scale(1, 0);
			-ms-transform: scale(1, 0);
			-moz-transform: scale(1, 0);
			-o-transform: scale(1, 0);
			transform: scale(1, 0);
		}
	}
	.truncate-parent {
		min-width: 0;
		max-width: 100%;
	}
	.truncate-title {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		display: block;
		max-width: 100%;
	}
	.truncate-heading {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		display: block;
		max-width: 100%;
	}
</style>
