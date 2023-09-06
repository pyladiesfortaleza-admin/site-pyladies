import { Link } from "react-router-dom";
import "./Menu.css";

function MenuNavbar() {
  return (
    <nav className="top-menu">
      <ul className="list">
        <li className="item">
          <Link to="/">Sobre</Link>
        </li>
        <li className="item">
          <Link to="/participe">Participe da comunidade</Link>
        </li>
        <li className="item">
          <Link to="/parceiros">Parceiros</Link>
        </li>
        <li className="item">
          <Link to="/contatos">Contatos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MenuNavbar;
