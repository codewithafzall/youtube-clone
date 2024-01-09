import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY, LOGO, SEARCH_SUGGESTIONS, SIDEBAR_ICON, USER_ICON } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery , setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  const handleSidebar = () => {
    dispatch(toggleSidebar());
  };

  useEffect(()=>{ 
       const timer = setTimeout(()=>getSearchSuggestions(),200);
      return()=>{
        clearTimeout(timer)
      }
  },[searchQuery]);

  const handleSearch = (searchText)=>{
    setSearchQuery(searchText);
    navigate(`/search?q=${encodeURIComponent(searchText)}`);
    setSearchQuery("");
    setSearchSuggestions([]);
 }; 


  const getSearchSuggestions = async () => {

    if (!searchQuery) {
      setSearchSuggestions([]);
      return;
    }
       
    const options = {
      method: 'GET',
      url: 'https://auto-suggest-queries.p.rapidapi.com/suggestqueries',
      params: {query: searchQuery},
      headers: {
        'X-RapidAPI-Key': 'e6c0051900msh49cd0b4d8a9f386p1fc846jsnfcb35b1a4b75',
        'X-RapidAPI-Host': 'auto-suggest-queries.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      setSearchSuggestions(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed w-full bg-white z-10">
      <div className="flex w-full justify-between px-1 py-4 md:px-5 md:py-4">
        <div className="flex mt-2">
          <img
            onClick={handleSidebar}
            className="w-6 h-6 md:w-7 md:h-7 cursor-pointer hover:scale-105"
            alt="sidebar_icon"
            src={SIDEBAR_ICON}
          />
          <img
            onClick={() => navigate("/")}
            className="w-[5rem] h-6 ml-2 md:w-32 md:h-7 md:ml-4"
            alt="youtube_logo"
            src={LOGO}
          />
        </div>
        <div className="flex items-center md:mt-1">
        <div className="relative">
  <input
    className="border-2 pl-8 text-xs py-1 h-10 md:pl-10 w-full md:w-[500px] rounded-full md:text-sm"
    type="text"
    placeholder="Search...."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
  <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
    <SearchIcon />
  </div>
  {searchSuggestions && (
    <div className="absolute bg-white rounded-md mt-1 md:w-[500px] shadow-lg md:top-10">
      {searchSuggestions.map((item, index) => (
        <ul>
          <li key={index} onClick={() => handleSearch(item)} className="flex p-2 cursor-pointer">
            <SearchIcon />
            <span key={index} className="ps-2">{item}</span>
          </li>
        </ul>
      ))}
    </div>
  )}
</div>

    </div>
        <div>
          <img className="w-8 h-8 mt-1 md:w-10 md:h-10" alt="user_icon" src={USER_ICON} />
        </div>
      </div>
    </div>
    
  );
};

export default Header;
