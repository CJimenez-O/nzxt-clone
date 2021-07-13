import React from "react";
import styled from "styled-components";
import ProductHero from "../components/ProductHero";
import ProductImageLeft from "../components/productFlexLeft";
import ProductImageRight from "../components/ProductFlexRight";
import Warranty from "../components/warranty";
import Suggestion from "../components/suggest";
import MailingList from "../components/mailingListBtn";
import Footer from "../components/Footer";
import ProductDisplays from "../components/ProductDisplay";

function Starter() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Wrapper>
			<ProductHero
				title="Starter Series"
				subtitle="Pre-built PCs to Start any Gaming Journey"
				image="https://nzxt.com/assets/cms/34299/1616697983-starterlinehero.png?auto=format&bg=FFFFFF&dpr=1.5&fit=max&fm=webp&h=460&w=900"
			/>

			<ProductDisplays
				title="TIME TO START"
				details="The Starter PC Series is built by experts to give gamers a competitive advantage."
				filter="collection/starter"
				height="350px"
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

export default Starter;
