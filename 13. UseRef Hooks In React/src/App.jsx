import React, { useRef } from 'react';
import './App.css';

const App = () => {
  const purvajit = useRef(null);

  const handelplay = () => purvajit.current.play();
  const handelpause = () => purvajit.current.pause();
  const handelcontrolADD = () => (purvajit.current.currentTime += 3);
  const handelcontrolminus = () => (purvajit.current.currentTime -= 3);
  const handelvolumeplus = () => (purvajit.current.volume = Math.min(1, purvajit.current.volume + 0.3));
  const handelvolumeminus = () => (purvajit.current.volume = Math.max(0, purvajit.current.volume - 0.3));

  return (
    <div className="container">
      <video ref={purvajit} controls>
        <source src="https://cdn.shopify.com/videos/c/o/v/c5df0e1506db42908dee1d6e749e1f74.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div>
        <button onClick={handelplay}>▶ Play</button>
        <button onClick={handelpause}>⏸ Pause</button>
        <button onClick={handelcontrolADD}>⏩ +3s</button>
        <button onClick={handelcontrolminus}>⏪ -3s</button>
        <button onClick={handelvolumeplus}>🔊 Vol+</button>
        <button onClick={handelvolumeminus}>🔉 Vol−</button>
      </div>
    </div>
  );
};

export default App;