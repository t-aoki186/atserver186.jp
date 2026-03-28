import { fetchServices } from '$lib/server/getjson/services';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const results = await fetchServices();
  return {
    results
  };
};
