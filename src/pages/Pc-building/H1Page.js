import React from "react";
import styled from "styled-components";
import ProductHero from "../../components/ProductHero";
import Video from "../../components/video";
import ProductImageLeft from "../../components/productFlexLeft";
import ProductImageRight from "../../components/ProductFlexRight";
import Warranty from "../../components/warranty";
import Suggestion from "../../components/suggest";
import Footer from "../../components/Footer";
import ProductDisplay from "../../components/SingleProductDisplay";

function H1() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Wrapper>
			<ProductHero
				title="H1 Series"
				subtitle="Compact Mini-ITX Case w/ AIO PSU & Riser"
				image="https://nzxt.com/assets/cms/34299/1616542412-h1hero.png?auto=format&bg=FFFFFF&dpr=1.5&fit=max&fm=webp&h=460&w=900"
			/>

			<ProductDisplay
				title="Meet the H1 SERIES"
				details="The H1 creates a vertical profile that fits seamlessly into virtually any space without compromise."
				filter="collection/h1"
			/>

			<Video
				upper="SFF Case"
				title="H1"
				lower="Go small. Game big."
				url="https://stream.mux.com/Ub8P2zXC02lQZu298Vvqt1l02v6wOOpbdh/medium.mp4"
			/>

			<ProductImageLeft
				title="Size Without Sacrifice"
				description="Get a small footprint while supporting most full-sized GPUs on the market."
				image="https://nzxt.com/assets/cms/34299/1617214978-h1sizewithoutsacrifice.png?ar=1%3A1&auto=format&dpr=2&fit=max&fm=webp&h=470&w=470"
			/>

			<ProductImageRight
				title="Building Small, Simplified"
				description="The H1 ships with integrated AIO, PSU, Gen 3 riser card, and pre-routed power cables, making this our easiest to build in."
				image="https://nzxt.com/assets/cms/34299/1617214969-h1buildingsmallsimplified.png?ar=1%3A1&auto=format&dpr=2&fit=max&fm=webp&h=470&w=470"
			/>

			<Warranty />
			<Suggestion />
			<Footer />
		</Wrapper>
	);
}

const Wrapper = styled.div``;

export default H1;
