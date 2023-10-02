import React from 'react';
import {LOGO, SEARCH_ICON, SIDEBAR_ICON, USER_ICON} from '../utils/constants'
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../utils/appSlice';

const Header = () => {

  const dispatch = useDispatch();

  const handleSidebar = ()=>{
    dispatch(toggleSidebar())
  };

  return (
    <div className='flex justify-between p-5'>
      <div className='flex mt-2'>
        <img onClick={()=>handleSidebar()} className='w-8 h-8' alt='sidebar_icon' src={SIDEBAR_ICON}/>
        <img className='w-36 h-8 ml-4' alt='youtube_logo' src={LOGO}/>
      </div>
      <div className='flex'>
        <input className=' border-2  py-1 pl-4 text-lg w-[600px] rounded-l-full' type='text' placeholder='Search'/>
        <button className='bg-gray-100 rounded-r-full py-2 px-8 border-2' ><img className='w-6' src={SEARCH_ICON}/></button>
      </div>
      <div>
        <img className='w-12 h-12' alt="user_icon" src={USER_ICON}/>
      </div>
    </div>
  )
}

export default Header