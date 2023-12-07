import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "./utils/fetchFromAPI";
import { CheckCircle } from "@mui/icons-material";
import Videos from "./Videos";

export const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet.statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    fetchFromAPI(`search?part=snippet&relatedTovideoId=${id}&type=video`)
    .then((data) => setVideos(data.items))
  }, [id]);
  if (!videoDetail?.snippet) return 'Loading'
  const {snippet: {title, channelId, channelTitle}, statistics: {viewCount, likeCount}} = videoDetail;

  return (
    <Box minHeight="95vh" sx={{ background: "#000" }}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" varient="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack sx={{color: '#fff'}} direction="row" justifyContent='space-between' py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
            <Typography variant={{sm:'subtitle1', md: 'h6'}} color='#fff'>
                  {channelTitle} 
                  <CheckCircle sx={{fontSize:'14px' , color: 'gray', ml: '5px'}}/>
                </Typography>
              </Link>
              <Stack direction="row" gap='20px' alignItems="center">
                <Typography variant='body1' sx={{opacity: 0.7}}>
                 {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant='body1' sx={{opacity: 0.7}}>
                 {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
         <Box px={2} py={{md: 1, xs: 2}} justifyContent='center' alignItems='center'>
        <Videos videos={videos} direction='column'/>
      </Box>
      </Stack>
     
    </Box>
  );
};
export default VideoDetail;
