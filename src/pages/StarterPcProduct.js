import React from "react";
import styled from "styled-components";
import Suggestion from "../components/suggest";
import MailingList from "../components/mailingListBtn";
import Footer from "../components/Footer";
import ProductDisplay from "../components/singleProductHero";

function StarterPcProduct() {
	return (
		<div>
			<ProductDisplay filter="The Starter" />
			<Suggestion />
			<Footer />
		</div>
	);
}

export default StarterPcProduct;