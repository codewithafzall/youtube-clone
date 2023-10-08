import React from 'react';
import {LOGO, SIDEBAR_ICON, USER_ICON} from '../utils/constants'
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../utils/appSlice';
import SearchIcon from '@mui/icons-material/Search';
import Search from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSidebar = ()=>{
    dispatch(toggleSidebar())
    console.log("test slider");
  };

  return (
    <div className='fixed w-full bg-white z-10'>
    <div className='flex justify-between px-5 py-4'>
      <div className='flex mt-2'>
        <img onClick={handleSidebar} className='w-7 h-7 cursor-pointer hover:scale-105' alt='sidebar_icon' src={SIDEBAR_ICON}/>
        <img onClick={()=>navigate("/")} className='w-32 h-7 ml-4' alt='youtube_logo' src={LOGO}/>
      </div>
      <div className='flex'>
        <input className=' border-2 py-1 pl-4 w-[500px] rounded-l-full text-md' type='text' placeholder='Search....'/>
        <button className='bg-gray-100 rounded-r-full py-1 px-4 border-2' ><SearchIcon/></button>
      </div>
      <div>
        <img className='w-10 h-10' alt="user_icon" src={USER_ICON}/>
      </div>
    </div>
    </div>
  )
}

export default Header