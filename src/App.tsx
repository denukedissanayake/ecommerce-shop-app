import './App.css';
import Hotnews from './components/Hotnews';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Hotnews/>
      <Navbar/>
      <Slider/>
    </div>
  );
}

export default App;
