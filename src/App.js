import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main style={{ padding: '2rem', maxWidth: 900, margin: '1rem auto', color: '#cbd5e1' }}>
        <h1>Welcome to MyFood</h1>
        <p>This is a demo page to test the Navbar component. Resize the browser to see the mobile menu.</p>
      </main>
    </div>
  );
}

export default App;
