import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";

export const Feed = () => {
  return (
    <Stack sx={{background: '#000', flexDirection: { xs: "column", md: "row" } }}>
      <Box sx={{ height: { xs: "auto", md: "92vh" }, borderRight: '1px solid #3d3d3d', px: {xs: 0, md: 2} }}>
       <Sidebar/>
        <Typography className="copyright" varient="body2" sx={{mt: 1.5, color: '#fff'}}>
          Copyright 2023 MediaTube 
        </Typography>
      </Box>
    </Stack>
  );
};
export default Feed;
