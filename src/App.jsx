//routing
import { Routes, Route  } from 'react-router-dom';
//styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Header Components
import Header from './Components/Header';
import Tender from './Components/Tender';
import Cities from './Components/Cities';
import Contact from './Components/Contact';
import Categories from './Components/Categories';
import Blogs from './Components/Blogs';
import About from './Components/About';
import Footer from './Components/Footer';
import Home from './Pages/Home';
// import Organization from './Pages/Orgnization';

function App() {
  return (
    <div >
     
      <Header/>
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path="/tender" element={<Tender/>} />
        <Route path="/cities" element={<Cities/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/blogs" element={<Blogs/>} />
        {/* <Route path='/organization' element={<Organization/>}/> */}
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
   
    </div>
  );
}

export default App;
