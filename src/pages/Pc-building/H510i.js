import React from "react";
import Suggestion from "../../components/suggest";
import Footer from "../../components/Footer";
import ProductDisplay from "../../components/singleProductHero";

function H510iPcProduct() {
	return (
		<div>
			<ProductDisplay filter="H510i" />
			<Suggestion />
			<Footer />
		</div>
	);
}

export default H510iPcProduct;
