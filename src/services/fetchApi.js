export default fetchApi = async (endpoint) => {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  response = await fetch(URL`${endpoint}`);
  data = await response.json();
  return data;
};
