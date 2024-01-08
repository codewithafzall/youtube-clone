import React from 'react'
import { USER_ICON } from '../utils/constants';

const SearchCard = ({info}) => {

    const {snippet} = info ;
    const {thumbnails, title , channelTitle, description } = snippet;

  return (
    <div className='flex flex-col md:flex-row py-2 md:py-6 overflow-hidden'>
      <img src={thumbnails.medium.url} alt={title} className=" w-screen md:w-auto md:h-52 object-cover md:nrounded-lg" />
      <div className='w-screen md:w-[70%]'>
      <h1 className="text-xl mx-4 mt-2 font-semibold md:overflow-hidden line-clamp-2">{title}</h1>
      <div className='flex items-center ml-4'>
      <img className="w-6 h-6 mt-3" alt="user_icon" src={USER_ICON} />
      <h1 className='text-md ml-4 mt-3'>{channelTitle}</h1>
      </div>
      <h1 className='mx-4 mt-4'>{description}</h1>
      <div className='flex mt-4'>
        <button className='bg-gray-200 px-3 py-1 text-sm rounded-lg ml-4'>New</button>
        <button className='bg-gray-200 px-3 py-1 text-sm rounded-lg ml-4'>HD</button>
      </div>
      </div>
    </div>
  )
}

export default SearchCard