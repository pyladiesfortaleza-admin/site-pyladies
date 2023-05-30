import "./Menu.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sobre from "./pages/Sobre";
import Participe from "./pages/Participe";
import Navbar from "./components/Navbar";
import Parceiros from './pages/Parceiros';
import Contatos from './pages/Contatos';

function Menu() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Sobre />}></Route>
        <Route path="/participe" element={<Participe />}></Route>
        <Route path="/parceiros" element={<Parceiros />}></Route>
        <Route path="/contatos" element={<Contatos />}></Route>
      </Routes>
    </Router>
  );
}

export default Menu;
