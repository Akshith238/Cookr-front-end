import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Project1Home from './components/project1/Project1Home';
import Project2Home from './components/project2/Project2Home';

function App() {
  return (
    <BrowserRouter>
      <div className='App font-poppin '>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path='/project1' Component={Project1Home} />
          <Route exact path='/project2' Component={Project2Home} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
