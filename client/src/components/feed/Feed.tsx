import { useEffect, useState } from 'react';
import { http } from '../../http';
import { Post } from '../post/Post';
import './feed.css';

export const Feed = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    http
      .get(`/videos/1`)
      .then((res: { data: [] }) => {
        console.log({ res });
        setVideos(res.data);
      })
      .catch((err) => console.log(err));
    // .then()
  }, []);

  return (
    <div className="feed">
      {videos.map((video) => (
        <Post video={video} />
      ))}
    </div>
  );
};