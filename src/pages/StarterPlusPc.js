import React from "react";
import Suggestion from "../components/suggest";
import Footer from "../components/Footer";
import ProductDisplay from "../components/singleProductHero";

function StarterPlusPc() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<ProductDisplay filter="Starter Plus" />
			<Suggestion />
			<Footer />
		</div>
	);
}

export default StarterPlusPc;
