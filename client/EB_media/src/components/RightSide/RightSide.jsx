import React from 'react'
import './RightSide.css'
import {UilSetting} from '@iconscout/react-unicons'
import TrendCard from '../trendCard/TrendCard'
function RightSide() {
  return (
    <div className='RightSide'>
        <div className="navIcons">
            <img className='icon2' src="./home.png" alt="" />   
            <UilSetting/> 
            <img className='icon2' src="./not.png" alt="" />
            <img className='icon2' src="./mess.png" alt="" /> 
        </div>      
        <TrendCard/>  
        <button className="button">
            Share
        </button>
    </div>
  )
}

export default RightSide
