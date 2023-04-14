import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Help from './components/Help';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Help/>
      <Footer/>
      
    </div>
  );
}

export default App;
