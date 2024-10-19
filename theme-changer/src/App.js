// src/App.js
import React from 'react';
import './App.css'; // Add your styles here
import ThemeSwitcher from './components/ThemeSwitcher';

const App = () => {
  return (
    <div className="App">
      <h1>Theme Switcher Example</h1>
      <ThemeSwitcher />
    </div>
  );
};

export default App;
