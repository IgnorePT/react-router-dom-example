import ReactDOM from "react-dom/client";
import "./index.css";
import Homepage from "./pages/Homepage/Homepage.jsx";
import {
	BrowserRouter,
	Link,
	Route,
	RouterProvider,
	Routes,
	createBrowserRouter,
} from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Header from "./components/layout/Header/Header.jsx";
import Error from "./pages/Error/Error.jsx";
import PortefolioDetails from "./pages/PortefolioDetails/PortefolioDetails.jsx";
import Footer from "./components/layout/Footer/Footer.jsx";
import Root from "./components/layout/Root/Root.jsx";
import Blog from "./pages/Blog/Blog.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Root>
				<Homepage />
			</Root>
		),
		errorElement: <Error />,
	},
	{
		path: "/portfolio",
		element: (
			<Root>
				<Portfolio />
			</Root>
		),
	},
	{
		path: "/portfolio/:id",
		element: (
			<Root>
				<PortefolioDetails />
			</Root>
		),
	},
	{
		path: "/about-us",
		element: (
			<Root>
				<AboutUs />
			</Root>
		),
	},
	{
		path: "/blog",
		element: (
			<Root>
				<Blog />
			</Root>
		),
		children: [
			{
				path: "/blog/:id",
				element: (
					<Root>
						<Blog />
					</Root>
				),
			},
		],
	},
	{
		path: "/login",
		element: <h1>Login</h1>,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		{/* Versão 6 - React Dom Router (recomendada) */}
		<RouterProvider router={router} />

		{/* Versão 5 - React Dom Router */}

		{/*
		<BrowserRouter>
			{/*  Isto é partilhhado por todas as paginas 
			<Header />
			<Routes>
				<Route path="/" element={<h1>Homepage</h1>} />
				<Route path="/about-us" element={<h1>About</h1>} />
				<Route path="/portfolio" element={<h1>Cenas</h1>} />
			</Routes>
		</BrowserRouter>
		<Footer /> */}
	</>
);
