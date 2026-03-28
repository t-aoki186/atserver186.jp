import { fetchNews } from "$lib/server/getjson/news";

export async function load() {
	const news = await fetchNews();

	//新着5件のみ取得
	const latest = news.slice(0, 5);

	return { latest };
}
