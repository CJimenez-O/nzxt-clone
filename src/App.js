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
import MousePad from "./pages/MousePad";
import LargeMousePad from "./pages/LargeMousePad";
import Puck from "./pages/Puck";
import PanPuck from "./pages/PanPuck";
import AuthWrapper from "./pages/AuthWrapper";
import CartSideBar from "./components/CartSideBar";
import H710 from "./pages/Pc-building/H710Page";
import H710Prod from "./pages/Pc-building/H710SingleProd";
import H710i from "./pages/Pc-building/H710i";
import H510Page from "./pages/Pc-building/H510Page";
import H510 from "./pages/Pc-building/H510SingleProd";
import H510i from "./pages/Pc-building/H510i";
import H210Page from "./pages/Pc-building/H210Page";
import H210 from "./pages/Pc-building/H210SingleProd";
import H210i from "./pages/Pc-building/H210i";
import H1 from "./pages/Pc-building/H1Page";
import H1Prod from "./pages/Pc-building/H1Prod";
import Company from "./pages/Company";
import Software from "./pages/Software";
import Support from "./pages/Support";
import Checkout from "./pages/CheckoutPage";
import { links } from "./link";
import Error from "./pages/ErrorPage";
import MailingForm from "./components/mailingListForm";
import CheckoutPage from "./pages/CheckoutPage";

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
					<Route exact path="/collection/product/streamer-pc">
						<StreamerProduct />
					</Route>
					<Route exact path="/collection/product/streamer-pro-pc">
						<StreamerPro />
					</Route>
					<Route exact path="/collection/starter-pc">
						<Starter />
					</Route>
					<Route exact path="/collection/product/starter-pc">
						<StarterPcProd />
					</Route>
					<Route exact path="/collection/product/starter-pc-plus">
						<StarterPlusPc />
					</Route>
					<Route exact path="/collection/creator">
						<Creator />
					</Route>
					<Route exact path="/collection/product/creator-pc">
						<CreatorPc />
					</Route>
					<Route exact path="/collection/h1-mini-pc">
						<MiniPc />
					</Route>
					<Route exact path="/collection/product/h1-mini-pc">
						<MiniPcProd />
					</Route>
					<Route exact path="/collection/h710">
						<H710 />
					</Route>
					<Route exact path="/product/h710">
						<H710Prod />
					</Route>
					<Route exact path="/product/h710i">
						<H710i />
					</Route>
					<Route exact path="/collection/h510">
						<H510Page />
					</Route>
					<Route exact path="/product/h510">
						<H510 />
					</Route>
					<Route exact path="/product/h510i">
						<H510i />
					</Route>
					<Route exact path="/collection/h210">
						<H210Page />
					</Route>
					<Route exact path="/product/h210">
						<H210 />
					</Route>
					<Route exact path="/product/h210i">
						<H210i />
					</Route>
					<Route exact path="/collection/h1">
						<H1 />
					</Route>
					<Route exact path="/product/h1">
						<H1Prod />
					</Route>
					<Route exact path="/product/standard-mouse-pad">
						<MousePad />
					</Route>
					<Route exact path="/product/large-mouse-pad">
						<LargeMousePad />
					</Route>
					<Route exact path="/product/puck">
						<Puck />
					</Route>
					<Route exact path="/product/pan-puck">
						<PanPuck />
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
					<Route exact path="/checkout">
						<Checkout />
					</Route>
					{links.map((link) => {
						const { id, url } = link;
						return (
							<Route key={id} path={url}>
								{}
							</Route>
						);
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
