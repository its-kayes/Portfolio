import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './components/about/AboutMe';
import Navbar from './components/Navbar';
import About from './components/Parts/About';
import Activity from './components/Parts/Activity';
import ContactMe from './components/Parts/ContactMe';
import Project from './components/Parts/Project';
import ProjectDetails from './components/Parts/ProjectDetails';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Portfolio></Portfolio>}> </Route>
        <Route path='/contact' element={<ContactMe> </ContactMe>}> </Route>
        <Route path='/project' element={<Project> </Project>}> </Route>
        <Route path='/projectDetails/:id' element={<ProjectDetails></ProjectDetails>}> </Route>
        <Route path='/activity' element={<Activity></Activity>}> </Route>
        <Route path='/about' element={<About> </About>}> </Route>
        <Route path='/aboutme' element={<AboutMe></AboutMe>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
