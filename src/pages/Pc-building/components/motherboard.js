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
				title="The N7 Series"
				subtitle="Gaming Motherboards with WiFi and CAM"
				image="https://nzxt.com/assets/cms/34299/1616542421-z490motherboardhero.png?auto=format&bg=FFFFFF&dpr=1.5&fit=max&fm=webp&h=460&w=900"
			/>

			<ProductDisplay
				title="SIMPLY STREAMLINED"
				details="The N7 Series provides a clean, modern look that blends seamlessly with any build."
				filter="collection/motherboards"
			/>

			<Video
				upper="NZXT x Intel"
				title="N7 Z490"
				lower=""
				link="/product/n7-z490"
				url="https://stream.mux.com/D8u009yGI612B00bxWVXnETjKxW6C00Z5Vu/high.mp4"
			/>

			<ProductImageLeft
				title="Building Made Easy"
				description="The layout streamlines installation with an integrated rear I/O shield and optimally placed headers."
				image="https://nzxt.com/assets/cms/34299/1617232758-motherboardbuildingmadeeasy.png?ar=1%3A1&auto=format&dpr=2&fit=max&fm=webp&h=470&w=470"
			/>

			<ProductImageRight
				title="Seamlessly Intelligent"
				description="The N7 Series allows for intuitive, software-powered control of four RGB lighting channels and seven fan channels."
				image="https://nzxt.com/assets/cms/34299/1621555732-motherboard-seamlessly-intelligent.png?ar=1%3A1&auto=format&dpr=1.5&fit=max&fm=webp&h=470&w=470"
			/>

			<Warranty />
			<Suggestion />
			<Footer />
		</Wrapper>
	);
}

const Wrapper = styled.div``;

export default Kraken;
