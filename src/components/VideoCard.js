import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const VideoCard = ({info}) => {
 
    const {snippet , statistics} = info ;
    const {thumbnails, title , channelTitle } = snippet;
    const {viewCount , likeCount} = statistics;

    const isSideBar = useSelector((store)=>store.app.isSideBar);


  return (
    <div>
          <div className={isSideBar ? "bg-white rounded-lg shadow-md my-5" : "w-auto bg-white rounded-lg shadow-md my-5 mx-3"}>
      <div className="relative">
        <img src={thumbnails.medium.url} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
        <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 text-xs rounded">
          {viewCount} views
        </div>
      </div>
      <div className="p-2">
        <h1 className="text-lg font-semibold overflow-hidden h-14 line-clamp-2">{title}</h1>
        <h3 className="text-gray-600 text-sm font-semibold">{channelTitle}</h3>
          <div className='flex mt-1'>
            <h2 className="text-gray-700 text-sm">{likeCount} likes</h2>
            <h2 className="text-gray-700 text-sm ml-3">{viewCount} likes</h2>
          </div>
      </div>
    </div>
    </div>
  )
}

export default VideoCard 