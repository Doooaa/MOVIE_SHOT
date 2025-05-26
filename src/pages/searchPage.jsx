import React, { useContext, useEffect, useState } from "react";
import { moviesContext } from "../contextApi/contextProvider";
import Movie from "../components/movie";
import Loader from '../components/loader'
const SearchPage = () => {
  const { moviesData } = useContext(moviesContext);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (moviesData.data) {
      setFilteredMovies(moviesData.data); // Show all on initial load
    }
  }, [moviesData.data]);

  function handleSearch() {
    const filtered = moviesData.data.filter((m) =>
      m.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredMovies(filtered);
  }
  function handleOnChange(e) {
    const value = e.target.value;
    setSearchValue(value);

    const filtered = moviesData.data.filter((m) =>
      m.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredMovies(filtered);
  }

  if (moviesData.loading) {
    return <Loader />;
  }

  if (moviesData.error) {
    return <p>Error: {moviesData.error}</p>;
  }

  return (
    <div >
     <div style={{paddingTop: "200px", display: "flex", flexDirection: "column", alignItems: "center" , backgroundColor: "#14213d", }}>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" , flexDirection: { sm: "column", md: "row" } }}>
        <input
          type="text"
            placeholder="Search for a movie..."
          value={searchValue}
         onChange={handleOnChange}
          style={{ padding: "8px",  maxWidth: "250px" }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "8px 16px",
            backgroundColor: "#fca311",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          Search
        </button>
      </div>
     </div>

      <div
        style={{
          backgroundColor: "#14213d",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px 24px",
          justifyContent: "center",
          alignItems: "center",
          padding: "80px 18px",
        }}
      >
        {filteredMovies.length > 0 ? (
          filteredMovies.map((m) => <Movie movie={m} key={m.id} />)
        ) : (
          <p style={{ color: "white" }}>No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
