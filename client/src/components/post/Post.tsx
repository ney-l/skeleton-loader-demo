import './post.css';

type Props = {
  video: {
    id: number;
    title: string;
    views: string;
    date: string;
    duration: string;
    img: string;
    channel: {
      name: string;
      avatar: string;
    };
  };
};

export const Post = ({ video }: Props) => {
  return (
    <div className="post">
      <div className="postImgContainer">
        <img src={video.img} alt="Video" className="postImg" />
        <span className="postDuration">{video.duration}</span>
      </div>

      <div className="postInfoContainer">
        <img className="postAvatar" src={video.channel.avatar} alt="Video" />
        <div className="postInfo">
          <span className="postTitle">{video.title}</span>
          <span className="postChannel">{video.channel.name}</span>
          <span className="postDetail">
            {video.views} views • {video.date}
          </span>
        </div>
      </div>
    </div>
  );
};
