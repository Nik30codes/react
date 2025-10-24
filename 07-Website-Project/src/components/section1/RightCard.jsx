import React from 'react'
import RightCardContent from './RightCardContent'
import 'remixicon/fonts/remixicon.css'
const RightCard = (props) => {
  return (
    <div className='h-full w-80 overflow-hidden relative bg-red-400 rounded-4xl'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        <RightCardContent tag={props.tag}  />
    </div>
  )
}

export default RightCard