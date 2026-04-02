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

	$effect(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => clearInterval(interval);
	});

	const formattedDate = $derived(
		time.toLocaleDateString('ja-JP', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit'
		})
	);

	const formattedTime = $derived(time.toLocaleTimeString('ja-JP')); //時間
</script>

<svelte:head>
	<title>{pageTitle} | {data.site_title}</title>
	<meta property="og:title" content="{pageTitle} | {data.site_title}" />
</svelte:head>

<Modal bind:showModalB>
	{#if modalType === 'a'}
		<button onclick={toggleNav} class="cursor-pointer">
			{@html navState.visible ? '<i class="fa-solid fa-eye-slash"></i>非表示' : '<i class="fa-solid fa-eye"></i>表示'}
		</button>
	{/if}
</Modal>

<button class="tool-setting-btn" onclick={() => openModal('a')} title="設定を開く"
	><i class="fa-solid fa-gear text-3xl"></i></button
>

<main class="mr-1 ml-1 flex min-h-screen flex-col">
	<div class="mx-auto my-auto landing-[1.2] text-center">
		<p class="text-3xl">{formattedDate}</p>
		<p class="text-9xl mt-15">{formattedTime}</p>
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
