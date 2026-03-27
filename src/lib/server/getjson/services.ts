export async function fetchOrganizations() {
  const res = await fetch("https://pic.atserver186.jp/json/atserver/services.json");
   const data = await res.json();
  return data;
}