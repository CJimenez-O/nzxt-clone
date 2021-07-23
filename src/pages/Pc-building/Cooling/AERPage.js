import React, { useEffect } from "react";
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
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Wrapper>
			<ProductHero
				title="AER Series"
				subtitle="High Performance and RGB Fans"
				image="https://nzxt.com/assets/cms/34299/1618005206-aerhero.png?auto=format&bg=FFFFFF&dpr=1.5&fit=max&fm=webp&h=460&w=900"
			/>

			<ProductDisplay
				title="AER FANS"
				details="The Aer fans feature less drag and quieter operation, available in 120mm and 140mm."
				filter="collection/aer"
			/>

			<Video
				upper="AER RGB Fans"
				title="OUR COOLEST FANS YET."
				lower=""
				link="/product/aer-rgb"
				url="https://stream.mux.com/g01s1vk7IPvAH7ghkrHeX00piLFIxirzNz/high.mp4"
			/>

			<ProductImageLeft
				title="Stay Cool Under Pressure"
				description="The chamfered-intake and exhaust boost airflow and pressure, providing better overall performance."
				image="https://nzxt.com/assets/cms/34299/1617668954-aerstaycoolunderpressure.png?ar=1%3A1&auto=format&dpr=2&fit=max&fm=webp&h=470&w=470"
			/>

			<ProductImageRight
				title="Enhanced Lifespan"
				description="Fluid dynamic bearings are designed to maintain consistent lubrication reducing bearing noise."
				image="https://nzxt.com/assets/cms/34299/1617214718-aerenhancedlifespan.png?ar=1%3A1&auto=format&dpr=2&fit=max&fm=webp&h=470&w=470"
			/>

			<Warranty />
			<Suggestion />
			<Footer />
		</Wrapper>
	);
}

const Wrapper = styled.div``;

export default Kraken;
