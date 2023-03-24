import React from "react";
const Home = () => {

  return (
    <>
      <div className="HomeMainDiv">
        <div className="content">
          <div className="search">
            <div className="container">
              <h1 className="heading">Search Your Favorite Place</h1>
              <h3 className="heading">
                Find the world’s largest collection of tours & travels packages
              </h3>
              <div className="card">
                <div className="search-container">
                  <input type="text" id="search-box" placeholder="Search..." />
                  <button type="submit" id="search-btn">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
