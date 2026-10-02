/*
import { fetchNews } from '$lib/server/getjson/news';

export async function load() {
	const news = await fetchNews();
	return { news };
}
*/

import { getAllPosts } from '$lib/news';

export async function load() {
	const posts = await getAllPosts();
	return { posts };
}
