
import { BrowserRouter, Routes, Route, } from 'react-router-dom'; 
import Home from './components/home';
import Navbar from './navbar';
import About from './components/about';
import Contact from './components/contactforms';
import ProjectSection from './components/project';
function App() {
  return (
   <BrowserRouter>

   <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/contactform' element={<Contact/>}></Route>
      <Route path='/project' element={<ProjectSection/>}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
