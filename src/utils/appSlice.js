import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name : "app",
    initialState : {
        isSideBarOpen : true,
    },
    reducers :{
      toggleSidebar : (state)=>{
        state.isSideBarOpen = !state.isSideBarOpen
      },
      closeSidebar : (state)=>{
        state.isSideBarOpen = false ;
      },
    }
});

export const { toggleSidebar ,closeSidebar } = appSlice.actions;
export default appSlice.reducer;