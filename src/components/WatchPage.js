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

  const fetchVideos = async ()=>{
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    console.log(json);
    setVideos(json?.items);
};

  useEffect(()=>{
    getVideoData();
    fetchVideos();
  },[]);
 
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
           {/* <Comments id={id}/> */}
        </div>
        <div className="w-screen md:w-5/12 md:overflow-hidden md:pr-4 pt-5 md:pt-[5.5rem]">
        {videos?.map((item)=>
            <Link key={item.id} to={"/watch?v="+ item.id}>
                <RelatedVideos key={item.id} info={item}/>
            </Link>
            )}
        </div>
    </div>   
  );
};

export default WatchPage;
