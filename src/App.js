import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ContactMe from './components/Parts/ContactMe';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Portfolio></Portfolio>}> </Route>
        <Route path='/contact' element={<ContactMe> </ContactMe>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
