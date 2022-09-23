import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Pages/LandingPages';
import Home from './Component/Home/Home';
import Skill from './Component/Skills';
import Interset from './Component/Interest';
import Experience from './Component/Experience';
import Awards from './Component/Awards';
import About from './Component/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<LandingPage/>}>
             <Route path='Home' element={<Home/>}/>
             <Route path='About' element={<About/>}/>
             <Route path='Skill' element={<Skill/>}/>
             <Route path='Interest' element={<Interset/>}/>
             <Route path='Experience' element={<Experience/>}/>
             <Route path='Awards' element={<Awards/>}/>
          </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
