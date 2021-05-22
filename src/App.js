import './App.css';
import Jumbo from './components/JumboNav/Jumbo';
import About from "./pages/About";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import { Component } from 'react';
import projects from "./projects.json";

class App extends Component {

  state = {
    projects
  };
  
  render(){
    return (
      <div className="App">
        <Jumbo/>
          <About/>
          <div class="card-group">
            {this.state.projects.map(project => (
              <Card
                key={project.id}
                name={project.name}
                description={project.description}
                image={project.image}
                alt={project.alt}
                github={project.github}
                deployed={project.deployed} 
                />
            ))}
          </div>  
        <Footer/>
      </div>
      );
  }
}


export default App;
