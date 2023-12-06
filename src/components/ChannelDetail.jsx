import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from './utils/fetchFromAPI';

export const ChannelDetail = () => {
  const {id} = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([])
  console.log(channelDetail)
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then(data => setChannelDetail(data?.items[0]) )
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then(data => setVideos(data?.items) )
  }, [id])
  return (
    <div>ChannelDetail</div>
  )
}
export default ChannelDetail;