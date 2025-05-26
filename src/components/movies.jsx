import { useContext } from "react";
import { moviesContext } from "../contextApi/contextProvider";
import Movie from "./movie";
import TitleMovies from "./TitleMovies";
import Loader from "../components/loader"

const Movies = () => {
  const { moviesData} = useContext(moviesContext);

  
  if (moviesData.loading) {
    return <Loader></Loader>;
  }

  if (moviesData.error) {
    return <p>Error: {moviesData.error}</p>;
  }

  return (
    <>
      {/* <button >Filter by English</button> */}
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
        <TitleMovies />
      
        {moviesData.data.map((m) => (
          <Movie movie={m} key={m.id} />
        ))}
      </div>
    </>
  );
};

export default Movies;

