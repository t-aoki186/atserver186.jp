<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<main>
	<section class="top-section"></section>
	<section class="container mx-auto p-5 md:p-0">
		<h1 class="my-10 text-3xl">・お知らせ</h1>
		<hr class="main-hr" />
	</section>
	<section class="container mx-auto p-5 md:p-0">
		<h1 class="my-10 text-3xl">・ツール</h1>
		<hr class="main-hr" />
	</section>
	<section class="container mx-auto p-5 md:p-0">
		<h1 class="my-10 text-3xl">・サービス</h1>
		<hr class="main-hr" />
	</section>
	<section class="container mx-auto p-5 md:p-0">
		<h1 class="my-10 text-3xl">・このサイトについて</h1>

		<div class="md:grid md:grid-cols-2">
			<div class="flex">
				<p class="my-auto">
					ATSERVERは様々なWebサービスを提供するサイトです。自作SNS・リンク共有サービス・掲示板・ブログ・その他ツールなどのWebサービスを展開しています。
					<br />
					当サイトは、個人が趣味で運営しているものであり、営利目的ではありません。
					<br />
					何か問題が発生した場合や質問がある場合は、お問い合わせフォームからご連絡ください。
				</p>
			</div>
			<div class="flex rounded-2xl bg-white py-10 mt-5 md:mt-0">
				<img
					src="https://pic.atserver186.jp/img/atserver/root/alft_h.png"
					alt="ATSERVERロゴ"
					class="m-auto ml-auto block h-auto w-[30%]"
				/>
			</div>
		</div>

		<br />

		<a href={resolve('/contact')} class="link-main mb-10">
			<div class="link-main-underline">
				<span>問い合わせる</span>
				<i class="fa-solid fa-arrow-right-long"></i>
			</div>
		</a>

		<hr class="main-hr" />
	</section>
	<section class="container mx-auto p-5 md:p-0">
		<h1 class="my-10 text-3xl">・アクセスカウンター</h1>
		<img
			src="https://count.atserver186.jp/@atserver186.jp?name=atserver186.jp&theme=original-old&padding=8&offset=0&align=top&scale=1&pixelated=1&darkmode=0"
			class="mx-auto mb-8"
			alt="アクセスカウンター"
		/>
		<a href="https://moecounter.atserver186.jp/" class="link-main mb-10" target="_blank">
			<div class="link-main-underline">
				<span>このアクセスカウンターを使う</span>
				<i class="fa-solid fa-up-right-from-square"></i>
			</div>
		</a>
		<hr class="main-hr" />
	</section>
	<section class="container mx-auto p-5 md:p-0">
		<button type="button" class="">アニメーションをもう一度再生する</button>
		<a href={resolve('/')} class="">開発を担当したサービス</a>
	</section>
</main>
