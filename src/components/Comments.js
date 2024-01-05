import React, { useEffect, useState } from 'react'
import { GOOGLE_API_KEY } from '../utils/constants'
import { ThumbDown, ThumbUp } from '@mui/icons-material';

const Comments = ({id}) => {

  const [comments,setComments] = useState([]);
  const COMMENTS_API = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&videoId=${id}&key=${GOOGLE_API_KEY}`;

  const getComments = async()=>{
    try{
      const data = await fetch(COMMENTS_API);
      const json = await data.json();
      setComments(json.items);
    }
    catch(err){
      console.log(err);
    }
  };

  useEffect(()=>{
    getComments();
  },[]);

  return (
    <div className='mt-4'>
      {comments?.map((item,index)=>{
        const comment = item.snippet.topLevelComment.snippet;
        return(
          <div key={index} className='flex mt-6 rounded-xl' >
            <img className='h-11 w-11 rounded-full' src={comment.authorProfileImageUrl}/>
              <div className='ml-6'>
                <p className='font-semibold'>{comment.authorDisplayName}</p>
                <p>{comment.textDisplay}</p>
              </div>
          </div>
        )
      })}
    </div>
  )
}

export default Comments;