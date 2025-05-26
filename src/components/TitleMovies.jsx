import React from 'react';

const TitleMovies = ({fontSize="70px" ,color="white",fontSizev="100px" ,colorV="yellow"}) => {
    return (
        <div>
              <h1
          style={{
            fontSize:fontSize ,
            color: color,
            letterSpacing: "8px",
            width: "100%",
            textAlign: "center",
            fontFamily: "'Anton', sans-serif"
          }}
        >
          MO<span style={{ fontSize: fontSizev, color:colorV }}>V</span>IES
        </h1>
        </div>
    );
}

export default TitleMovies;
