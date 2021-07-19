import React, { useEffect } from "react";
import Suggestion from "../../../components/suggest";
import Footer from "../../../components/Footer";
import ProductDisplay from "../../../components/singleProductHero";

function AER() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<ProductDisplay filter="E850" />
			<Suggestion />
			<Footer />
		</div>
	);
}

export default AER;
