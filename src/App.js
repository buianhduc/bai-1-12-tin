import './App.scss';
import React, { useState } from "react";
import {Routes, Route} from "react-router-dom";
import useKeyPress from './hooks/useKeyPress';
import PlayScreen from './screens/playScreen';
import StartingScreen from './screens/startingScreen';
import EndScreen from './screens/endScreen';
function App() {
  
  return (
  <Routes>
    <Route path="/" element={<StartingScreen />} />
    <Route path="play" element={<PlayScreen />} />
    <Route path="end" element={<EndScreen />} >
      <Route path=":score" element={<EndScreen />}></Route>
    </Route>
  </Routes>)
}

export default App;
