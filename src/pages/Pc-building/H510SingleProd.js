import React from "react";
import Suggestion from "../../components/suggest";
import Footer from "../../components/Footer";
import ProductDisplay from "../../components/singleProductHero";

function H510PcProduct() {
	return (
		<div>
			<ProductDisplay filter="H510" />
			<Suggestion />
			<Footer />
		</div>
	);
}

export default H510PcProduct;
