import './App.scss';
import React, { useState } from "react";
import useKeyPress from './hooks/useKeyPress';
import PlayScreen from './screens/playScreen';
import StartingScreen from './screens/startingScreen'

function App() {
  return <PlayScreen/>
}

export default App;
