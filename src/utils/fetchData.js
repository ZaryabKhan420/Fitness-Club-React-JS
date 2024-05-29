import Conf from "../conf/Conf";

export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": Conf.VITE_RAPID_API_KEY_3,
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": Conf.VITE_RAPID_API_KEY_3,
    "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
