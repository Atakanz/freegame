const API_URL = "https://www.freetogame.com/api/games";
let requestCount = 0;

export async function fetchData({ category, subtitle }) {
  if (requestCount >= 4) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    requestCount = 0;
  }
  console.log(subtitle.toLowerCase());
  try {
    let response;

    if (category && subtitle) {
      response = await fetch(
        `${API_URL}?${category.toLowerCase()}=${subtitle.toLowerCase()}`
      );
    } else {
      response = await fetch(API_URL);
    }

    const statusCode = response.status;
    const data = await response.json();

    requestCount++;

    if (statusCode === 200) {
      return data;
    } else if (statusCode === 404) {
      throw new Error("Object not found: Game or endpoint not found");
    } else if (statusCode === 500) {
      throw new Error("Something wrong on our end (unexpected server errors)");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
