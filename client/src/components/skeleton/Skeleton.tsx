import './skeleton.css';

export const Skeleton = ({ type }: { type: string }) => {
  const FeedSkeleton = () => (
    <div className="postSk">
      <div className="postSkImg"></div>
      <div className="postSkInfo">
        <div className="postSkAvatar"></div>
        <div className="postSkDetail">
          <div className="postSkText"></div>
          <div className="postSkText sm"></div>
        </div>
      </div>
    </div>
  );

  if (type === 'feed') {
    return (
      <>
        <FeedSkeleton />
        <FeedSkeleton />
        <FeedSkeleton />
        <FeedSkeleton />
        <FeedSkeleton />
        <FeedSkeleton />
        <FeedSkeleton />
        <FeedSkeleton />
        <FeedSkeleton />
        <FeedSkeleton />
        <FeedSkeleton />
        <FeedSkeleton />
        <FeedSkeleton />
        <FeedSkeleton />
        <FeedSkeleton />
        <FeedSkeleton />
      </>
    );
  }

  const TopSkeleton = () => (
    <div className="topSk">
      <div className="topSkIcon"></div>
      <div className="topSkIcon"></div>
      <div className="topSkIcon"></div>
      <div className="topSkImg"></div>
    </div>
  );

  if (type === 'top') return <TopSkeleton />;

  const MenuSkeleton = () => (
    <div className="menuSk">
      <div className="menuSkItem"></div>
      <div className="menuSkItem"></div>
      <div className="menuSkItem"></div>
      <div className="menuSkItem"></div>
    </div>
  );

  if (type === 'menu') return <MenuSkeleton />;

  return <FeedSkeleton />;
};
