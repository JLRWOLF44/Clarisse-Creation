import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header>
			<nav>
				<section className="navebar">
					<section className="logo-section">
						<img
							src="https://www.zarla.com/images/zarla-haut-de-couture-1x1-2400x2400-20220509-4xrw8fxmgh3vfcygcptj.png?crop=1:1,smart&width=250&dpr=2"
							alt=" logo"
							className="logo1"
						/>
					</section>

					<section className="title-section">
						<h1 className="TitrePrincipal">CLARISSE CREATION</h1>
					</section>

					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<div
						className={`menu-burger ${menuOpen ? "hidden" : ""}`}
						onClick={() => setMenuOpen(!menuOpen)}
					>
						{" "}
						&#9776; {/* Icône du menu burger */}{" "}
					</div>

					<section className="nav-links-section">
						<ul style={{ display: menuOpen ? "flex" : "none" }}>
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
					</section>
				</section>
			</nav>
		</header>
	);
}

export default Header;
