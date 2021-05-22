import './App.css';
import Jumbo from './components/JumboNav/Jumbo';
import About from "./pages/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Jumbo/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
