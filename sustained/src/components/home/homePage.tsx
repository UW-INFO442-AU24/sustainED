import React from 'react';
import '../Register/registerStyle.css';
import HomeCards from './homeCards';
import homeImage from './homepage-image.jpg';
import Register from'../Register/register'; 

const Home = () => {
  return (
    <div className="container-fluid" id="mainContainer">
      <div className="row spaced-section text-center">
        <div className="col-md-6 col-sm-12" id="description">
          <h1>SustainED</h1>
          <p>
            Many primary and secondary curricula struggle to incorporate educational lessons and resources regarding environmentalism.
          </p>
          <p>
            To change this, we decided to host a catalog of resources for students to use in preserving our future.
          </p>
        </div>
        <div className="col-md-4 col-sm-12" id="home-image-id">
          <img
            src={homeImage}
            alt="planet surrounded by the recycling logo"
            className="img-fluid" 
          />
        </div>
      </div>

      <div className="row text-center mt-4">
        <div className="col">
          <HomeCards />
        </div>
      </div>

      <div className="row spaced-section text-center">
        <div className="col-md-6 col-sm-12">
          <Register />
        </div>
        <div className="col-md-6 col-sm-12" id="description">
          <h2>Why register?</h2>
          <p>
            By registering you will be able to save resources that you want to explore later, without risking losing them.
          </p>
          <p>
            Not only this, but you will also be able to create a profile where your quiz results await you
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
