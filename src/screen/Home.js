import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoCard from "../components/VideoCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useSelector } from "react-redux";
import { selectQuery } from "../redux/videoSlice";

const Home = () => {
  const query = useSelector(selectQuery);
  const [videoCards, setVideoCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const faltuArray = Array.from(Array(50).keys());

  async function createVideoCards(videoItems) {
    let newVideoCards = [];
    for (const video of videoItems) {
      const videoId = video.id;
      const snippet = video.snippet;
      const channelId = snippet.channelId;
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=AIzaSyDUHTYscvTDbH-fGco4eda3QrBzTYrlfp8`
      );
      const channelImage = response.data.items[0].snippet.thumbnails.medium.url;

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
        channelId,
      });
    }
    setVideoCards(newVideoCards);
    setIsLoading(false);
  }
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&type=video&q=${query}&safeSearch=none&key=AIzaSyDUHTYscvTDbH-fGco4eda3QrBzTYrlfp8`
      )
      .then((response) => {
        console.log(response.data.items);
        createVideoCards(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query]);

  return (
    <div className="flex flex-wrap gap-x-3 gap-y-3 px-10 pt-10 bg-gray-400 pb-10">
      {isLoading
        ? faltuArray.map((el) => <Skeleton width={276} height={247} />)
        : videoCards.map((item) => (
            <VideoCard
              key={item.videoId}
              title={item.title}
              image={item.image}
              views={item.views}
              // timestamp={item.timestamp}
              channel={item.channel}
              channelImage={item.channelImage}
              vid={item.videoId}
              channelId={item.channelId}
            />
          ))}
    </div>
  );
};

export default Home;
