import { useState } from "react";
import { Popup } from "../Blog/Blog";

const AboutUs = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	const [isAdmin, setIsAdmin] = useState(false);

	return (
		<>
			<h1>About Us Page</h1>
			<button
				onClick={() => {
					setIsLoggedIn(false);
				}}
			>
				Efetuar Login
			</button>

			<button
				onClick={() => {
					setIsAdmin(true);
				}}
			>
				Efetuar Login
			</button>

			{!isLoggedIn && (
				<Popup closePopup={() => setIsLoggedIn(true)}>
					<form>
						<input type="text" placeholder="Username" />
						<input type="password" placeholder="Password" />
						<button type="submir">Efetuar Login</button>
					</form>
				</Popup>
			)}

			{isAdmin && (
				<Popup closePopup={() => setIsAdmin(false)}>
					<h1>You are admin</h1>
				</Popup>
			)}
		</>
	);
};

export default AboutUs;
