<script lang="ts">
	import { resolve } from '$app/paths';

</script>

<main>
	<section class="top-section"></section>
	<section class="container mx-auto">
		<h1>・お知らせ</h1>
		<hr class="main-hr" />
	</section>
	<section class="container mx-auto">
		<h1>・ツール</h1>
		<hr class="main-hr" />
	</section>
	<section class="container mx-auto">
		<h1>・サービス</h1>
		<hr class="main-hr" />
	</section>
	<section class="container mx-auto">
		<h1>・このサイトについて</h1>
		<hr class="main-hr" />
	</section>
	<section class="container mx-auto">
		<h1>・アクセスカウンター</h1>
		<img
			src="https://count.atserver186.jp/@atserver186.jp?name=atserver186.jp&theme=original-old&padding=8&offset=0&align=top&scale=1&pixelated=1&darkmode=0"
			class="mx-auto mb-8"
			alt="アクセスカウンター"
		/>
		<a href="https://count.atserver186.jp/">このアクセスカウンターを使う</a>
        <hr class="main-hr" />
	</section>
	<section class="container mx-auto">
		<button type="button" class="">アニメーションをもう一度再生する</button>
        <a href={resolve('/')} class="">開発を担当したサービス</a>
	</section>
</main>
