import React from "react";
import Suggestion from "../components/suggest";
import Footer from "../components/Footer";
import ProductDisplay from "../components/singleProductHero";

function StreamerPcProduct() {
	return (
		<div>
			<ProductDisplay filter="Streaming PC" />
			<Suggestion />
			<Footer />
		</div>
	);
}

export default StreamerPcProduct;