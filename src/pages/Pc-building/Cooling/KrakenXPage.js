import React from "react";
import styled from "styled-components";
import ProductHero from "../../../components/ProductHero";
import Video from "../../../components/video";
import ProductImageLeft from "../../../components/productFlexLeft";
import ProductImageRight from "../../../components/ProductFlexRight";
import Warranty from "../../../components/warranty";
import Suggestion from "../../../components/suggest";
import Footer from "../../../components/Footer";
import ProductDisplay from "../../../components/ProductDisplay";

function Kraken() {
	return (
		<Wrapper>
			<ProductHero
				title="Kraken X Series"
				subtitle="AIO Liquid Cooler with Infinity Mirror Display"
				image="https://nzxt.com/assets/cms/34299/1616776804-krakenxhero.png?auto=format&bg=FFFFFF&dpr=1.5&fit=max&fm=webp&h=460&w=900"
			/>

			<ProductDisplay
				title="THE LIMITLESS KRAKEN X"
				details="The Kraken X Series is a must-have for any build, providing superior cooling, stunning visual effects, and intuitive installation."
				filter="collection/krakenx"
			/>

			<Video
				upper=""
				title="Be Quiet"
				lower=""
				url="https://stream.mux.com/ITq4DGdMHFjU3yocOF6ivDjC02uOzeaQW/high.mp4"
			/>

			<ProductImageLeft
				title="Get Oriented"
				description="The Kraken X allows you to reorient the display to accommodate 90 degree rotation for easier installation."
				image="https://nzxt.com/assets/cms/34299/1617220762-krakenxgetoriented.png?ar=1%3A1&auto=format&dpr=2&fit=max&fm=webp&h=470&w=470"
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
