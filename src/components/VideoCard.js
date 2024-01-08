import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import UseFormatNumbers from '../utils/UseFormatNumbers';

const VideoCard = ({info}) => {
 
    const {snippet , statistics} = info ;
    const {thumbnails, title , channelTitle } = snippet;
    const {viewCount , likeCount} = statistics;
    const formatNumber = UseFormatNumbers();
    const isSideBar = useSelector((store)=>store.app.isSideBar);
    const views = formatNumber(viewCount);
    const likes = formatNumber(likeCount);

  return (
    <div>
      <div className={isSideBar ? "bg-white md:rounded-lg md:shadow-md my-2 md:my-5" : " w-screen md:w-auto my-2 bg-white md:rounded-lg md:shadow-md md:my-5 md:mx-3"}>
      <div className="relative">
        <img src={thumbnails.medium.url} alt={title} className="w-full h-48 object-cover md:rounded-t-lg" />
        <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 text-xs rounded">
          {views} views
        </div>
      </div>
      <div className="p-2">
        <h1 className="text-lg font-semibold overflow-hidden h-14 line-clamp-2">{title}</h1>
        <h3 className="text-gray-600 text-sm font-semibold">{channelTitle}</h3>
          <div className='flex mt-1'>
            <h2 className="text-gray-700 text-sm">{likes} likes</h2>
            <h2 className="text-gray-700 text-sm ml-3">{views} views</h2>
          </div>
      </div>
    </div>
    </div>
  )
}

export default VideoCard 