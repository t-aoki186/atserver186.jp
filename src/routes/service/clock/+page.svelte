<script lang="ts">
	const { data } = $props();

	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';
	import Modal from '$lib/components/ModalB.svelte';
	import { navState } from '$lib/stores/navState.svelte.js';

	let pageTitle = '時計';

	/*s:モーダル*/
	let showModalB = $state(false);
	let modalType = $state('');

	function openModal(type: string) {
		showModalB = true;
		modalType = type;
	}
	/*e:モーダル*/
	/*s:共通パーツの表示・非表示切り替え*/
	function toggleNav() {
		navState.visible = !navState.visible;
	}
	/*e:共通パーツの表示・非表示切り替え*/
	/*s:時計表示用*/
	let time = $state(new Date()); //現在時刻をリアクティブな状態として定義
	let timeZone = $state('Asia/Tokyo'); //デフォルトのタイムゾーン

	//タイムゾーンの選択肢
	const zones = [
		{ label: '日本(東京)', value: 'Asia/Tokyo' },
		{ label: 'アメリカ(ニューヨーク)', value: 'America/New_York' },
		{ label: 'イギリス(ロンドン)', value: 'Europe/London' },
		{ label: 'フランス(パリ)', value: 'Europe/Paris' },
		{ label: 'ドイツ(ベルリン)', value: 'Europe/Berlin' },
		{ label: 'オーストラリア(シドニー)', value: 'Australia/Sydney' },
		{ label: '中国(北京)', value: 'Asia/Shanghai' },
		{ label: '韓国(ソウル)', value: 'Asia/Seoul' },
		{ label: 'UTC', value: 'UTC' }
	];

	$effect(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => clearInterval(interval);
	});

	//年月日
	const formattedDate = $derived(
		time.toLocaleDateString('ja-JP', {
			timeZone,
			year: 'numeric',
			month: '2-digit',
			day: '2-digit'
		})
	);

	//時間
	const formattedTime = $derived(
		time.toLocaleTimeString('ja-JP', {
			timeZone
		})
	);
</script>

<svelte:head>
	<title>{pageTitle} | {data.site_title}</title>
	<meta property="og:title" content="{pageTitle} | {data.site_title}" />
</svelte:head>

<Modal bind:showModalB>
	{#if modalType === 'a'}
		<button onclick={toggleNav} class="cursor-pointer">
			{@html navState.visible
				? '<i class="fa-solid fa-eye-slash"></i>非表示'
				: '<i class="fa-solid fa-eye"></i>表示'}
		</button>
		<select bind:value={timeZone}>
			{#each zones as zone}
				<option value={zone.value}>{zone.label}</option>
			{/each}
		</select>
	{/if}
</Modal>

<button class="tool-setting-btn" onclick={() => openModal('a')} title="設定を開く"
	><i class="fa-solid fa-gear text-3xl"></i></button
>

<main class="mr-1 ml-1 flex min-h-screen flex-col">
	<div class="landing-[1.2] mx-auto my-auto text-center">
		<p class="text-3xl">{formattedDate}</p>
		<p class="mt-15 text-9xl">{formattedTime}</p>
	</div>
</main>
{#if navState.visible}
	<ol class="main-breadcrumb container mx-auto items-center">
		<li><a href="/">ホーム</a></li>
		<li>{pageTitle}</li>
	</ol>
{/if}

<style>
	.tool-setting-btn {
		position: fixed;
		cursor: pointer;
		bottom: 20px;
		right: 20px;
		height: 50px;
		width: 50px;
		border-radius: 50%;
		background-color: var(--main-bg-color);
		box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
		border: 1px solid #ccc;
	}
</style>
