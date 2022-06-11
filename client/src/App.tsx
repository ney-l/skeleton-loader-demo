import './app.css';
import { Feed } from './components/feed/Feed';
import { Sidebar } from './components/sidebar/Sidebar';
import { Topbar } from './components/topbar/Topbar';

function App() {
  const user = {
    avatar: 'https://picsum.photos/200',
  };
  return (
    <div className="container">
      <Sidebar />
      <div className="home">
        <Topbar user={user} />
        <Feed />
      </div>
    </div>
  );
}

export default App;
