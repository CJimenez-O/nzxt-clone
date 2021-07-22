import React, { useEffect } from "react";
import styled from "styled-components";
import ProductHero from "../../../components/ProductHero";
import ProductImageLeft from "../../../components/productFlexLeft";
import ProductImageRight from "../../../components/ProductFlexRight";
import Warranty from "../../../components/warranty";
import Suggestion from "../../../components/suggest";
import Footer from "../../../components/Footer";
import ProductDisplay from "../../../components/ProductDisplay";

function Psu() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Wrapper>
			<ProductHero
				title="Lighting Accessories"
				subtitle="Expanded RGB Lighting and Control"
				image="https://nzxt.com/assets/cms/34299/1618005230-lightinghero.png?auto=format&bg=FFFFFF&dpr=1.5&fit=max&fm=webp&h=460&w=900"
			/>

			<ProductDisplay
				title="NZXT ILLUMINATION"
				details="Brighten any build with NZXT RGB accessories. Customize settings with the software-empowered RGB & Fan Controller."
				filter="collection/lighting"
			/>

			<ProductImageLeft
				title="Simple Installation"
				description="When connected to the RGB & Fan Controller, each RGB product is plug and play."
				image="https://nzxt.com/assets/cms/34299/1617232705-lightingsimpleinstallation.png?ar=1%3A1&auto=format&dpr=2&fit=max&fm=webp&h=470&w=470"
			/>

			<ProductImageRight
				title="RGB & Fan Controller"
				description="Tailor settings with two lighting channels—supporting up to 80 LEDs total."
				image="https://nzxt.com/assets/cms/34299/1617232696-lightingrgbandfancontroller.png?ar=1%3A1&auto=format&dpr=2&fit=max&fm=webp&h=470&w=470"
			/>

			<Warranty />
			<Suggestion />
			<Footer />
		</Wrapper>
	);
}

const Wrapper = styled.div``;

export default Psu;
