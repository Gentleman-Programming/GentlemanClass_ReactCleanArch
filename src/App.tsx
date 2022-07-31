import { useSelector } from 'react-redux';
import './App.css';
import { Home } from './pages';
import { AppStore } from './redux/store';

function App() {
  const user = useSelector((state: AppStore) => state.user);

  return (
    <div>
      <span>{JSON.stringify(user)}</span>
      <Home />
    </div>
  );
}

export default App;
