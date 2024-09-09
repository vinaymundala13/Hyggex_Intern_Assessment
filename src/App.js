
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Relations from './components/Relations';
import Caurosalnav from './components/Caurosalnav';
import Caurosaldiv from './components/Caurosaldiv';
import Logo from './components/Logo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Home/>
       <Relations/>
       <Caurosalnav/>
       <Caurosaldiv/>
       <Logo/>
       <Footer/>
    </div>
  );
}

export default App;
