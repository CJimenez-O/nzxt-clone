import React from "react";
import Suggestion from "../../components/suggest";
import Footer from "../../components/Footer";
import ProductDisplay from "../../components/singleProductHero";

function H710PcProduct() {
	return (
		<div>
			<ProductDisplay filter="H710i" />
			<Suggestion />
			<Footer />
		</div>
	);
}

export default H710PcProduct;
