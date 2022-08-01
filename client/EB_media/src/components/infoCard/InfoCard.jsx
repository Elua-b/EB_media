import React from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
function InfoCard() {
  return (
    <div className='InfoCard'>
      <div className="infoHead">
        <h4>Your info </h4>
        <UilPen/>
      </div>
      <div className="info">
        <span>Status</span>
      </div>
    </div>
  )
}

export default InfoCard
