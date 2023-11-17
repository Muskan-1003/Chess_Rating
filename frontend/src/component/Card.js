import React from 'react'

const Card = (props) => {
  return (
    <div className="flex flex-row place-content-between  w-200px">
      <div className='px-10' >
      {props.username}
      </div>
    
      <div className='px-10'>
        {props.rating}
      </div>
    </div>
  )
}

export default Card
