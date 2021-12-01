import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
function EndScreen (){
    let params = useParams()
    return (
        <div className="EndScreen center-screen">
            <h2 className="text-center">Chúc mừng bạn</h2>  
            <h2 className="text-center">Bạn đạt được số điểm</h2>     
            <h1 className="text-center">{params.score}</h1>
            <button className="btn" id="movetogame" onClick={useNavigate(`/play`)}>Chơi lại</button>                                                                                                                                                                                                           
            {/* <Link to="/play">Bắt đầu</Link> */}
        </div>
    )
}

export default EndScreen;