import React from "react";
import NewsTicker from "../NewsTicker";

const Tasks = ({ headlines }) => {
  return (
    <>
      <section
        className="page-header bg--cover"
        style={{
          background: "darkturquoise",
          //boxShadow: "0 4px 6px #f07",
          borderRadius: "5px",
          //border: "2px solid darkturquoise", 
          borderLeft: "5px solid #ffc107", // Add "solid" to specify the border style
          borderRight: "5px solid #ffc107",
          borderTop: "2px solid #ffc107", 
          borderBottom: "2px solid #ffc107", // Add "solid" to specify the border style
        }}
      >
        <div className="container">
          <div className="page-header__content text-center">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "30px", // Set the desired height here (e.g., 30px)
              }}
            >
              <NewsTicker headlines={headlines} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tasks;
