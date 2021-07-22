import React, { useEffect } from "react";
import styled from "styled-components";
import ProductHero from "../components/ProductHero";
import ProductImageLeft from "../components/productFlexLeft";
import ProductImageRight from "../components/ProductFlexRight";
import Warranty from "../components/warranty";
import Suggestion from "../components/suggest";
import MailingList from "../components/mailingListBtn";
import Footer from "../components/Footer";
import ProductDisplays from "../components/ProductDisplay";

function StreamingPc() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<StreamerPc>
			<ProductHero
				title="The Streaming PC"
				subtitle="Don't let your streams be dreams"
				image="https://nzxt.com/assets/cms/34299/1621293341-prebuiltstreaminghero.png?auto=format&bg=FFFFFF&dpr=1.5&fit=max&fm=webp&h=460&w=900"
			/>

			<ProductDisplays
				title="TIME TO STREAM"
				details="The Streaming PC is designed to run the most popular games beautifully while smoothly operating a stream."
				filter="collection/streaming"
			/>

			<ProductImageLeft
				title="Power the Stream"
				description="The Streaming PC is built for quality, entry-level streams. It's an excellent build for multi-tasking, editing, and video rendering."
				image="https://nzxt.com/assets/cms/34299/1616124321-streamingpcwhttomohawkmobohero.png?ar=1%3A1&auto=format&dpr=2&fit=max&fm=webp&h=470&w=470"
			/>

			<ProductImageRight
				title="Built by the Pros"
				description="2-year warranty on all parts & labor as well as professional cable management."
				image="https://nzxt.com/assets/cms/34299/1617232916-streamerbuiltbythepros.png?ar=1%3A1&auto=format&dpr=2&fit=max&fm=webp&h=470&w=470"
			/>

			<Warranty />
			<StreamerPc />
			<Suggestion />
			<MailingList />
			<Footer />
		</StreamerPc>
	);
}

const StreamerPc = styled.div``;

export default StreamingPc;
