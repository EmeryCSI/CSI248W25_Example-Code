//Im going to put all of my fetch requests for Pokemon API
//in here
export const fetchPokemonDetails = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch pokemon");
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};
//Request that will get us a list of pokemon
export const fetchPokemonList = async (limit = 10) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch pokemon");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw error;
  }
};
