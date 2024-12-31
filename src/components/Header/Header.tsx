import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <img
          src="https://img.freepik.com/vecteurs-libre/degrade-illustration-oiseau-colore_343694-1741.jpg?t=st=1734345512~exp=1734349112~hmac=f4e238904694de9776157a90fbbe90f3269ffb606914d81e15af57f599aba2b1&w=740"
          alt=" logo"
        />
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
          </ul>
        </a>
      </nav>
    </header>
  );
}

export default Header;
