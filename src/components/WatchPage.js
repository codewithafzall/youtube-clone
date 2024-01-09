import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Link, useSearchParams } from "react-router-dom";
import { closeSidebar } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { GOOGLE_API_KEY, YOUTUBE_API } from "../utils/constants";
import Comments from "./Comments";
import ChannelDetails from "./ChannelDetails";
import RelatedVideos from "./RelatedVideos";

const WatchPage = () => {
  
  const [state,setState] =useState(true);
  const [videoData , setVideoData] = useState([]);
  const [videos, setVideos] = useState([]);
  const [params] = useSearchParams();
  const id = params.get("v");
  const dispatch = useDispatch();

  const getVideoData = async ()=>{
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=` + GOOGLE_API_KEY);
    const json = await data.json();
    setVideoData(json.items[0]);
  };

  const getRelatedVideos = async ()=>{
    const url = `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${id}&part=snippet%2CcontentDetails%2Cstatistics&type=video&maxResults=50`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'e6c0051900msh49cd0b4d8a9f386p1fc846jsnfcb35b1a4b75',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log("afzal",result.items);
      setVideos(result.items)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{
    getVideoData();
    getRelatedVideos();
  },[state]);
 
  useEffect(()=>{
    dispatch(closeSidebar());
  },[]);

  return (
    <div className="flex flex-col md:flex-row justify-between">
      <Sidebar />
        <div className="w-screen md:w-7/12 pt-16 md:ml-7">
        <iframe
            className="md:rounded-lg w-full aspect-video mt-6"
            src={"https://www.youtube.com/embed/"+ id }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
           ></iframe>
           <ChannelDetails id={id} data={videoData}/>
           <Comments id={id}/>
        </div>
        <div onClick={()=>setState(!state)} className="w-screen md:w-5/12 md:overflow-hidden md:pr-4 pt-5 md:pt-[5.5rem]">
        {videos?.map((item)=>
            <Link key={item.id} to={"/watch?v="+ item.id.videoId}>
                <RelatedVideos key={item.id} info={item}/>
            </Link>
            )}
        </div>
    </div>   
  );
};

export default WatchPage;
