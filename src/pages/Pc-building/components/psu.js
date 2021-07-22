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
				title="Power Supplies"
				subtitle="Clean and Reliable 80 Plus Rated PSUs"
				image="https://nzxt.com/assets/cms/34299/1616697972-powerhero.png?auto=format&bg=FFFFFF&dpr=1.5&fit=max&fm=webp&h=460&w=900"
			/>

			<ProductDisplay
				title="C & E SERIES PSUS"
				details="Modular and semi-modular PSUs that supply all the power needed to support any gaming PC build."
				filter="collection/psu"
			/>

			<ProductImageLeft
				title="Clean, Reliable Power"
				description="C-Series 80 Plus Gold PSUs are the bedrock of any build, delivering clean, stable power while ensuring optimal efficiency and quiet performance."
				image="https://nzxt.com/assets/cms/34299/1615601328-e-series-feature3-reliable-and-efficient.png?ar=1%3A1&auto=format&dpr=2&fit=max&fm=webp&h=470&w=470"
			/>

			<ProductImageRight
				title="Modular & Digital"
				description="E-Series 80 Plus Gold modular PSUs enable real-time power monitoring and control with NZXT CAM."
				image="https://nzxt.com/assets/cms/34299/1617669093-powermodularanddigital.png?ar=1%3A1&auto=format&dpr=2&fit=max&fm=webp&h=470&w=470"
			/>

			<Warranty />
			<Suggestion />
			<Footer />
		</Wrapper>
	);
}

const Wrapper = styled.div``;

export default Psu;
