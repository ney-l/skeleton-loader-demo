import {
  Menu,
  Home,
  Explore,
  Subscriptions,
  VideoLibrary,
} from '@material-ui/icons';
import { Skeleton } from '../skeleton/Skeleton';
import './sidebar.css';

type Props = {
  isLoading: boolean;
};

export const Sidebar = ({ isLoading }: Props) => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {isLoading ? (
          <Skeleton type="menu" />
        ) : (
          <>
            <Menu />
            <>
              <div className="sidebarItem active">
                <Home />
                <span>Home</span>
              </div>
              <div className="sidebarItem">
                <Explore />
                <span>Explore</span>
              </div>
              <div className="sidebarItem">
                <Subscriptions />
                <span>Subsriptions</span>
              </div>
              <div className="sidebarItem">
                <VideoLibrary />
                <span>Library</span>
              </div>
            </>
          </>
        )}
      </div>
    </div>
  );
};
