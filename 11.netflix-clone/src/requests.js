const apikey = "ff857fa088b6621a317ef9250f4f0771";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${apikey}`,
  fetchNetflixOriginal: `/discover/tv?api_key=${apikey}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${apikey}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${apikey}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${apikey}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${apikey}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${apikey}&with_genres=10749`,
  fetchDocumentries: `/discover/movie?api_key=${apikey}&with_genres=99`,
};

export default requests;
