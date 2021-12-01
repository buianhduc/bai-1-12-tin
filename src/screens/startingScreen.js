import React from 'react';
import {useNavigate} from 'react-router-dom';
function StartingScreen (){
    return (
        <div className="startingScreen">
            <img src="https://lienquan.garena.vn/files/skin/bc68101bdb00f4729a25fa5d94ab04d95a02b802549cc.jpg" alt=""/>
            <h1>Luyện Tập Gõ Phím</h1>       
            <button className="btn" id="movetogame" onClick={useNavigate(`/play`)}>Bắt đầu</button>                                                                                                                                                                                                           
            {/* <Link to="/play">Bắt đầu</Link> */}
        </div>
    )
}

export default StartingScreen;