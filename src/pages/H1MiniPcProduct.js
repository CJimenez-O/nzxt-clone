import React from "react";
import styled from "styled-components";
import Suggestion from "../components/suggest";
import MailingList from "../components/mailingListBtn";
import Footer from "../components/Footer";
import ProductDisplay from "../components/singleProductHero";

function H1MiniPcProduct() {
	return (
		<div>
			<ProductDisplay filter="H1 Mini PC" />
			<Suggestion />
			<Footer />
		</div>
	);
}

export default H1MiniPcProduct;
