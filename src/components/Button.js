import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='px-3 py-1 bg-gray-200 rounded-lg mx-2 hover:bg-gray-300'>{name}</button>
    </div>
  )
}

export default Button