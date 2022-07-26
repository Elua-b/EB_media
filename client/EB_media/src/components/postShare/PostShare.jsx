import React from 'react'
import './PostShare.css'
import {UilScenery} from '@iconscout/react-unicons'
import {UilPlayCircle} from '@iconscout/react-unicons'
import {UilLocationPoint} from '@iconscout/react-unicons'
import {UilSchedule} from '@iconscout/react-unicons'
function PostShare() {
  return (
    <div className='PostShare'>
        <img src="./jackie.PNG" alt="" />
        <div>
            <input type="text" placeholder="what's happening" />
            <div className="postOptions">
            <div className="option"
            style={{color:"var(--photo"}}>
                <UilScenery/>
                photo
            </div>
            <div className="option"
             style={{color:"var(--video"}}>
                <UilPlayCircle/>
                Video
            </div>
            <div className="option"
             style={{color:"var(--location"}}>
                <UilLocationPoint/>
                Location
            </div>
            <div className="option"
             style={{color:"var(--schedule"}}>
                <UilSchedule/>
                Schedule
            </div>
        </div>
        </div>
       
    </div>
  )
}

export default PostShare