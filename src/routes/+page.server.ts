import { fetchNews } from '$lib/server/getjson/news';
import { fetchMulinks } from '$lib/server/getjson/mulinks';

export async function load() {
    const news = await fetchNews();
    const mulinks = await fetchMulinks();

    // 新着5件のみ取得
    const latestNews = news.slice(0, 5);
    const latestMulinks = mulinks.slice(0, 5);
	const latest2Mulinks = mulinks.slice(5, 10);

    return { latestNews, latestMulinks, latest2Mulinks};
}