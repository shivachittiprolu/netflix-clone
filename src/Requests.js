const API_KEY = "6f96ea9cb4464f42bd8190bffeeab138";

 const requests = {
     fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
     fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
     fetchTopRated: `/discover/movie?api_key=${API_KEY}&language=en-US`,
     fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
     fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
     fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
     fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
     fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
     baseUrl : "https://api.themoviedb.org/3",
     imgBaseUrl: "https://image.tmdb.org/t/p/original/"
 }
 

 export default requests;