import { fetchNews } from '$lib/server/getjson/news';

export async function load() {
	const news = await fetchNews();
	return { news };
}
