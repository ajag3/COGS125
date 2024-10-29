import React from 'react';
import About from './About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm Akhil Jagarlamudi.</p>
        <About />
        <a
          className="App-link"
          href="https://www.linkedin.com/in/akhiljag/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect with me on LinkedIn
        </a>
      </header>
    </div>
  );
}

export default App;

