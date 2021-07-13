import React from "react";
import styled from "styled-components";
import ProductHero from "../../components/ProductHero";
import ProductImageLeft from "../../components/productFlexLeft";
import ProductImageRight from "../../components/ProductFlexRight";
import Warranty from "../../components/warranty";
import Suggestion from "../../components/suggest";
import Footer from "../../components/Footer";
import ProductDisplay from "../../components/ProductDisplay";

function H510() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Wrapper>
			<ProductHero
				title="H510 Series"
				subtitle="Compact ATX Mid-Tower Cases"
				image="https://nzxt.com/assets/cms/34299/1618005216-h510hero.png?auto=format&bg=FFFFFF&dpr=1.5&fit=max&fm=webp&h=460&w=900"
			/>

			<ProductDisplay
				title="H510 SERIES"
				details="The H510 Series is perfect for any battlestation. Ideal for a small-footprint ATX build without sacrificing features."
				filter="collection/h510"
			/>

			<ProductImageLeft
				title="The Elite"
				description="The H510 Elite combines the intuitive elegance of the H510 Series with vibrant RGB and a tempered glass front panel."
				image="https://nzxt.com/assets/cms/34299/1617215379-h510theelite.png?ar=1%3A1&auto=format&dpr=2&fit=max&fm=webp&h=470&w=470"
			/>

			<ProductImageRight
				title="Let's Get Connected"
				description="The front-panel USB-C connector makes it easier than ever to connect the latest peripherals to your PC."
				image="https://nzxt.com/assets/cms/34299/1617215370-h510letsgetconnected.png?ar=1%3A1&auto=format&dpr=2&fit=max&fm=webp&h=470&w=470"
			/>

			<Warranty />
			<Suggestion />
			<Footer />
		</Wrapper>
	);
}

const Wrapper = styled.div``;

export default H510;
