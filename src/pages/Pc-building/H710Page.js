import React from "react";
import styled from "styled-components";
import ProductHero from "../../components/ProductHero";
import ProductImageLeft from "../../components/productFlexLeft";
import ProductImageRight from "../../components/ProductFlexRight";
import Warranty from "../../components/warranty";
import Suggestion from "../../components/suggest";
import Footer from "../../components/Footer";
import ProductDisplay from "../../components/ProductDisplay";

function H1Mini() {
	return (
		<Wrapper>
			<ProductHero
				title="H710 Series"
				subtitle="ATX Mid-Tower Cases"
				image="https://nzxt.com/assets/cms/34299/1616697945-h710hero.png?auto=format&bg=FFFFFF&dpr=1.5&fit=max&fm=webp&h=460&w=900"
			/>

			<ProductDisplay
				title="H710 SERIES"
				details="The H710 cases are the largest and most flexible cases in the H Series, with plenty of space for almost any build."
				filter="collection/h710"
			/>

			<ProductImageLeft
				title="It's What's Inside that Counts"
				description="The uninterrupted tempered-glass side panel showcases any build."
				image="https://nzxt.com/assets/cms/34299/1615585200-kraken-x73-rgbs-h710isystemside-rgb.png?ar=1%3A1&auto=format&dpr=2&fit=max&fm=webp&h=470&w=470"
			/>

			<ProductImageRight
				title="Let's Get Connected"
				description="The front-panel USB-C 3.2 and USB 3.1 connector makes it easier than ever to connect the latest peripherals."
				image="https://nzxt.com/assets/cms/34299/1617215523-h710letsgetconnected.png?ar=1%3A1&auto=format&dpr=2&fit=max&fm=webp&h=470&w=470"
			/>

			<Warranty />
			<Suggestion />
			<Footer />
		</Wrapper>
	);
}

const Wrapper = styled.div``;

export default H1Mini;
