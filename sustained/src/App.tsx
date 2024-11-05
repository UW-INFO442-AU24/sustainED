import React from 'react';
import logo from './logo.svg';
import './App.css';
import Library from './components/resources/Library';
import Register from './components/Register/register'; 

// display components here
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
         {/* <Register /> */}
         <Library />
        </main>
      </header>
    </div>
  );
}

export default App;
