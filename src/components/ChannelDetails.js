import React, { useEffect, useState } from 'react';
import { USER_ICON } from '../utils/constants';
import { RingVolume, Share, ThumbUp } from '@mui/icons-material';
import UseFormatNumbers from '../utils/UseFormatNumbers';

const ChannelDetails = ({data}) => {
    const [expanded, setExpanded] = useState(false);
    const [subscribe, setSubscribe] = useState(false);
    const [like, setLike] = useState(false);
    const formatNumber  = UseFormatNumbers();

    if (!data || !data.snippet) {
        return null;
      };

  const {snippet,statistics} = data;
  const {title,description,channelTitle} = snippet;
  const {likeCount,viewCount,commentCount} = statistics;

  const toggleDescription = () => {
    setExpanded(!expanded);
  };
  const toggleSubscription = () => {
    setSubscribe(!subscribe);
  };
  const toggleLike = () => {
    setLike(!like);
  };

  const viewCounter = formatNumber(viewCount);
  const likeCounter = formatNumber(likeCount);
  const commentCounter = formatNumber(commentCount);

  return (
    <div className='mt-5'>
        <h1 className='font-semibold text-lg ml-2 md:text-2xl'>{title}</h1>
        <div className='flex flex-col md:flex-row items-center justify-between mt-5'>
           <div className='flex items-center w-full'>
           <img className="w-10 h-10 ml-3" alt="user_icon" src={USER_ICON} />
                <div className='ml-3'>
                <h1 className='font-semibold text-lg'>{channelTitle}</h1>
                <h5>{viewCounter} Subscribers</h5>
                </div>
                <button
                onClick={toggleSubscription}
                className={
                    subscribe
                    ? 'bg-gray-100 text-black rounded-full px-4 py-2 ml-7 font-semibold'
                    : 'bg-black text-white rounded-full px-4 py-2 ml-7 font-semibold'
                }
                >
                {subscribe ? "Subscribed" : "Subscribe"}
                </button>
        </div>
           <div className='hidden md:flex'>
           <button onClick={toggleLike} className='bg-gray-100 rounded-full px-4 py-2 ml-7 font-semibold'><ThumbUp style={{ color: like ? 'blue' : 'black', }} />  {likeCounter}</button>
           <button className='bg-gray-100 rounded-full px-4 py-2 ml-5 font-semibold'><Share/> Share</button>
           </div>
        </div>
        <div className='bg-gray-100 p-3 rounded-lg mt-5'>
            <h1 className='font-semibold text-lg mb-2'>{viewCounter} views</h1>
            <p className={`line-clamp-${expanded ? 'none' : '2'}`}>
            {description}
          </p>
          {description.length > 150 && (
            <button
              onClick={toggleDescription}
              className='text-blue-500 hover:underline focus:outline-none'
            >
              {expanded ? 'Read less' : 'Read more'}
            </button>
          )}
        </div>
        <h1 className='font-semibold text-2xl mt-4 ml-2'>{commentCounter} Comments</h1>
    </div>
  )
}

export default ChannelDetails