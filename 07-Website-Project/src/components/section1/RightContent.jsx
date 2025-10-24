import React from 'react'
import RightCard from './RightCard'
import 'remixicon/fonts/remixicon.css'
const RightContent = (props) => {
  console.log(props.users);
  return (
    <div id='right' className='h-full p-6 w-2/3 flex flex-nowrap overflow-x-auto
     gap-6'>
     {props.users.map(function(elem) {
      return <RightCard img={elem.img} tag={elem.tag} />
})}
    
    </div>
  )
}

export default RightContent