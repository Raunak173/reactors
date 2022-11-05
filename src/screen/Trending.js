import React, { useEffect, useState } from "react";
import axios from "axios";
import thumb from "../assets/thumbnail.png";
import VideoCard from "../components/VideoCard";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const Trending = () => {
  const [videoCards, setVideoCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const faltuArray = Array.from(Array(50).keys())

  async function createVideoCards(videoItems) {
    let newVideoCards = [];
    for (const video of videoItems) {
      const videoId = video.id;
      const snippet = video.snippet;
      const channelId = snippet.channelId;
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=AIzaSyCX2d8mhLkPzQoOARxvOMlGWYKLuCSnd1o`
      );
      const channelImage = response.data.items[0].snippet.thumbnails.medium.url;
      // let totalVideos = 50; 

      const title = snippet.title;
      const image = snippet.thumbnails.medium.url;
      const views = video.statistics.viewCount;
      // const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
      const channel = snippet.channelTitle;

      newVideoCards.push({
        videoId,
        image,
        title,
        channel,
        views,
        // timestamp,
        channelImage,
      });
    }
    setVideoCards(newVideoCards);
    setIsLoading(false);
  }

  console.log(isLoading)
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${20}&regionCode=IN&key=AIzaSyCX2d8mhLkPzQoOARxvOMlGWYKLuCSnd1o`
      )
      .then((response) => {
        console.log(response.data.items);
        createVideoCards(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="flex flex-wrap gap-5 mx-auto px-10 pt-10 items-center justify-center">
       {/* ? <Skeleton width={22} height={22} /> */}
      { isLoading
        ? 
        faltuArray.map(el => <Skeleton width={276} height={247} />)
       :
      videoCards.map((item) => (
        <VideoCard
          key={item.videoId}
          title={item.title}
          image={item.image}
          views={item.views}
          // timestamp={item.timestamp}
          channel={item.channel}
          channelImage={item.channelImage}
          vid={item.videoId}
        />
      ))}
    </div>
  );
};

export default Trending;
