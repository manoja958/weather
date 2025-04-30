import React from 'react';
import Weather from './components/Weather'; 
import './style.css'; 

function App() {
  return (
    <div>
      <div className="app-container"></div>
      <h1>Welcome to Home Page</h1>
      <Weather />
    </div>
  );
}
