import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <img
          src="https://www.zarla.com/images/zarla-haut-de-couture-1x1-2400x2400-20220509-4xrw8fxmgh3vfcygcptj.png?crop=1:1,smart&width=250&dpr=2"
          alt=" logo"
        />

        <h1>CLARISSE CREATION</h1>
        <a>
          <ul>
            <li>
              <NavLink to="/"> Home</NavLink>
            </li>
            <li>
              <NavLink to="/about"> About</NavLink>
            </li>
            <li>
              <NavLink to="/Mycreations"> Mycreations</NavLink>
            </li>
            <li>
              <NavLink to="/Favoris"> Favoris</NavLink>
            </li>
          </ul>
        </a>
      </nav>
    </header>
  );
}

export default Header;
