import React from 'react';
import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Resume from './components/Resume';
import Profile from './components/Profile';
import Skills from './components/Skills';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Profile />
        <Skills />
        <Project />
        <Resume />
      </div>
    </div>
  );
}

export default App;
