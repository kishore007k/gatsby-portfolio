import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Images/Logo.png";
import HeaderWrapper from "./headerWrapper.style";

const Header = () => {
	const [active, setActive] = useState(false);
	return (
		<HeaderWrapper>
			<nav className="navbar">
				<div className="logo">
					<Link to="/">
						<img src={Logo} alt="Logo" />
					</Link>
				</div>
				<div>
					<div
						onClick={() => setActive(!active)}
						className={active ? "burger-open" : "burger"}
					>
						<div className={active ? "bar-open" : "bar"}></div>
					</div>
					<div>
						<ul className={active ? "navItems-mobile" : "navItems"}>
							<li>
								<Link to="/" data-after="Home">
									Home
								</Link>
							</li>
							<li>
								<Link to="/about" data-after="About">
									About
								</Link>
							</li>
							<li>
								<Link to="/skills" data-after="Skills">
									Skills
								</Link>
							</li>
							<li>
								<Link to="/projects" data-after="Projects">
									Projects
								</Link>
							</li>
							<li>
								<Link to="/contact" data-after="Contact">
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</HeaderWrapper>
	);
};

export default Header;
