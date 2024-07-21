const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com';

export const searchRecipes = async (query, filters) => {
  const response = await fetch(`${BASE_URL}/recipes/complexSearch?apiKey=${API_KEY}&query=${query}&${filters}`);
  const data = await response.json();
  return data.results;
};