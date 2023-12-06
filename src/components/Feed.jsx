import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchFromAPI } from "./utils/fetchFromAPI";

export const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([]);
  useEffect (() => {
  fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
  .then((data) =>setVideos(data.items))
  }, [selectedCategory])
  return (
    <Stack sx={{background: '#000', flexDirection: { xs: "column", md: "row" } }}>
      <Box sx={{ height: { xs: "auto", md: "92vh" }, borderRight: '1px solid #3d3d3d', px: {xs: 0, md: 2} }}>
       <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className="copyright" varient="body2" sx={{mt: 1.5, color: '#fff'}}>
          Copyright 2023 MediaTube 
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography varient="h4" fontWeight='bold' mb={2} sx={{color: 'white'}}>
          {selectedCategory} <span style={{color: '#fc1503'}}>Videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  );
};
export default Feed;
