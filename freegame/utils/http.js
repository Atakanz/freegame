const API_URL = "https://www.freetogame.com/api/games";
let requestCount = 0;

export async function fetchData(filterOptions) {
  if (requestCount >= 4) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    requestCount = 0;
  }
  try {
    let response;

    if (filterOptions.category && typeof filterOptions === "object") {
      response = await fetch(
        `${API_URL}?${filterOptions.category.toLowerCase()}=${filterOptions.subTitle.toLowerCase()}`
      );
    } else if (filterOptions.length === 3) {
      response = await fetch(
        `${API_URL}?${filterOptions[0].category.toLowerCase()}=${filterOptions[0].subTitle.toLowerCase()}&${filterOptions[1].category.toLowerCase()}=${filterOptions[1].subTitle.toLowerCase()}&${filterOptions[2].category.toLowerCase()}=${filterOptions[2].subTitle.toLowerCase()}`
      );
    } else if (filterOptions.length === 2) {
      response = await fetch(
        `${API_URL}?${filterOptions[0].category.toLowerCase()}=${filterOptions[0].subTitle.toLowerCase()}&${filterOptions[1].category.toLowerCase()}=${filterOptions[1].subTitle.toLowerCase()}`
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
