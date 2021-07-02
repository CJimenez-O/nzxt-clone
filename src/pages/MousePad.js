import React from "react";
import Suggestion from "../components/suggest";
import Footer from "../components/Footer";
import ProductDisplay from "../components/singleProductHero";

function MousePad() {
	return (
		<div>
			<ProductDisplay filter="NZXT Standard Mouse Pad" />
			<Suggestion />
			<Footer />
		</div>
	);
}

export default MousePad;
