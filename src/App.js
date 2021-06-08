import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Promo from "./components/Promo";
import Components from "./pages/Components";
import Home from "./pages/Home";
import Search from "./components/search";
import Streamer from "./pages/StreamingPc";
import AuthWrapper from "./pages/AuthWrapper";

function App() {
	return (
		<AuthWrapper>
			<BrowserRouter>
				<Search />
				<Navbar />
				<Promo />
				<Sidebar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/collection/stream-pc">
						<Streamer />
					</Route>
				</Switch>
			</BrowserRouter>
		</AuthWrapper>
	);
}

export default App;
