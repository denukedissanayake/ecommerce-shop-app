import './App.css';
import Hotnews from './components/Hotnews';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Hotnews/>
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
