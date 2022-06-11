import { useEffect, useState } from 'react';
import './app.css';
import { Feed } from './components/feed/Feed';
import { Sidebar } from './components/sidebar/Sidebar';
import { Topbar } from './components/topbar/Topbar';
import { http } from './http';
import { TUser } from './typings';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<TUser | null>(null);

  useEffect(() => {
    setIsLoading(true);
    http
      .get(`/users/1`)
      .then((res: { data: TUser }) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div className="container">
      <Sidebar isLoading={isLoading} />
      <div className="home">
        <Topbar user={user} isLoading={isLoading} />
        <Feed />
      </div>
    </div>
  );
}

export default App;
