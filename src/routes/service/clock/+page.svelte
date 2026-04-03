<script lang="ts">
	const { data } = $props();

	// import { onMount } from 'svelte';
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
	/*s:テーマ切り替え*/
	let isDark = $state(false);

	const toggleMode = () => {
		isDark = !isDark;
	};
	/*e:テーマ切り替え*/
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

	// フルスクリーン状態
	let isFullscreen = $state(false);

	// フルスクリーン切替関数
	function toggleFullscreen() {
		if (!isFullscreen) {
			document.body.requestFullscreen();
		} else {
			document.exitFullscreen();
		}
	}

	// フルスクリーン状態の監視
	function fullscreenChangeHandler() {
		isFullscreen = !!document.fullscreenElement;
	}

	$effect(() => {
		if (showModalB && modalType === 'settings') {
			const btn = document.getElementById('fullscreen-toggle-btn');
			if (btn) {
				btn.onclick = toggleFullscreen;
			}
			document.addEventListener('fullscreenchange', fullscreenChangeHandler);
			// クリーンアップ
			return () => {
				document.removeEventListener('fullscreenchange', fullscreenChangeHandler);
			};
		}
	});
</script>

<svelte:head>
	<title>{pageTitle} | {data.site_title}</title>
	<meta property="og:title" content="{pageTitle} | {data.site_title}" />
</svelte:head>

<Modal bind:showModalB>
	{#if modalType === 'settings'}
		<div class="link_btn_list">
			<div class="link_btn_list_item">
				<button onclick={toggleNav} class="dash-link cursor-pointer">
					{@html navState.visible
						? '<p>UI</p><i class="fa-solid fa-eye-slash"></i>非表示'
						: '<p>UI</p><i class="fa-solid fa-eye"></i>表示'}
				</button>
			</div>
			<div class="link_btn_list_item" class:is-dark={isDark}>
				<button onclick={toggleMode} class="dash-link cursor-pointer">
					{@html isDark
						? '<p>テーマ</p><i class="fa-solid fa-sun"></i>'
						: '<p>テーマ</p><i class="fa-solid fa-moon"></i>'}
				</button>
			</div>
			<div class="link_btn_list_item">
				<button id="fullscreen-toggle-btn" class="dash-link cursor-pointer">
					{@html isFullscreen
						? '<p>最小化</p><i class="fa-solid fa-compress"></i>'
						: '<p>最大化</p><i class="fa-solid fa-expand"></i>'}
				</button>
			</div>
		</div>
		<label class="timezone-selector">
			<select bind:value={timeZone}>
				{#each zones as zone}
					<option value={zone.value}>{zone.label}</option>
				{/each}
			</select>
		</label>
	{/if}
</Modal>

<button class="tool-setting-btn" onclick={() => openModal('settings')} title="設定を開く"
	><i class="fa-solid fa-gear text-3xl"></i></button
>

<main class="clock-container flex min-h-screen flex-col" class:is-dark={isDark}>
	<div class="landing-[1.2] mx-auto my-auto text-center">
		<p class="clock-date">{formattedDate}</p>
		<p class="clock-time mt-15">{formattedTime}</p>
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

	.clock-container {
		background-color: var(--main-bg-color);
		color: var(--main-text-color);
	}

	.clock-container.is-dark {
		background-color: #1f1f1f;
		color: var(--main-bg-color);
	}

	.clock-date {
		font-size: var(--text-4xl);
		line-height: var(--text-4xl--line-height);
	}

	.clock-time {
		font-size: var(--text-9xl);
		line-height: var(--text-9xl--line-height);
	}

	@media (max-width: 640px) {
		.clock-date {
			font-size: var(--text-2xl);
			line-height: var(--text-2xl--line-height);
		}

		.clock-time {
			font-size: var(--text-6xl);
			line-height: var(--text-6xl--line-height);
		}
	}

	.timezone-selector {
		display: inline-flex;
		align-items: center;
		position: relative;
	}

	.timezone-selector::after {
		position: absolute;
		right: 15px;
		width: 10px;
		height: 7px;
		background-color: #535353;
		clip-path: polygon(0 0, 100% 0, 50% 100%);
		content: '';
		pointer-events: none;
	}

	.timezone-selector select {
		appearance: none;
		min-width: 230px;
		height: 2.8em;
		padding: 0.4em calc(0.8em + 30px) 0.4em 0.8em;
		border: 1px solid #d0d0d0;
		border-top-right-radius: 10px;
		border-top-left-radius: 10px;
		background-color: #fff;
		color: #333333;
		font-size: 1em;
		cursor: pointer;
	}

	/* サービス一覧リンク */
	.link_btn_list {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		padding: 20px 0;
	}

	.link_btn_list_item {
		background-color: var(--main-bg-color);
		text-decoration: none;
		width: 48%;
		max-width: 10vh;
		flex: 0 0 auto;
		border-radius: 10px;
		padding: 15px;
		transition: 0.3s;
		text-align: center;
	}

	.link_btn_list_item:hover {
		transform: scale(1.03);
		opacity: 0.9;
		background-color: #9c9a9a;
	}

	.dash-link {
		text-decoration: none;
	}
</style>
