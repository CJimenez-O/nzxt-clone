import React from "react";
import Suggestion from "../components/suggest";
import Footer from "../components/Footer";
import ProductDisplay from "../components/singleProductHero";

function H1MiniPcProduct() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<ProductDisplay filter="H1 Mini PC" />
			<Suggestion />
			<Footer />
		</div>
	);
}

export default H1MiniPcProduct;
