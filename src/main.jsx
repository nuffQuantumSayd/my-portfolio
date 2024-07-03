import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import MainScreen from "./screens/mainScreen.jsx";
import About from "./screens/about.jsx";
import Portfolio from "./screens/portfolio.jsx";
import Contact from "./screens/contact.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App/>}>
			<Route path="/" element={<MainScreen/>} />
			<Route path="/about" element={<About/>} />
			<Route path="/portfolio" element={<Portfolio/>} />
			<Route path="/contact" element={<Contact/>} />
		</Route>
	)
)

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
