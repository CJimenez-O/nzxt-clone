import React from "react";
import styled from "styled-components";
import ProductHero from "../../components/ProductHero";
import Video from "../../components/video";
import ProductImageLeft from "../../components/productFlexLeft";
import ProductImageRight from "../../components/ProductFlexRight";
import Warranty from "../../components/warranty";
import Suggestion from "../../components/suggest";
import Footer from "../../components/Footer";
import ProductDisplay from "../../components/ProductDisplay";

function CRFT() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Wrapper>
			<ProductHero
				title="The CRFT Collection"
				subtitle="Custom Crafted, Limited Edition Cases"
				image="https://nzxt.com/assets/cms/34299/1616542416-crfthero.png?auto=format&bg=FFFFFF&dpr=1.5&fit=max&fm=webp&h=460&w=900"
			/>

			<ProductDisplay
				title="GAMING IN OUR DNA"
				details="CRFT is a line of limited edition, officially licensed products based around the communities we love."
				filter="collection/crft"
			/>

			<Video
				upper="CRFT 08: H510"
				title="VALHALLA"
				lower="Limited Edition!"
				url="https://stream.mux.com/yqnk6gcHP9yaIC8gSPlrTMwa4GWzpJDN/high.mp4"
			/>

			<ProductImageLeft
				title="Taste the Nuke"
				description="The H700 Nuka Cola brings a new atomic flavor from the world of Fallout."
				image="https://nzxt.com/assets/cms/34299/1615601793-nuka-feature2-taste-the-nuke.png?ar=1%3A1&auto=format&dpr=2&fit=max&fm=webp&h=470&w=470"
			/>

			<ProductImageRight
				title="Look for the Red Smoke"
				description="Based on the iconic AirDrop crate from PUBG, the CRFT 01 PUBG case is the very first in our CRFT line."
				image="https://nzxt.com/assets/cms/34299/1615592667-h700-pubgno-system-overhead-45.png?ar=1%3A1&auto=format&dpr=2&fit=max&fm=webp&h=470&w=470"
			/>

			<ProductImageLeft
				title="Reclaim Your Birthright"
				description="The H500 Vault Boy ensured components were safe from from wasteland rads."
				image="https://nzxt.com/assets/cms/34299/1611247596-vault-boy-three-quarter.png?ar=1%3A1&auto=format&dpr=1.5&fit=max&fm=webp&h=470&w=470"
			/>

			<ProductImageRight
				title="Reinforce Your Build"
				description="The H510 Siege is the perfect tactical deployment to fortify every R6 fan's position."
				image="https://nzxt.com/assets/cms/34299/1615591252-h510-siegemain01-system.png?ar=1%3A1&auto=format&dpr=2&fit=max&fm=webp&h=470&w=470"
			/>

			<Warranty />
			<Suggestion />
			<Footer />
		</Wrapper>
	);
}

const Wrapper = styled.div``;

export default CRFT;
