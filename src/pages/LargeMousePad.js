import React from "react";
import Suggestion from "../components/suggest";
import Footer from "../components/Footer";
import ProductDisplay from "../components/singleProductHero";

function LargeMousePad() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<ProductDisplay filter="NZXT Large Mouse Pad" />
			<Suggestion />
			<Footer />
		</div>
	);
}

export default LargeMousePad;
