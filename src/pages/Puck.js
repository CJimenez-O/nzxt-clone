import React from "react";
import Suggestion from "../components/suggest";
import Footer from "../components/Footer";
import ProductDisplay from "../components/singleProductHero";

function Puck() {
	return (
		<div>
			<ProductDisplay filter="Puck" />
			<Suggestion />
			<Footer />
		</div>
	);
}

export default Puck;
