const API = "https://rickandmortyapi.com/api/character/";

const getData = async (id) => {
  const apiURL = id ? `${API}${id}` : API;
  try {
    //response llama a fetch
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch Error", error);
  }
};
//try //catch//buscar para que sirve
export default getData;
