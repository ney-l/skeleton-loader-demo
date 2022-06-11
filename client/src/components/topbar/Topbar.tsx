import {
  Apps,
  Mic,
  Notifications,
  Search,
  VideoCall,
} from '@material-ui/icons';
import './topbar.css';

type Props = {
  user: {
    avatar: string;
  };
};

export const Topbar = ({ user }: Props) => {
  return (
    <div className="topbar">
      <div className="topLeft">
        <img className="logo" src="https://i.ibb.co/KDtnJVY/logo.png" alt="" />
        <span className="logoText">LamaTube</span>
      </div>
      <div className="topCenter">
        <div className="topSearch">
          <input type="text" placeholder="Search" />
          <div className="topSearchIconContainer">
            <Search className="topSearchIcon" />
          </div>
          <Mic />
        </div>
      </div>
      <div className="topRight">
        <VideoCall className="topIcon" />
        <Apps className="topIcon" />
        <Notifications className="topIcon" />
        <img className="topImg" src={user.avatar} alt="" />
      </div>
    </div>
  );
};
