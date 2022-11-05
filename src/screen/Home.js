import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoCard from "../components/VideoCard";

const Home = ({ sQuery, setSQuery }) => {
  const [videoCards, setVideoCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

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
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&type=video&q=${sQuery}&safeSearch=none&key=AIzaSyCX2d8mhLkPzQoOARxvOMlGWYKLuCSnd1o`
      )
      .then((response) => {
        console.log(response.data.items);
        createVideoCards(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sQuery]);

  return (
    <div className="flex flex-wrap gap-x-3 gap-y-3 px-10 pt-10">
      {videoCards.map((item) => (
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

export default Home;