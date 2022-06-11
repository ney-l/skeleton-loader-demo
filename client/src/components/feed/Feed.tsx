import { useEffect, useState } from 'react';
import { http } from '../../http';
import { Post } from '../post/Post';
import { Skeleton } from '../skeleton/Skeleton';
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
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="feed">
      {isLoading ? (
        <Skeleton type="feed" />
      ) : (
        videos.map((video) => <Post video={video} />)
      )}
    </div>
  );
};
