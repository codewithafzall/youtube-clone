import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import {useSearchParams } from "react-router-dom";
import { closeSidebar } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const WatchPage = () => {
  const [params] = useSearchParams();
  const id = params.get("v");
  const dispatch = useDispatch();
 
  useEffect(()=>{
    dispatch(closeSidebar());
  },[]);

  return (
    <div>
      <Sidebar />
      <div className="pt-20">
         <div className="w-full">
            <iframe
            className="rounded-lg w-7/12 aspect-video ml-10"
            src={"https://www.youtube.com/embed/"+ id }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
           ></iframe>
         </div>
      </div>
    </div>
  );
};

export default WatchPage;
