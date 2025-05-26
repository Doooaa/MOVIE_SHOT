import React, { useContext } from "react";
import { moviesContext } from "../contextApi/contextProvider";
import { MdStar } from "react-icons/md";
const Slider = () => {
  const { moviesData } = useContext(moviesContext);
  moviesData.data.slice(0, 10);

  const Top20Movies = [...moviesData.data]
    .sort((a, b) => {
      return b.vote_average - a.vote_average;
    })
    .slice(0, 20);
  console.log(Top20Movies);
  if( !moviesData ) return <Loader />;
  return (
    <div>
      <div
        style={{
          // maxWidth: "1400px",
          margin: "0 auto",
          padding: "40px 20px",
          backgroundColor: "#669bbc",
          
        }}
      >
        <h3
          style={{
            fontSize: "2.5rem",
            // color: "#0d47a1",
            letterSpacing: "4px",
            textAlign: "center",
            fontWeight: "700",
            marginBottom: "40px",
            position: "relative",
            paddingBottom: "15px",
           fontFamily: "'Anton', sans-serif"
          }}
        >
          Top Rated Movies
          <span
            style={{
              position: "absolute",
              bottom: "0",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "4px",
              backgroundColor: "yellow",
              borderRadius: "2px",
            }}
          ></span>
        </h3>

        <swiper-container
          space-between="10"
          
         slides-per-view="4"
          
          navigation="true"
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1, // Show 1 slide on extra small screens
            },
            640: {
              slidesPerView: 2, // Show 2 slides on small screens
            },
            768: {
              slidesPerView: 3, // Show 3 slides on medium screens
            },
            1024: {
              slidesPerView: 4, // Show 4 slides on large screens
            },
          }}
          style={{
            "--swiper-navigation-color": "#0d47a1",
            "--swiper-pagination-color": "yellow",
            "--swiper-navigation-size": "30px",
            // paddingBottom: "100px",
            marginBottom: "20px",
          }}
        >
          {Top20Movies.map((Movie, index) => (
            <swiper-slide key={index}>
              <div
                style={{
                  position: "relative",
                  width: "300px",

                  height: "420px",
                  margin: "0 auto",
                  overflow: "hidden",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  marginBottom: "60px",
                }}
                className="movie-card"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${Movie.poster_path}`}
                  alt={`Movie ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  className="movie-image"
                />
                <div className="movie-overlay">
                  
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "white",
                      marginTop: "10px",
                    }}
                  >
                  {Movie.vote_average}
                    <MdStar
                      style={{
                        color: "yellow",
                        marginLeft: "5px",
                        fontSize: "20px",
                      }}
                    />
               
                  </p>
                </div>
              </div>
            </swiper-slide>
          ))}
        </swiper-container>

        <style jsx>{`
          .movie-card:hover {
            transform: translateY(-16px);
            box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
          }

          .movie-card:hover .movie-image {
            transform: scale(1.06);
          }

          .movie-card:hover .movie-overlay {
            transform: translateY(0);
            opacity: 1;
          }
          .movie-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 1.5rem;
            opacity: 0;
            transition: all 0.3s ease;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Slider;
