import React from "react";
import Suggestion from "../../components/suggest";
import Footer from "../../components/Footer";
import ProductDisplay from "../../components/singleProductHero";

function H1() {
	return (
		<div>
			<ProductDisplay filter="H1" />
			<Suggestion />
			<Footer />
		</div>
	);
}

export default H1;
