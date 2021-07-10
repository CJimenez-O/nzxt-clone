import React from "react";
import styled from "styled-components";
import ProductHero from "../../components/ProductHero";
import ProductImageLeft from "../../components/productFlexLeft";
import ProductImageRight from "../../components/ProductFlexRight";
import Warranty from "../../components/warranty";
import Suggestion from "../../components/suggest";
import Footer from "../../components/Footer";
import ProductDisplay from "../../components/ProductDisplay";

function H210() {
	return (
		<Wrapper>
			<ProductHero
				title="H210 Series"
				subtitle="Compact Mini-ITX Cases"
				image="https://nzxt.com/assets/cms/34299/1618005212-h210hero.png?auto=format&bg=FFFFFF&dpr=1.5&fit=max&fm=webp&h=460&w=900"
			/>

			<ProductDisplay
				title="Meet the H210 SERIES"
				details="The H210 is a small chassis with a spacious interior supporting radiators up to 240mm."
				filter="collection/h210"
			/>

			<ProductImageLeft
				title="Build Like a Pro"
				description="Cable routing kit with pre-installed channels and straps make wiring intuitive and easy."
				image="https://nzxt.com/assets/cms/34299/1617215270-h210buildlikeapro.png?ar=1%3A1&auto=format&dpr=2&fit=max&fm=webp&h=470&w=470"
			/>

			<ProductImageRight
				title="The i Version"
				description="Control lighting and cooling with the Smart Device V2 and easily customize settings through NZXT CAM."
				image="https://nzxt.com/assets/cms/34299/1617215288-h210theiversion.png?ar=1%3A1&auto=format&dpr=2&fit=max&fm=webp&h=470&w=470"
			/>

			<Warranty />
			<Suggestion />
			<Footer />
		</Wrapper>
	);
}

const Wrapper = styled.div``;

export default H210;
