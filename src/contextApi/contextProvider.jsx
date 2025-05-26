// contextApi/contextProvider.js
import axios from "axios";
import { useEffect, useState, createContext } from "react";

export let moviesContext = createContext();

const ContextProvider = ({ children }) => {
  const [moviesData, setMoviesData] = useState({
    data: [],
    loading: false,
    error: null,
  });

  //  `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`

  useEffect(() => {
    getAllMovies();
  }, []);

  const getAllMovies = async () => {
    setMoviesData((prev) => ({ ...prev, loading: true }));
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
      );
      console.log("🎇✔✔" + response.data.results);
      setMoviesData({
        data: response.data.results,
        loading: false,
        error: null,
      });
    } catch (error) {
      setMoviesData({
        data: [],
        loading: false,
        error: error.message,
      });
    }
  };

  //get one
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(false);
  const KEY_API = "9813ce01a72ca1bd2ae25f091898b1c7";
  async function getMovieById(id) {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY_API}`
      );
      console.log("🎇✔✔one flim" + response.data);
      setMovie(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error + "from movie  one");
      setLoading(false);
    }
  }

  // const filterMoviesByLanguage = (language) => {
  //   setMoviesData((prev) => ({
  //     ...prev,
  //     data: prev.data.filter((movie) => movie.original_language === language),
  //   }));
  // };

  return (
    <moviesContext.Provider
      value={{ moviesData, getMovieById, movie, loading }}
    >
      {children}
    </moviesContext.Provider>
  );
};

export default ContextProvider;
