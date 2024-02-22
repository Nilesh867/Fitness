export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host':'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': 'c6ee84e828msh1884e1e8eab4d21p1fb43ejsnd5de0fd4656c'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c6ee84e828msh1884e1e8eab4d21p1fb43ejsnd5de0fd4656c',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}