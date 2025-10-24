import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 h-full w-full p-8 flex flex-col justify-between '>
            <h2 className='bg-white text-2xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>1</h2>
            <div>
                <p className='text-lg leading-normal text-white m'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias officiis eveniet temporibus, non vel repellendus.</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600 text-white font-medium py-3 px-8 rounded-full cursor-pointer'>{props.tag}</button>
                    <button className='bg-blue-600 text-white font-medium py-3 px-4 rounded-full cursor-pointer'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent