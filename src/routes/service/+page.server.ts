import { fetchOrganizations } from '$lib/server/getjson/services';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const results = await fetchOrganizations();
  return {
    results
  };
};
