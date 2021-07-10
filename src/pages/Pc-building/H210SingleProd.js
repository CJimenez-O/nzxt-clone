import React from "react";
import Suggestion from "../../components/suggest";
import Footer from "../../components/Footer";
import ProductDisplay from "../../components/singleProductHero";

function H210PcProduct() {
	return (
		<div>
			<ProductDisplay filter="H210" />
			<Suggestion />
			<Footer />
		</div>
	);
}

export default H210PcProduct;
