import React from "react";
import styled from "styled-components";
import ProductHero from "../components/ProductHero";
import ProductImageLeft from "../components/productFlexLeft";
import ProductImageRight from "../components/ProductFlexRight";
import Warranty from "../components/warranty";
import Suggestion from "../components/suggest";
import MailingList from "../components/mailingListBtn";
import Footer from "../components/Footer";
import SingleProductDisplay from "../components/SingleProductDisplay";

function H1Mini() {
	return (
		<Wrapper>
			<ProductHero
				title="The H1 Mini PC"
				subtitle="Game big, go Mini"
				image="https://nzxt.com/assets/cms/34299/1616721375-prebuilth1minihero.png?auto=format&bg=FFFFFF&dpr=1.5&fit=max&fm=webp&h=460&w=900"
			/>

			<SingleProductDisplay
				title="BUILT FOR CREATORS"
				details="The Creator PC equips users with everything needed to showcase creative talents."
				filter="collection/h1-mini-pc"
			/>

			<ProductImageLeft
				title="A PC for the Ages"
				description="The Starter series is only the beginning, with plenty of room to grow as the journey continues."
				image="https://nzxt.com/assets/cms/34299/1617232867-starterseriesapcfortheages.png?ar=1%3A1&auto=format&dpr=2&fit=max&fm=webp&h=470&w=470"
			/>

			<ProductImageRight
				title="Connected for Life"
				description="Wifi and Bluetooth are ready to connect to anything a new PC gamer needs."
				image="https://nzxt.com/assets/cms/34299/1617232880-starterseriesconnectedforlife.png?ar=1%3A1&auto=format&dpr=2&fit=max&fm=webp&h=470&w=470"
			/>

			<Warranty />
			<Suggestion />
			<MailingList />
			<Footer />
		</Wrapper>
	);
}

const Wrapper = styled.div``;

export default H1Mini;
