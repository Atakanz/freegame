const API_URL = "https://www.freetogame.com/api/games";
export async function fetchData() {
  const response = await fetch(API_URL).then((res) => res.json());
  return response;
}
