import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Promo from "./components/Promo";
import Components from "./pages/Components";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Sidebar />
			<Promo />
			<Switch>
				<Route exact path="/pc-products-components">
					<Components />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
