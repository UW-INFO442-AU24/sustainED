import React from 'react'
import '../Register/registerStyle.css'

const HomeCards = () => {
  return (
        <div className="cards-container">
            <div className="card" id="bootstrap-override">
                <p><strong>Resource Library</strong></p>
                <p>Search through our plethora of resources</p>
                <a className="card-button" href='/library'> Browse Here</a>
            </div>
            <div className="card" id="bootstrap-override">
                <p><strong>Events</strong></p>
                <p>Explore and sign up for events in your areas</p>
                <a className="card-button" href='/events'> Browse Here</a>
            </div>
            <div className="card" id="bootstrap-override">
                <p><strong>Unsure where to begin?</strong></p>
                <p>Take our quiz and recommendations on resources </p>
                <a className="card-button" href='/quiz-intro'> Start Quiz</a>
            </div>
        </div>
  )
}

export default HomeCards
