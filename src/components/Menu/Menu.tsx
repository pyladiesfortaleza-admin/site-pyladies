import "./Menu.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuNavbar from "./MenuNavbar";
import Participate from "../../pages/Participate/Participate";
import Partners from "../../pages/Partners/Partners";
import About from "../../pages/About/About";
import Contacts from "../../pages/Contacts/Contacts";



function Menu() {
  return (
    <Router>
      <MenuNavbar/>
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/participe" element={<Participate />}></Route>
        <Route path="/parceiros" element={<Partners />}></Route>
        <Route path="/contatos" element={<Contacts />}></Route>
      </Routes>
    </Router>
  );
}

export default Menu;
