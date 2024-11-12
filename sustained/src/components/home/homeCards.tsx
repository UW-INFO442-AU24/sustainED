import React from 'react'
import '../Register/registerStyle.css'

const HomeCards = () => {
  return (
        <div className="cards-container">
            <div className="card" id="bootstrap-override">
                <p><strong>Resource Library</strong></p>
                <p>Search through our plethora of resources</p>
                <button className="card-button">Browse Here</button>
            </div>
            <div className="card" id="bootstrap-override">
                <p><strong>Events</strong></p>
                <p>Explore and sign up for events in your areas</p>
                <button className="card-button">Browse Here</button>
            </div>
            <div className="card" id="bootstrap-override">
                <p><strong>Unsure where to begin?</strong></p>
                <p>Take our quiz to get recommendations on resources for you to use</p>
                <button className="card-button">Start quiz</button>
            </div>
        </div>
  )
}

export default HomeCards
