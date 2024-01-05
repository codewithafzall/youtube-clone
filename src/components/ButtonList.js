import React from 'react'
import Button from './Button'

const ButtonList = () => {

    const list = [
        "Music",
        "Gaming",
        "Entertainment",
        "News",
        "Sports",
        "Education",
        "Science",
        "Technology",
        "Comedy",
        "Cooking",
        "Travel",
        "Fitness",
        "Beauty",
        "Coding",
        "Fun",
        "Knowledge"
      ];
      

  return (
    <div className='flex ml-2 mt-1 overflow-x-scroll scrollbar-hidden'>
      {list.map((item)=>(<Button key={item} name={item} />))}
    </div>
  )
}

export default ButtonList