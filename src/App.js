import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Promo from "./components/Promo";
import GamingMenu from "./components/GamingSec";
import Home from "./pages/Home";
import Search from "./components/search";
import Streamer from "./pages/StreamingPc";
import Audio from "./pages/Audio";
import AuthWrapper from "./pages/AuthWrapper";
import CartSideBar from "./components/CartSideBar";
import Company from "./pages/Company";
import Software from "./pages/Software";
import Support from "./pages/Support";
import { links } from "./link";
import Child from "./components/child";
import Error from "./pages/ErrorPage";
import MailingForm from "./components/mailingListForm";

function App() {
	return (
		<AuthWrapper>
			<BrowserRouter>
				<Search />
				<Navbar />
				<GamingMenu />
				<Promo />
				<Sidebar />
				<CartSideBar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/collection/streaming">
						<Streamer />
					</Route>
					<Route exact path="/collection/audio">
						<Audio />
					</Route>
					<Route exact path="/software">
						<Software />
					</Route>
					<Route exact path="/company">
						<Company />
					</Route>
					<Route exact path="/support">
						<Support />
					</Route>
					{links.map((link) => {
						const { id, url } = link;
						return <Route key={id} path={url}></Route>;
					})}
					<Route path="/:id" children={<Child />} />
					<Route exact="*">
						<Error />
					</Route>
				</Switch>
			</BrowserRouter>
		</AuthWrapper>
	);
}

export default App;
