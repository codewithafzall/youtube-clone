import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useSearchParams } from "react-router-dom";
import { closeSidebar } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { GOOGLE_API_KEY, USER_ICON } from "../utils/constants";

const WatchPage = () => {

  const [videoData , setVideoData] = useState([]);

  const [params] = useSearchParams();
  const id = params.get("v");
  const dispatch = useDispatch();

  const getVideoData = async ()=>{
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=` + GOOGLE_API_KEY);
    const json = await data.json();
    console.log(json.items[0]);
    setVideoData(json.items[0]);
  };

  useEffect(()=>{
    getVideoData();
  },[]);

  // const {snippet , statistics,} = videoData;
  // const {title, channelTitle} = snippet;
  

 
  useEffect(()=>{
    dispatch(closeSidebar());
  },[]);

  return (
    <div>
      <Sidebar />
        <div className="w-3/5 pt-7 ms-7">
        <iframe
            className="rounded-lg w-full aspect-video"
            src={"https://www.youtube.com/embed/"+ id }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
           ></iframe>
        </div>
        <h1 className="flex justify-center text-6xl mt-5">WORK UNDER CONSTRUCTION</h1>
    </div>   
  );
};

export default WatchPage;
