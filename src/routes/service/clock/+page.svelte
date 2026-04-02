<script lang="ts">
	const { data } = $props();

	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';
	import Modal from '$lib/components/ModalB.svelte';

	let pageTitle = '時計';

	/*s:モーダル*/
	let showModalB = $state(false);
	let modalType = $state('');

	function openModal(type: string) {
		showModalB = true;
		modalType = type;
	}
	/*e:モーダル*/

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
		<p class="mt-4 text-lg">test</p>
	{/if}
</Modal>

<button
	class="fixed h-auto w-auto cursor-pointer rounded-xl p-5"
	style="bottom: 20px; right: 20px; background-color: var(--main-text-color); height: 50px; width: 50px; color: white;"
	onclick={() => openModal('a')}
	title="設定を開く"><i class="fa-solid fa-gear text-3xl"></i></button
>

<main class="mt-15 mr-1 ml-1 min-h-screen">
	<p>{formattedDate}</p>
	<p>{formattedTime}</p>
</main>
<ol class="main-breadcrumb container mx-auto">
	<li><a href="/">ホーム</a></li>
	<li>{pageTitle}</li>
</ol>

<style>
</style>
