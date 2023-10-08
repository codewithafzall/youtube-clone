import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux';

const MainContainer = () => {

  const isSideBar = useSelector((store) => store.app.isSideBarOpen);


  return (
    <div className={isSideBar?"ml-64 mt-20" : "ml-0 mt-20"}>
      <ButtonList/>
      <VideoContainer/>
      </div>
  )
}

export default MainContainer