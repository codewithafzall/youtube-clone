import React, { useEffect, useState } from 'react';
import { YOUTUBE_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

    const [videos , setVideos] = useState([]);
    const isSideBar = useSelector((store) => store.app.isSideBarOpen);

    const fetchVideos = async ()=>{
        const data = await fetch(YOUTUBE_API);
        const json = await data.json();
        setVideos(json?.items);
    };

    useEffect(()=>{
        fetchVideos();
    },[]);

  return (
    <div className={isSideBar ? 'mt-7 px-1 grid grid-cols-1 md:grid-cols-3' : 'mt-7 md:px-5 grid grid-cols-1 md:grid-cols-4'}>
    {videos?.map((item)=>
    <Link key={item.id} to={"/watch?v="+ item.id}>
    <VideoCard key={item.id} info={item}/>
    </Link>
    )}
    </div>
  )
}

export default VideoContainer