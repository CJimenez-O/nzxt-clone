import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Promo from "./components/Promo";
import Home from "./pages/Home";
import Search from "./components/search";
import Streamer from "./pages/StreamingPc";
import StreamerProduct from "./pages/StreamerPcProduct";
import StreamerPro from "./pages/StreamerProPcProduct";
import Starter from "./pages/Starter";
import StarterPcProd from "./pages/StarterPcProduct";
import StarterPlusPc from "./pages/StarterPlusPc";
import Creator from "./pages/CreatorPc";
import CreatorPc from "./pages/CreatorPcProduct";
import MiniPc from "./pages/H1Mini";
import MiniPcProd from "./pages/H1MiniPcProduct";
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
					<Route exact path="/product/streamer-pc">
						<StreamerProduct />
					</Route>
					<Route exact path="/product/streamer-pro">
						<StreamerPro />
					</Route>
					<Route exact path="/collection/starter-pc">
						<Starter />
					</Route>
					<Route exact path="/product/starter-pc">
						<StarterPcProd />
					</Route>
					<Route exact path="/product/starter-pc-plus">
						<StarterPlusPc />
					</Route>
					<Route exact path="/collection/creator">
						<Creator />
					</Route>
					<Route exact path="/product/creator-pc">
						<CreatorPc />
					</Route>
					<Route exact path="/collection/h1-mini-pc">
						<MiniPc />
					</Route>
					<Route exact path="/product/h1-mini-pc">
						<MiniPcProd />
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
					<Route path="/product/:id" children={<singlePage />} />
					<Route exact="*">
						<Error />
					</Route>
				</Switch>
			</BrowserRouter>
		</AuthWrapper>
	);
}

export default App;
