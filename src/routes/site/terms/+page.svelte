<script>
	const { data } = $props();

	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';

	let pageTitle = '利用規約';
</script>

<svelte:head>
	<title>{pageTitle} | {data.site_title}</title>
</svelte:head>

<main class="mt-15 mr-1 ml-1 min-h-screen">
	<div class="container m-auto mt-25 border-b-2 border-b-(--main-text-color)">
		<p class="tf26-page-title" style="color: black; margin-bottom: 0;">{pageTitle}</p>
	</div>
	<section class="container mx-auto mt-25 mb-25">
		<div class="flex flex-col">
            <a href="/site/privacy" class="underline mb-4 font-bold"><i class="fa-solid fa-arrow-up-right-from-square text-sm mr-1"></i>プライバシーポリシーはこちら</a>
			<p class="mb-2">
				ウェブサイト「ATSERVER」（以下「本サイト」といいます）が提供するサービス（以下「本サービス」といいます）の利用条件を定めるものです。
			</p>
			<h3 class="mb-2 text-lg font-bold">第1条（適応）</h3>
			<p class="mb-2">
				本規約は、本サービスの利用者（以下「ユーザー」といいます）と本サイト運営者との間の本サービスの利用に関わる一切の関係に適用されるものとします。
			</p>
			<h3 class="mb-2 text-lg font-bold">第2条（提供サービス内容）</h3>
			<p class="mb-2">
				本サービスは、ユーザーがアップロードした画像ファイルをWebP形式に変換するツール、および情報の閲覧、お問い合わせフォームの提供を行います。
				<br />
				本サービスは、原則として無料で利用可能です。
			</p>
			<h3 class="mb-2 text-lg font-bold">第3条（データの取り扱いと消去）</h3>
			<p class="mb-2">
				ユーザーが変換のためにアップロードしたファイルおよび変換後のファイルは、以下のタイミングでサーバー内から完全に削除されます。
				<br />
				ユーザーによるダウンロードが完了した時点 アップロードから30分が経過した時点 運営者は、削除されたデータの復元には一切応じられません。
			</p>
			<h3 class="mb-2 text-lg font-bold">第4条（禁止事項）</h3>
			<p class="mb-2">
				ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
				法令または公序良俗に違反する行為
				<br />
				本サービスのサーバーやネットワークの機能を破壊したり、妨害したりする行為 猥褻、児童ポルノ、または他者の権利を侵害する画像をアップロードする行為
				<br />
				その他、運営者が不適切と判断する行為
			</p>
			<h3 class="mb-2 text-lg font-bold">第5条（免責事項）</h3>
			<p class="mb-2">
				本サービスは、変換の正確性や特定の目的への適合性を保証するものではありません。
				<br />
				本サービスの利用によりユーザーまたは第三者に生じた損害（データ消失、システムエラー等）について、運営者は一切の責任を負わないものとします。
			</p>
		</div>
	</section>
</main>
<ol class="main-breadcrumb container mx-auto">
	<li><a href="/">ホーム</a></li>
	<li>{pageTitle}</li>
</ol>
