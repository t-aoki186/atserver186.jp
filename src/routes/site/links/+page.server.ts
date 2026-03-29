import { fetchMulinks } from '$lib/server/getjson/mulinks';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const results = await fetchMulinks();
	return {
		results
	};
};
