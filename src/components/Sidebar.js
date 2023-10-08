import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

  const isSideBar = useSelector((store) => store.app.isSideBarOpen);
  const navigate = useNavigate();
 
  if (!isSideBar) {
    return null;
  }
  return (
    <div className=' bg-white mt-[4.5rem] overflow-y-scroll fixed' style={{ height: 'calc(100vh - 90px)' }}>

      <div className='border-b-2 w-full'>
       <button onClick={()=>navigate("/")} className=' w-60 rounded-lg py-3 flex justify-center -ml-10 hover:bg-gray-200 text-md'><HomeIcon/><span className='ml-4 w-24 text-left'>Home</span></button>
       <button className=' w-60 rounded-lg py-3 flex justify-center -ml-10 hover:bg-gray-200 text-md'><AppShortcutIcon/><span className='ml-4 w-24 text-left'>Shorts</span></button>
       <button className=' w-60 rounded-lg py-3 flex justify-center -ml-10 hover:bg-gray-200 text-md'><SubscriptionsIcon/><span className='ml-4 w-24 text-left'>Subscriptions</span></button>
       </div>
      <div className='border-b-2 w-full'>
       <button className=' w-60 rounded-lg py-3 flex justify-center -ml-10 hover:bg-gray-200 text-md'><VideoLibraryIcon/><span className='ml-4 w-24 text-left'>Library</span></button>
       <button className=' w-60 rounded-lg py-3 flex justify-center -ml-10 hover:bg-gray-200 text-md'><HistoryIcon/><span className='ml-4 w-24 text-left'>History</span></button>
       <button className=' w-60 rounded-lg py-3 flex justify-center -ml-10 hover:bg-gray-200 text-md'><VideoLibraryIcon/><span className='ml-4 w-24 text-left'>Your Videos</span></button>
       <button className=' w-60 rounded-lg py-3 flex justify-center -ml-10 hover:bg-gray-200 text-md'><SubscriptionsIcon/><span className='ml-4 w-24 text-left'>Watch Later</span></button>
       <button className=' w-60 rounded-lg py-3 flex justify-center -ml-10 hover:bg-gray-200 text-md'><VideoLibraryIcon/><span className='ml-4 w-24 text-left'>Your Clips</span></button>
       <button className=' w-60 rounded-lg py-3 flex justify-center -ml-10 hover:bg-gray-200 text-md'><AppShortcutIcon/><span className='ml-4 w-24 text-left'>Liked Videos</span></button>
       </div>
      <div className='border-b-2 w-full'>
        <h2 className='font-semibold text-xl my-2 text-slate-700'>Explore</h2>
       <button className=' w-60 rounded-lg py-3 flex justify-center -ml-10 hover:bg-gray-200 text-md'><TrendingUpIcon/><span className='ml-4 w-24 text-left'>Trending</span></button>
       <button className=' w-60 rounded-lg py-3 flex justify-center -ml-10 hover:bg-gray-200 text-md'><AppShortcutIcon/><span className='ml-4 w-24 text-left'>Shopping</span></button>
       <button className=' w-60 rounded-lg py-3 flex justify-center -ml-10 hover:bg-gray-200 text-md'><SubscriptionsIcon/><span className='ml-4 w-24 text-left'>Films</span></button>
       <button className=' w-60 rounded-lg py-3 flex justify-center -ml-10 hover:bg-gray-200 text-md'><LiveTvIcon/><span className='ml-4 w-24 text-left'>Live</span></button>
       <button className=' w-60 rounded-lg py-3 flex justify-center -ml-10 hover:bg-gray-200 text-md'><SportsCricketIcon/><span className='ml-4 w-24 text-left'>Cricket</span></button>
       <button className=' w-60 rounded-lg py-3 flex justify-center -ml-10 hover:bg-gray-200 text-md'><SubscriptionsIcon/><span className='ml-4 w-24 text-left'>Songs</span></button>
       </div>
    </div>
  )
}

export default Sidebar