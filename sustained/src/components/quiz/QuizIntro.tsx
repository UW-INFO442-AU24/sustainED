import React from 'react'
import { useNavigate } from 'react-router-dom';
import './quiz.css'

const QuizIntro = () => {
  const navigate = useNavigate();

  return (
    
    <div className="intro-container">
      <h1 className='intro'><b>Resource Preference Quiz</b></h1>
      <p className='s1'>Feel overwhelmed by the options? </p>
      <p className='s2'>Don't know where to start?</p>
      <p className='s3'>This short quiz will help you find the best suited resources for your classroom!</p>
      <button onClick={() => navigate('/quiz-form')} className="start-button">
        Start Quiz!
      </button>
    </div>  
    
  );
}

export default QuizIntro