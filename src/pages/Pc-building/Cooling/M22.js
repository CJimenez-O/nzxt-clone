import React from "react";
import Suggestion from "../../../components/suggest";
import Footer from "../../../components/Footer";
import ProductDisplay from "../../../components/singleProductHero";

function M22() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<ProductDisplay filter="Kraken M22" />
			<Suggestion />
			<Footer />
		</div>
	);
}

export default M22;
