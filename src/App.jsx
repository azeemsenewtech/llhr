import "./App.css";
import Navbar from "./component/header";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/homePage";
import Footer from "./component/footer";
import Buy from "./pages/buyPage";
import Rent from "./pages/rentPage";
import Detail from "./pages/buyPage/feacture/detail";
import ContactPage from "./pages/contactPage";
import TermsCondition from "./pages/termsCondition";
import SellPage from "./pages/sellPage";


function App() {
  return (
    <>
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/buy" element={<Buy/>}/>
         <Route path="/rent" element={<Rent/>}/>
         <Route path="/detail" element={<Detail/>}/>
         <Route path="/contact" element={<ContactPage/>}/>
         <Route path="/terms" element={<TermsCondition/>}/>
          <Route path="/sell" element={<SellPage/>}/>
          
        
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
