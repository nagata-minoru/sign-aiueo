import React, { useState } from 'react';
import './App.css';

const signImages = {
  'あ': './signs/a.png',
  'い': './signs/i.png',
  'う': './signs/u.png',
  'え': './signs/e.png',
  'お': './signs/o.png'
};

function App() {
  const [currentSign, setCurrentSign] = useState('あ');

  const handleNext = () => {
    const keys = Object.keys(signImages);
    const currentIndex = keys.indexOf(currentSign);
    const nextIndex = (currentIndex + 1) % keys.length;
    setCurrentSign(keys[nextIndex]);
  };

  return (
    <div className="App">
      <h1>手話学習アプリ「あいうえお」</h1>
      <div className="sign-display">
        <img src={signImages[currentSign]} alt={currentSign} />
        <p>{currentSign}</p>
      </div>
      <button onClick={handleNext}>次へ</button>
    </div>
  );
}

export default App;
