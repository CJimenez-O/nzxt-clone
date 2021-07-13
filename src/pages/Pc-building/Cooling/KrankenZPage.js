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
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Wrapper>
			<ProductHero
				title="Kraken Z Series"
				subtitle="AIO Liquid Cooler with LCD Display"
				image="https://nzxt.com/assets/cms/34299/1616721484-krakenzhero.png?auto=format&bg=FFFFFF&dpr=1.5&fit=max&fm=webp&h=460&w=900"
			/>

			<ProductDisplay
				title="THE LIMITLESS KRAKEN Z"
				details="The Kraken Z Series provides unique personality with a customizable LCD display."
				filter="collection/krakenz"
			/>

			<Video
				upper="AIO Liquid"
				title="COOLER THAN COOL"
				lower="Keep your cool. Keep Your Style."
				url="https://stream.mux.com/Un02D7xPL00fDjLRm01tzBU84q2US02YsWsW/high.mp4"
			/>

			<ProductImageLeft
				title="Display What You Want"
				description="Completely customize the built-in display with temperature data, custom images, or animated GIFs."
				image="https://nzxt.com/assets/cms/34299/1617220823-krakenzdisplaywhatyouwant.png?ar=1%3A1&auto=format&dpr=2&fit=max&fm=webp&h=470&w=470"
			/>

			<ProductImageRight
				title="Incredible Performance"
				description="The Aer P radiator fans are quiet, durable, and provide powerful cooling performance."
				image="https://nzxt.com/assets/cms/34299/1617220813-krakenzincredible-performance.png?ar=1%3A1&auto=format&dpr=2&fit=max&fm=webp&h=470&w=470"
			/>

			<Warranty />
			<Suggestion />
			<Footer />
		</Wrapper>
	);
}

const Wrapper = styled.div``;

export default Kraken;
