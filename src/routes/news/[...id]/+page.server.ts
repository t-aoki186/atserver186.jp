// 移動元: [id]/+page.server.ts
import { fetchNews } from '$lib/server/getjson/news';

export async function load({ params }) {
	const news = await fetchNews();
	// params.id is now an array if using [...id]
	const id = Array.isArray(params.id) ? params.id.join('/') : params.id;
	const item = news.find((n: any) => n.id === id);

	if (!item) {
		return {
			status: 404,
			error: new Error('ニュースが見つかりませんでした')
		};
	}
	return { item };
}
