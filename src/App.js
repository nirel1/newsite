import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src="/logo.png" className="App-logo" alt="logo" sizes="10%" />
      <div className="App-content">
        <p>
          Strobe is a ZK-proof generation network.
          Clients generate proofs with diverse alogrithms, time, cost and centralization preferences.
          Nodes run hardware to earn rewards with similar preference configurability.
          Our network maximizes for hardware uptime, efficient pricing and proof optimization.
          Strobe is currently available on an invite-only basis.
        </p>
      </div>
      <div className="App-contact">
        <a href="mailto:contact@strobe.space">contact@strobe.space</a>
      </div>
    </div>
  );
}

export default App;