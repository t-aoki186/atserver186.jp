import { fetchNews } from '$lib/server/getjson/news';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async () => {
	const results = await fetchNews();
	return {
		results
	};
};
