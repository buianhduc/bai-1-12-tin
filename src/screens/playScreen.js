import React, { useState } from "react";
import useKeyPress from '../hooks/useKeyPress';
import {useNavigate} from 'react-router-dom';

function PlayScreen (){
  function getRNG(){
    let tmp = Math.floor(Math.random()*26) + 65;
    if (tmp === 70 || tmp === 74 || tmp === 87) tmp+=1;
    return tmp;
  }
  let rng = getRNG();
  
  const [score,setScore] = useState(0);
  const [[follow,altFollow], setFollow] = useState(['A','a']);
  const [result, setResult] = useState();
  let nextChar = String.fromCharCode(rng);
  let altNextChar = String.fromCharCode(rng+32);
  let navigate = useNavigate();
  const endScreen = scr => navigate(`/end/${scr}`);
  useKeyPress(key => {
    console.log(rng);
    if(key === follow || key === altFollow){
			setResult("Đúng rồi");
			setScore(score+1);
		}
		else{
      endScreen(score);
			setResult("Sai rồi");
			setScore(0);
		}
    // console.log(String.fromCharCode(rng));
    setFollow([nextChar,altNextChar]);
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