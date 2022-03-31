// import PracticeSection from './components/PracticeSection';
import './App.css'
import Navbar from "./pages/Navbar";
import { Home } from "./pages/Home";
import {AboutUs} from "./pages/AboutUs";
import { ContactUs } from './pages/ContactUs';
import { UserRegisteration } from './pages/UserRegisteration';
import {  Route, Routes} from 'react-router-dom'
import { Apidemo } from './component/Apidemo';
import Hsi from './component/Hsi';
function App() {
  return (
    <div >
       <Navbar/>
        <Apidemo/>
       <Routes>
         <Route path="/home" element={<Home/>}></Route>
         <Route path="/aboutus" element={<AboutUs/>}></Route>
         <Route path="/contactus" element={<ContactUs/>}></Route>
         <Route path="/registration" element={<UserRegisteration/>}></Route>
       </Routes>
       <Hsi></Hsi>
        {/* <PracticeSection/> */}
    </div>
  );
}

export default App;
