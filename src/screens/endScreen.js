import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
function EndScreen (){
    let params = useParams();
    let navigate = useNavigate();
    const redirectToPlayScreen = () => navigate(`/play`);
    const { width, height } = useWindowSize();
    return (
        <div>
             <Confetti
                width={width}
                height={height}
                />
        <div className="EndScreen center-screen">
           
            <h2 className="text-center">Chúc mừng bạn</h2>  
            <h2 className="text-center">Bạn đạt được số điểm</h2>     
            <h1 className="text-center">{params.score}</h1>
            <button className="btn" id="movetogame" onClick={redirectToPlayScreen}>Chơi lại</button>                                                                                                                                                                                                           
            {/* <Link to="/play">Bắt đầu</Link> */}
        </div>
        </div>
    )
}

export default EndScreen;