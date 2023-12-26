import React, { useEffect, useState } from "react";
import { LOGO, SEARCH_SUGGESTIONS, SIDEBAR_ICON, USER_ICON } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery , setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  const handleSidebar = () => {
    dispatch(toggleSidebar());
  };

  useEffect(()=>{ 
       const timer = setTimeout(()=>getSearchSuggestions(),300);
      return()=>{
        clearTimeout(timer)
      }
  },[searchQuery])

  const getSearchSuggestions = async () => {
    try {
      const data = await fetch(SEARCH_SUGGESTIONS + searchQuery);
      const json = await data.json();
      console.log(json);
      setSearchSuggestions(json[1]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="fixed w-full bg-white z-10">
      <div className="flex justify-between px-5 py-4">
        <div className="flex mt-2">
          <img
            onClick={handleSidebar}
            className="w-7 h-7 cursor-pointer hover:scale-105"
            alt="sidebar_icon"
            src={SIDEBAR_ICON}
          />
          <img
            onClick={() => navigate("/")}
            className="w-32 h-7 ml-4"
            alt="youtube_logo"
            src={LOGO}
          />
        </div>
        <div className="flex items-center">
      <input
        className="border-2 py-1 h-10 pl-6 w-[500px] rounded-l-full text-md"
        type="text"
        placeholder="Please turn on CORS extension"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
          {searchSuggestions && (
            <div className="absolute bg-white rounded-md mt-1 w-[500px] shadow-lg top-14">
            {searchSuggestions.map((item,index)=>{
             return(
              <ul>
                <li className="p-2" key={index}><SearchIcon/><span className="ps-2">{item}</span></li>
              </ul>)
            })}
          </div>
          )}
      <button className="bg-gray-100 rounded-r-full py-1 h-10 px-4 border-2 border-l-0">
        <SearchIcon />
      </button>
    </div>
        <div>
          <img className="w-10 h-10" alt="user_icon" src={USER_ICON} />
        </div>
      </div>
    </div>
    
  );
};

export default Header;
