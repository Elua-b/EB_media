import React from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
function InfoCard() {
  return (
    <div className='InfoCard'>
      <div className="infoHead">
        <h4>Your info </h4>
        <UilPen width='2rem' height='1.2rem'/>
      </div>
      <div className="info">
        <span>Status</span>
        <span>In Relationship</span>
      </div>
      <div className="info">
        <span>Lives in</span>
        <span>Kigali</span>
      </div>
      <div className="info">
        <span>Works at</span>
        <span>Govtalk Company</span>
      </div>
      <button className='button'>Logout</button>
    </div>

  )
}

export default InfoCard
