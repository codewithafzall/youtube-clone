import React, { useEffect } from 'react'
import { USER_ICON } from '../utils/constants';
import UseFormatNumbers from '../utils/UseFormatNumbers';

const RelatedVideos = ({info}) => {
    const {snippet,statistics} = info ;
    const {thumbnails, title , channelTitle } = snippet;
    const imageURL = thumbnails?.medium?.url;

  return (
    <div className='flex flex-col md:flex-row py-3 md:py-1 md:ml-6'>
      <img src={imageURL} alt={title} className="md:h-32 object-cover rounded-lg" />
      <div>
      <h1 className="text-md md:mx-4 mt-2 mx-3 font-semibold line-clamp-2">{title}</h1>
      <h1 className='text-sm ml-4 mt-1'>{channelTitle}</h1>
      </div>
    </div>
  )
}

export default RelatedVideos