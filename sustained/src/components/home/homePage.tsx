import React from 'react';
import '../Register/registerStyle.css';
import HomeCards from './homeCards';
import homeImage from './home-image.png';

const Home = () => {
  return (
    <div>
      <div className="row spaced-section text-center">
        <div className="col-md-7" id="description">
          <h1>SustainED</h1>
          <p>
            Many primary and secondary curricula struggle to incorporate educational lessons and resources regarding environmentalism.
          </p>
          <p>
            To change this, we decided to host a catalog of resources for students to use in preserving our future.
          </p>
        </div>
        <div className="col-md-5">
          <img src={homeImage} alt="hands holding the earth"></img>
        </div>
      </div>
      <div className="row text-center mt-4">
        <div className="col">
          <HomeCards />
        </div>
      </div>
    </div>
  );
};

export default Home;
