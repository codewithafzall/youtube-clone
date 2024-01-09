import { createSlice } from "@reduxjs/toolkit";

// Define your media query for detecting desktop or mobile
const isDesktop = window.matchMedia("(min-width: 768px)").matches;

const appSlice = createSlice({
    name: "app",
    initialState: {
        isSideBarOpen: isDesktop, // Set to true for desktop, false for mobile
    },
    reducers: {
        toggleSidebar: (state) => {
            state.isSideBarOpen = !state.isSideBarOpen;
        },
        closeSidebar: (state) => {
            state.isSideBarOpen = false;
        },
    },
});

export const { toggleSidebar, closeSidebar } = appSlice.actions;
export default appSlice.reducer;
