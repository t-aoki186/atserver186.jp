export async function fetchMulinks() {
  const res = await fetch("https://pic.atserver186.jp/json/atsweb-service-list/mulinks.json");
   const data = await res.json();
  return data;
}