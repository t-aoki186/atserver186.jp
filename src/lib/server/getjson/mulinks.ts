export async function fetchMulinks() {
  const res = await fetch("https://pic.atserver186.jp/json/atserver/mulinks.json");
   const data = await res.json();
  return data;
}