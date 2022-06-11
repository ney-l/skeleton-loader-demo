import {
  Apps,
  Mic,
  Notifications,
  Search,
  VideoCall,
} from '@material-ui/icons';
import { TUser } from '../../typings';
import './topbar.css';

type Props = {
  user: TUser | null;
  isLoading: boolean;
};

export const Topbar = ({ user }: Props) => {
  return (
    <div className="topbar">
      <div className="topLeft">
        <img className="logo" src={user?.avatar} alt={user?.username} />
        <span className="logoText">{user?.username}</span>
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
        <img className="topImg" src={user?.avatar} alt="" />
      </div>
    </div>
  );
};
