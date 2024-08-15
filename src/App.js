import React, { useState } from 'react';
import './App.css';
import SVGComponent from './component/SVGComponent'; 

const culturalSites = {
  'Jammu_and_Kashmir_disp': [
    { name: 'Site A', cx: 150, cy: 200 },
    { name: 'Site B', cx: 180, cy: 250 },
    { name: 'Site C', cx: 200, cy: 220 },
  ],

};

function App() {
  const [selectedState, setSelectedState] = useState(null);

  const handleStateClick = (e) => {
    setSelectedState(e);
  };

  const handleCloseClick = () => {
    setSelectedState(null);
  };

  return (
    <div className="App">
      <div className={`map-container ${selectedState ? 'blur' : ''}`}>
        <SVGComponent handleStateClick={handleStateClick} selectedState={selectedState} culturalSites={culturalSites} />
      </div>
      {selectedState && (
        <div className="cultural-sites-overlay">
          <button onClick={handleCloseClick}>Close</button>
          <h2>Cultural Sites in {selectedState.replace('_disp', '').replace(/_/g, ' ')}</h2>
          <img src='/ssssss.png' alt='im'/>
          <ul>
            {culturalSites[selectedState].map((site, index) => (
              <li key={index}>{site.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;