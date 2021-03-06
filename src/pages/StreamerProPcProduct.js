import React, { useEffect } from "react";
import Suggestion from "../components/suggest";
import Footer from "../components/Footer";
import ProductDisplay from "../components/singleProductHero";

function StreamerProPcProduct() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<ProductDisplay filter="Streaming Pro PC" />
			<Suggestion />
			<Footer />
		</div>
	);
}

export default StreamerProPcProduct;
