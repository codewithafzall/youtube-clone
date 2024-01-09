import React, { useEffect, useState } from 'react';
import { GOOGLE_API_KEY, USER_ICON } from '../utils/constants';

const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);
  const [visibleComments, setVisibleComments] = useState(5); // Number of comments to display initially
  const commentsIncrement = 20; // Number of additional comments to load on "Load More" click

  const COMMENTS_API = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=${visibleComments + commentsIncrement}&videoId=${id}&key=${GOOGLE_API_KEY}`;

  const getComments = async () => {
    try {
      const data = await fetch(COMMENTS_API);
      const json = await data.json();
      setComments(json.items);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLoadMore = () => {
    setVisibleComments((prevVisibleComments) => prevVisibleComments + commentsIncrement);
  };

  useEffect(() => {
    getComments();
  }, [visibleComments]); 

  return (
    <div className='mt-4 px-2 overflow-x-clip'>
      {comments?.slice(0, visibleComments).map((item, index) => {
        const comment = item.snippet.topLevelComment.snippet;

        return (
          <div key={index} className='flex mt-6 rounded-xl'>
            {comment.authorProfileImageUrl ? (
              <img className='h-11 w-11 rounded-full' src={comment.authorProfileImageUrl} alt={comment.authorDisplayName} />
            ) : (
              <img className='h-11 w-11 rounded-full' src={USER_ICON} alt='User Icon' />
            )}
            <div className='ml-6'>
              <p className='font-semibold'>{comment.authorDisplayName}</p>
              <p className='line-clamp-3'>{comment.textDisplay}</p>
            </div>
          </div>
        );
      })}
      {visibleComments < comments.length && (
        <button onClick={handleLoadMore} className='text-blue-500 mt-2 cursor-pointer'>
          Load More
        </button>
      )}
    </div>
  );
};

export default Comments;
