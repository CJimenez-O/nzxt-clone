import React from "react";
import Suggestion from "../../components/suggest";
import Footer from "../../components/Footer";
import ProductDisplay from "../../components/singleProductHero";

function H710iPcProduct() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<ProductDisplay filter="H710i" />
			<Suggestion />
			<Footer />
		</div>
	);
}

export default H710iPcProduct;
