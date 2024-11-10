import React from 'react';
import logo from './logo.svg';
import Library from './components/resources/Library';
import Register from './components/register/register'; 
import Home from './components/home/homePage'
import './components/register/registerStyle.css'; 

// display components here
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
         {/* < home/> */}
         {/* <Register /> */}
         <Register />
        </main>
      </header>
    </div>
  );
}

export default App;
