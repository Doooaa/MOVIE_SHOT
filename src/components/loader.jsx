
import { HashLoader } from "react-spinners";
export  default function Loader(){

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#14213d",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "yellow", // Yellow text
      }}
    >
      <HashLoader color= "yellow" size={70} />
      <p style={{ marginTop: "20px", fontSize: "18px" }}>Loading, please wait...</p>
    </div>
  );
}