import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { GOOGLE_API_KEY } from '../utils/constants';
import {Link, useSearchParams } from 'react-router-dom';
import ButtonList from './ButtonList';
import { useSelector } from 'react-redux';
import SearchCard from './SearchCard';

const SearchResults = () => {
    
    const isSideBar = useSelector((store) => store.app.isSideBarOpen);
    const [videos,setVideos] = useState([]);
    const [params] = useSearchParams();
    const query = params.get("q");
    const SEARCH_QUERY = `https://www.googleapis.com/youtube/v3/search?maxResults=25&part=snippet&statistics&chart=mostPopular&q=${query}&key=${GOOGLE_API_KEY}`;

     const searchVideos = async ()=>{
        try{
          const data = await fetch(SEARCH_QUERY);
          const json = await data.json();
          setVideos(json.items);
        }catch(err){
          console.log("Error fetching data",err);
        }
     };

     useEffect(()=>{
        searchVideos();
     },[]);

  return (
    <div className='flex'>
        <Sidebar/>
        <div className={isSideBar?"md:ml-60 mt-20" : "md:ml-10 mt-20"}>
            {videos?.map((item)=>
            <Link key={item.id} to={"/watch?v="+ item.id.videoId}>
                <SearchCard key={item.id} info={item}/>
            </Link>
            )}
        </div>
    </div>
  )
}

export default SearchResults