import './global.css';
import { Header } from './components/Header';
import { TinderCards } from './components/TinderCards';

function App() {

  return (
    <div className="App">
      {/* Header */}
      <Header />
      <TinderCards />
      {/* SwipeButtons */}
    </div>
  );
}

export default App
