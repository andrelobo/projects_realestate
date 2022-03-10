import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': '67d5af03e7mshfafeff08510bbc4p1ad20cjsnee3edeb325c8',
    },
  });
    
  return data;
}