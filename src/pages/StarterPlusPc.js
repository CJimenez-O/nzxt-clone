import React from "react";
import Suggestion from "../components/suggest";
import Footer from "../components/Footer";
import ProductDisplay from "../components/singleProductHero";

function StarterPlusPc() {
	return (
		<div>
			<ProductDisplay filter="Starter Plus" />
			<Suggestion />
			<Footer />
		</div>
	);
}

export default StarterPlusPc;
