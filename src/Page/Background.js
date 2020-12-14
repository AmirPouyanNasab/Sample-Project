import React from 'react'
import './Background.css'
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import RightSideBar from "./RightSideBar/RightSideBar";

const Background = ()=>{
    return(
        <div className={'background'}>
            <LeftSideBar/>
            <RightSideBar/>
        </div>
    )
}

export default Background;