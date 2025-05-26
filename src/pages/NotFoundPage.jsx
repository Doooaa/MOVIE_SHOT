import React from "react";
import { MdErrorOutline } from "react-icons/md";
const NotFoundPage = () => {
  return (
    <div>
      <div style={styles.parentDiv}>
        <MdErrorOutline style={styles.iconStyle} />
        <h3 style={styles.heading}>Not Found Page</h3>
      </div>
    </div>
  );
};

export default NotFoundPage;

const styles = {
  parentDiv: {
    backgroundColor: " var(--primary-bg)",
    height: "100dvh",
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  iconStyle: { textAlign: "center", fontSize: "90px", color: "red" },
  heading: { fontSize: "35px", color: "white" },
};
