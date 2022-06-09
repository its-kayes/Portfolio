import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/Parts/About';
import ContactMe from './components/Parts/ContactMe';
import Project from './components/Parts/Project';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Portfolio></Portfolio>}> </Route>
        <Route path='/contact' element={<ContactMe> </ContactMe>}> </Route>
        <Route path='/project' element={<Project> </Project>}> </Route>
        <Route  path='about' element={<About> </About>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
