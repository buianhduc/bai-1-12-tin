import React, { useState } from "react";
import useKeyPress from '../hooks/useKeyPress';
import {useNavigate} from 'react-router-dom';

function PlayScreen (){
let rng = Math.floor(Math.random()*26) + 65;
  const [score,setScore] = useState(0);
  const [follow, setFollow] = useState('A');
  const [result, setResult] = useState();
  let nextChar = String.fromCharCode(rng);
  let navigate = useNavigate();
  const endScreen = scr => navigate(`/end/${scr}`);
  useKeyPress(key => {
    console.log(key);
    if(key === follow){
			setResult("Đúng rồi");
			setScore(score+1);
		}
		else{
      endScreen(score);
			setResult("Sai rồi");
			setScore(0);
		}
    console.log(String.fromCharCode(rng));
    setFollow(nextChar);
  })
  return (
    <div className="app">
      <nav>           
        <center id="title">Hãy gõ các phím như trên màn hình!</center>
        <div id="points">Số điểm: {score}</div>
      </nav>
      
      <h1 id="follow">{follow}</h1>
      
      <h2 id="result">{result}</h2>
    </div>
  );
};

export default PlayScreen;