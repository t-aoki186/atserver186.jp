export async function fetchServices() {
  const res = await fetch("https://pic.atserver186.jp/json/atsweb-service-list/services.json");
   const data = await res.json();
  return data;
}