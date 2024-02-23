import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div
			style={{
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
			}}
		>
			<h3>Logo</h3>
			<nav>
				<ul
					style={{
						listStyle: "none",
						display: "flex",
						gap: "1rem",
					}}
				>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/about-us">About Us</a>
					</li>
					<li>
						<a href="/portfolio">Portfolio</a>
					</li>
					<li>
						<a href="/blog">Blog</a>
					</li>
				</ul>
			</nav>
			<nav>
				<ul
					style={{
						listStyle: "none",
						display: "flex",
						gap: "1rem",
					}}
				>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/about-us">About Us</NavLink>
					</li>
					<li>
						<NavLink to="/portfolio">Portfolio</NavLink>
					</li>
					<li>
						<NavLink
							className={(isActive) => (isActive ? "cenas" : "")}
							to="/blog"
						>
							Blog
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
