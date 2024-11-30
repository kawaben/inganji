import React from 'react';
import TopMenuBar from './components/TopMenuBar';
import './App.css';

function App() {
  return (
    <div>
      <TopMenuBar />
      <main>
        <section id="home">
          <h1>Welcome to Home</h1>
        </section>
        <section id="about">
          <h1>About Us</h1>
        </section>
        <section id="services">
          <h1>Our Services</h1>
        </section>
        <section id="contact">
          <h1>Contact Us</h1>
        </section>
      </main>
    </div>
  );
}

export default App;
