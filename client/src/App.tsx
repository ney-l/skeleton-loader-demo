import './app.css';
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
      </div>
    </div>
  );
}

export default App;
