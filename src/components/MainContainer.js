import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux';

const MainContainer = () => {

  const isSideBar = useSelector((store) => store.app.isSideBarOpen);


  return (
    <div className={isSideBar?"ml-0 md:ml-64 mt-20 overflow-x-scroll scrollbar-hidden" : "ml-0 mt-20 overflow-x-scroll scrollbar-hidden"}>
       <ButtonList/>
      <VideoContainer/>
      </div>
  )
}

export default MainContainer