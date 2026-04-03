<script lang="ts">
	import { onMount } from 'svelte';
	import './components.css';

	let { showModalB = $bindable(), children } = $props();

	let visible = $state(false);
	let closing = $state(false);

	//showModalB が true になったら表示開始
	$effect(() => {
		if (showModalB) {
			visible = true;
			closing = false;
		} else if (visible) {
			//閉じるアニメーション開始
			closing = true;
			setTimeout(() => {
				visible = false;
			}, 200); //アニメーション時間と合わせる
		}
	});

	const close = () => {
		showModalB = false;
	};

	// close on Escape key when modal is visible
	onMount(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && visible) {
				close();
			}
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	});
</script>

{#if visible}
	<div
		class="modal-backdrop {closing ? 'fade-out' : 'fade-in'}"
		role="button"
		tabindex="0"
		onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && close()}
		onclick={(e) => e.target === e.currentTarget && close()}
	>
		<div class="main-modal {closing ? 'pop-out' : 'pop-in'}" role="dialog" aria-modal="true">
			{@render children?.()}
			<!--
			<div class="dialog-bottom">
				<hr class="main-hr" />
				<button onclick={close} class="link-main" type="button">
					<div class="link-main-underline">
						<i class="fa-solid fa-xmark"></i>
						<span>閉じる</span>
					</div>
				</button>
			</div>
			-->
		</div>
	</div>
{/if}

<style>
	.main-modal {
		background: white;
		border-radius: 12px;
		padding: 1.5rem;
		width: min(800px, 90vw);
		/*width: 90vw;*/
		height: 80vh;
		overflow: auto;
		position: relative;
	}
</style>
