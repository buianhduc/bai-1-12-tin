import React, { useState } from "react";
import useKeyPress from '../hooks/useKeyPress';


function PlayScreen (){
let rng = Math.floor(Math.random()*26) + 65;
  const [score,setScore] = useState(0);
  const [follow, setFollow] = useState('A');
  const [result, setResult] = useState();
  let nextChar = String.fromCharCode(rng);
  useKeyPress(key => {
    console.log(key);
    if(key == follow){
			setResult("Đúng rồi");
			setScore(score+1);
		}
		else{
			setResult("Sai rồi");
			setScore(0);
		}
    console.log(String.fromCharCode(rng));
    setFollow(nextChar);
  })
  return (
    <div className="app">
      <title>Luyện tập bấm máy</title>
      <center id="title">Hãy gõ các phím như trên màn hình!</center>
	    <div id="points">Số điểm: {score}</div>
      <h1 id="follow">{follow}</h1>
      
      <h2 id="result">{result}</h2>
    </div>
  );
};

export default PlayScreen;