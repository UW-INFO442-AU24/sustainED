import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import QuizIntro from './components/quiz/QuizIntro';
import QuizForm from './components/quiz/QuizForm';
import QuizResults from './components/quiz/QuizResults';
import Library from './components/resources/Library';
import Register from './components/Register/register'; 
import Home from './components/home/homePage'
import EventPage from './components/events/eventpage';
import './components/Register/registerStyle.css'; 
import { NextUIProvider } from '@nextui-org/react';

// display components here
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <main>
        <NextUIProvider> {/* this is just to render the components from nextui for the quiz */}
            <Router>
              <Navbar />
              <Routes>
                <Route path='/' element={<Navigate to="/home" />} /> {/* when npm start is ran, the default page shown is the home component */}
                <Route path='/home' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/library' element={<Library />} />
                <Route path="/quiz-intro" element={<QuizIntro />} />
                <Route path="/quiz-form" element={<QuizForm />} />
                <Route path="/quiz-results" element={<QuizResults />} />
                <Route path="/events" element={<EventPage />} />
              </Routes>
            </Router>
          </NextUIProvider>
        </main>
      </header>
    </div>
  );
}

export default App;
