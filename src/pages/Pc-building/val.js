import React from "react";
import Suggestion from "../../components/suggest";
import Footer from "../../components/Footer";
import ProductDisplay from "../../components/singleProductHero";

function Val() {
	return (
		<div>
			<ProductDisplay filter="H510 Valhalla" />
			<Suggestion />
			<Footer />
		</div>
	);
}

export default Val;
