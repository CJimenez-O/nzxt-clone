import React from "react";
import styled from "styled-components";
import ProductHero from "../../../components/ProductHero";
import ProductImageLeft from "../../../components/productFlexLeft";
import ProductImageRight from "../../../components/ProductFlexRight";
import Warranty from "../../../components/warranty";
import Suggestion from "../../../components/suggest";
import Footer from "../../../components/Footer";
import ProductDisplay from "../../../components/SingleProductDisplay";

function Kraken() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Wrapper>
			<ProductHero
				title="Kraken M Series"
				subtitle="AIO Liquid Cooler with Infinity Mirror Display"
				image="https://nzxt.com/assets/cms/34299/1616697950-krakenmhero.png?auto=format&bg=FFFFFF&dpr=1.5&fit=max&fm=webp&h=460&w=900"
			/>

			<ProductDisplay
				title="SMALL BUT MIGHTY COOL"
				details=""
				filter="collection/krakenm"
			/>

			<ProductImageLeft
				title="Get Oriented"
				description="The Kraken X allows you to reorient the display to accommodate 90 degree rotation for easier installation."
				image="https://nzxt.com/assets/cms/34299/1615582989-krakenm22frontangledpumpnofanwhite.png?bg=F5F5F8&dpr=2&fit=crop&fm=webp&h=576&w=576"
			/>

			<ProductImageRight
				title="Stay Quietly Cool"
				description="The Aer P radiator fans are quiet, durable, and provide powerful cooling performance."
				image="https://nzxt.com/assets/cms/34299/1617220772-krakenxstayquietlycool.png?ar=1%3A1&auto=format&dpr=2&fit=max&fm=webp&h=470&w=470"
			/>

			<Warranty />
			<Suggestion />
			<Footer />
		</Wrapper>
	);
}

const Wrapper = styled.div``;

export default Kraken;
